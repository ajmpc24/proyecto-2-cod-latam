// Obtener el formulario por su ID
const form = document.getElementById('contacto');

// Agregar un evento 'submit' al formulario
form.addEventListener('submit', (event) => {
	event.preventDefault();
	// Obtener los valores de los campos del formulario
	const nombre = form.nombre.value.trim();
	const email = form.email.value.trim();
	const mensaje = form.mensaje.value.trim();

	// Validar los campos
	if (nombre === '' || email === '' || mensaje === '') {
		alert('Por favor, complete todos los campos.');
		return;
	}

	// Validar el formato del correo electrónico
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert('Por favor, ingrese un correo electrónico válido.');
		return;
	}

	// Resetear el formulario después de enviar los datos
	form.reset();
});
