export default TicTacToeBoard = (() => {
	const generateGameArray = () =>
		(function () {
			let gameBoard = [];
			for (let i = 0; i < boardButtons.length; i++) {
				gameBoard.push(boardButtons[i]);
			}
			return { gameBoard };
		})();
	return { generateGameArray };
})();
