
function discordkalium() {
	const electron = require('electron');
	const { shell } = electron;
	const Swal = require('sweetalert2');
	const radios = document.getElementsByName('slider');
	let subscription;

	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			subscription = radios[i].id;
			break;
		}
	}

	switch (subscription) {
		case 'tab-1':
			Swal.fire({
				title: 'Confirm the choice',
				text: 'Do you want to get the role of hacker?',
				icon: 'info',
				backdrop: `
          rgba(0,0,0,0.4)
          url('https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif')
          left top
          no-repeat
        `,
				showCancelButton: true,
				confirmButtonText: 'Yes, Continue',
				cancelButtonText: 'No, Cancel',
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				customClass: {
					confirmButton: 'swal-button',
					cancelButton: 'swal-button-cancel',
				},
				allowOutsideClick: false,
				allowEscapeKey: false,
			}).then((result) => {
				if (result.isConfirmed) {
					shell.openExternal('https://discord.gg/xEadErKHK9');
				}
			});
			break;
		case 'tab-2':
			Swal.fire({
				title: 'Confirm the choice',
				text: 'Do you want to get the role of kiddie?',
				icon: 'info',
				backdrop: `
        rgba(0,0,123,0.4)
        url('https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif')
        center top
        no-repeat
        `,
				showCancelButton: true,
				confirmButtonText: 'Yes, Continue',
				cancelButtonText: 'No, Cancel',
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				customClass: {
					confirmButton: 'swal-button',
					cancelButton: 'swal-button-cancel',
				},
				allowOutsideClick: false,
				allowEscapeKey: false,
			}).then((result) => {
				if (result.isConfirmed) {
					shell.openExternal('https://discord.gg/xEadErKHK9');
				}
			});
			break;
		case 'tab-3':
			Swal.fire({
				title: 'Confirm the choice',
				text: 'Do you want to get the role of scripter?',
				icon: 'info',
				backdrop: `
          rgba(0,0,0,0.4)
          url('https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif')
          right top
          no-repeat
        `,
				showCancelButton: true,
				confirmButtonText: 'Yes, Continue',
				cancelButtonText: 'No, Cancel',
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				customClass: {
					confirmButton: 'swal-button',
					cancelButton: 'swal-button-cancel',
				},
				allowOutsideClick: false,
				allowEscapeKey: false,
			}).then((result) => {
				if (result.isConfirmed) {
					shell.openExternal('https://discord.gg/xEadErKHK9');
				}
			});
			break;
		default:
			Swal.fire({
				title: 'Error',
				text: 'Debes seleccionar una suscripción',
				icon: 'error',
				customClass: {
					confirmButton: 'swal-button',
				},
				allowOutsideClick: false,
				allowEscapeKey: false,
			});
	}
}

function copydiscord() {
	const Swal = require('sweetalert2');
	const elementbutton = document.getElementById('discordbuttoncopy').addEventListener('click', copydiscord)
	const textToCopy = 'stryketom';
	const inputElement = document.createElement('input');
	inputElement.value = textToCopy;
	document.body.appendChild(inputElement);
	inputElement.select();
	document.execCommand('copy');
	document.body.removeChild(inputElement);

	Swal.fire({
		icon: 'success',
		title: '¡Copiado!',
		text: 'Se ha copiado en el portapapeles con exito',
	});
}
