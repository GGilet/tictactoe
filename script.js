const settingsButton = document.querySelector('#settings');

settingsButton.addEventListener('click', () => {
	const modelBox = document.querySelector('#modelBox');
	modelBox.style.display = 'block';
});

window.onclick = function (event) {
	console.log(event.target);
	if (event.target == modelBox) {
		modelBox.style.display = 'none';
	}
};
