const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { fork } = require('child_process');
const { enable } = require('@electron/remote/main');
const fetch = require('electron-fetch').default;
const { spawn } = require('child_process');

let mainWindow;
let server;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    icon: path.join(__dirname, 'src/necessary/icon/icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      accelerator: false,
      worldSafeExecuteJavaScript: false,
      enableRemoteModule: true,
    },
    maximizable: false,
    fullscreenable: false,
    resizable: false,
    frame: false,
    hasShadow: false,
    alwaysOnTop: false,
  });

  mainWindow.loadFile(path.join(__dirname, 'src/home.html'));

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('start-server');
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  const serverPath = path.join(__dirname, 'src', 'server.js');
  server = fork(serverPath, [], { cwd: path.join(__dirname, 'src') });

  server.on('error', (err) => {
    console.error('Error ejecutando el servidor:', err);
  });

  app.on('before-quit', () => {
    server.kill();
  });

  const appPath = path.join(__dirname, 'src', 'settings', 'app.js');
  const child = spawn('node', [appPath], { cwd: path.join(__dirname, 'src', 'settings') });

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  child.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  child.on('error', (err) => {
    console.error('Error ejecutando el archivo app.js:', err);
  });

  child.on('close', (code) => {
    console.log(`El archivo app.js ha finalizado con código de salida ${code}`);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

app.on('browser-window-created', (_, window) => {
  window.webContents.on('did-finish-load', () => {
    window.webContents.send('start-server');
  });

  window.webContents.on('did-finish-load', () => {
    window.webContents.send('register-window-events');
  });
});

ipcMain.on('cerrar-ventana', () => {
  app.quit();
});

ipcMain.on('minimizar-ventana', () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    window.minimize();
  }
});


