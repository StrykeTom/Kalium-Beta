function cerrar() {
  const { ipcRenderer } = require('electron');

  ipcRenderer.send('cerrar-ventana');
}

function minimizar() {
  const { ipcRenderer } = require('electron');

  ipcRenderer.send('minimizar-ventana');
}