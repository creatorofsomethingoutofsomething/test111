document.getElementById('authForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'user' && password === 'pass') {
		document.getElementById('login-message').textContent = 'Login successful!';
		document.getElementById('login-message').style.color = 'green';
	} else {
		document.getElementById('login-message').textContent = 'Invalid username or password.';
	}
});
