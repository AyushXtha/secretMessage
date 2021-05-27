console.log('hello there');

hash = atob(document.location.hash.replace('#', ''));

if (hash) {
	document.querySelector('#secret-message').querySelector('h1').innerText = hash;
	document.querySelector('#secret-message').classList.remove('hide');
	document.querySelector('#message-form').classList.add('hide');
}
document.querySelector('#messageInput').addEventListener('click', () => {
	document.querySelector('#messageInput').select();
});

document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();
	document.querySelector('#link-form').classList.remove('hide');
	document.querySelector('#message-form').classList.add('hide');

	const messageInput = document.querySelector('#messageInput');
	const linkInput = document.querySelector('#linkInput');
	console.log(messageInput.value);

	const encodedText = btoa(messageInput.value);
	const encodedMessage = `${window.location}` + '#' + encodedText;

	linkInput.value = encodedMessage;
	linkInput.select();
});
