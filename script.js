// import player from './player';

// import player from './player';

const settingsButton = document.querySelector('#settings');
const boardButtons = document.querySelectorAll('.boardButtons');
const resetButton = document.querySelector('#reset');

// let playerO;
// let playerX;
// let playerAI;
let XTurn = false;
let playerXHasWon = false;
let AIHasWon = false;
let playerOHasWon = false;
// let AIHasWon = false;

settingsButton.addEventListener('click', () => {
	const modelBox = document.querySelector('#modelBox');
	modelBox.style.display = 'block';
});

window.onclick = function (event) {
	if (event.target == modelBox) {
		modelBox.style.display = 'none';
	}
};

const TicTacToeBoard = (() => {
	// const gameBoard = () => gameBoard.updateBoard();
	// gameBoard;
	const updateBoard = () =>
		(function () {
			let gameBoard = [];

			for (let i = 0; i < boardButtons.length; i++) {
				gameBoard.push(boardButtons[i].firstElementChild.innerText);
			}
			return { gameBoard };
		})();

	const resetWinStatus = () =>
		(function () {
			playerXHasWon = false;
			playerOHasWon = false;
		})();

	const resetGameBoard = () =>
		(function () {
			for (let i = 0; i < boardButtons.length; i++) {
				console.log(boardButtons[i].firstElementChild);
				boardButtons[i].firstElementChild.innerText = '';
				boardButtons[i].firstElementChild.classList.remove('x');
				boardButtons[i].firstElementChild.classList.remove('o');
			}
			XTurn = false;
		})();

	const isSpaceEmpty = (button) => {
		for (let i = 0; i < gameBoard.length; i++) {
			if (gameBoard[i].firstElementChild.innerText != null) {
				return true;
			}
		}
		return false;
	};
	const checkIfGameWon = () =>
		(function () {
			let gameBoard = [];

			for (let i = 0; i < boardButtons.length; i++) {
				gameBoard.push(boardButtons[i].firstElementChild.innerText);
			}

			if (gameBoard[4] == 'x' && gameBoard[0] == 'x' && gameBoard[8] == 'x') {
				playerXHasWon = true;
			}
			return { playerXHasWon };
		})();
	// const addMove = (index, sign) => {
	// 	for (let i = 1; i <= index; i++) {
	// 		gameBoard[i] == sign;
	// 	}
	// 	return gameBoard;
	// };

	// const displayBoard = () => gameBoard.generateGameArray();
	// const updateGameBoard
	return {
		updateBoard,
		// addMove,
		checkIfGameWon,
		resetGameBoard,
		resetWinStatus,
		// displayBoard,
	};
})();

//player needs sign and score
//board needs to manage the
const gamePlayer = () => {
	let name, sign, score;
	const getName = () => name;
	const getSign = () => sign;
	const getScore = () => score;

	const initializePlayer = () =>
		(function () {
			let playerSign = document.querySelectorAll('.toggle');
			sign;
			for (let i = 0; i < playerSign.length; i++) {
				if (playerSign[i].classList.contains('active')) {
					if (playerSign[i].firstChild.data == 'clear') {
						sign = 'x';
						name = 'player X';
						XTurn = true;
					} else {
						sign = 'o';
						name = 'player O';
					}
				}
			}
			score = 0;
			return { name, sign, score };
		})();
	const initializeAI = () =>
		(function () {
			let playerSign = document.querySelectorAll('.toggle');
			for (let i = 0; i < playerSign.length; i++) {
				if (playerSign[i].classList.contains('active')) {
				} else {
					if (initializePlayer().sign == 'x') {
						sign = 'o';
						name = 'player O';
					} else {
						sign = 'x';
						name = 'player X';
						XTurn = false;
					}
				}
			}
			score = 0;
			// name = 'AI';

			return { name, sign, score };
		})();
	const addPoint = () => {
		score = getScore() + 1;
		return score;
	};

	playMove = () => {
		if (TicTacToeBoard.isSpaceEmpty() == true) {
		}
	};

	const currentStats = () => {
		return { name, sign, score };
	};
	currentTiles = () => function () {};

	return {
		initializePlayer,
		initializeAI,
		addPoint,
		currentStats,
		getName,
		getScore,
		getSign,
	};
};

// let gameBoard = TicTacToeBoard;
let gameBoard = TicTacToeBoard;
// let gameBoard2 = TicTacToeBoard;
// console.log(gameBoard.generateGameArray());

// let playerOne = gamePlayer('Player 1', 0, 'o');

let playerO = gamePlayer();
playerO.initializePlayer();

let playerX = gamePlayer();
playerX.initializeAI();

resetButton.addEventListener('click', () => {
	gameBoard.resetGameBoard();
});

function resetPlayerWin() {}

boardButtons.forEach((button) => {
	button.addEventListener('click', () => {
		console.log(XTurn);
		if (button.innerText !== '') {
			return;
		}
		if (playerXHasWon == true || playerOHasWon == true) {
			return;
		}
		if (XTurn == true) {
			button.firstElementChild.innerText = playerO.getSign();
			// console.log(playerX.currentStats());
			button.firstElementChild.classList.toggle(playerO.getSign());
			gameBoard.checkIfGameWon();
			if (playerXHasWon == true) playerX.addPoint();

			XTurn = false;
		} else {
			button.firstElementChild.innerText = playerX.getSign();
			button.firstElementChild.classList.toggle(playerX.getSign());
			gameBoard.checkIfGameWon();
			if (playerXHasWon == true) playerX.addPoint();
			XTurn = true;
		}
		// gameBoard.checkIfGameWon();
		gameBoard.resetWinStatus();

		console.log(playerX.currentStats());

		console.log(playerO.currentStats());
		// console.log(gameBoard.checkIfGameWon());
	});
});
