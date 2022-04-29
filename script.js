// import player from './player';

// import player from './player';

const settingsButton = document.querySelector('#settings');
const boardButtons = document.querySelectorAll('.boardButtons');
const resetButton = document.querySelector('#reset');
const xScore = document.querySelector('.xScore');
const oScore = document.querySelector('.oScore');
const drawScore = document.querySelector('.drawScore');
let XTurn = true;
let playerXHasWon = false;
let AIHasWon = false;
let playerOHasWon = false;
let draws = 0;
let numberOfTurns = 0;

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
	const updateBoard = () =>
		(function () {
			let gameBoard = [];

			for (let i = 0; i < boardButtons.length; i++) {
				gameBoard.push(boardButtons[i].firstElementChild.innerText);
			}
			xScore.firstChild.innerText = playerO.getScore();
			oScore.firstChild.innerText = playerX.getScore();
			drawScore.firstChild.innerText = draws;
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
			numberOfTurns = 0;
			XTurn = true;
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
			if (XTurn == true) {
				if (gameBoard[4] == 'x' && gameBoard[0] == 'x' && gameBoard[8] == 'x') {
					playerXHasWon = true;
				} else if (
					gameBoard[4] == 'x' &&
					gameBoard[2] == 'x' &&
					gameBoard[6] == 'x'
				) {
					playerXHasWon = true;
				} else if (
					gameBoard[4] == 'x' &&
					gameBoard[1] == 'x' &&
					gameBoard[7] == 'x'
				) {
					playerXHasWon = true;
				} else if (
					gameBoard[4] == 'x' &&
					gameBoard[3] == 'x' &&
					gameBoard[5] == 'x'
				) {
					playerXHasWon = true;
				} else if (
					gameBoard[0] == 'x' &&
					gameBoard[3] == 'x' &&
					gameBoard[6] == 'x'
				) {
					playerXHasWon = true;
				} else if (
					gameBoard[0] == 'x' &&
					gameBoard[1] == 'x' &&
					gameBoard[2] == 'x'
				) {
					playerXHasWon = true;
				} else if (
					gameBoard[6] == 'x' &&
					gameBoard[7] == 'x' &&
					gameBoard[8] == 'x'
				) {
					playerXHasWon = true;
				} else if (
					gameBoard[2] == 'x' &&
					gameBoard[5] == 'x' &&
					gameBoard[8] == 'x'
				) {
					playerXHasWon = true;
				}
			} else {
				if (gameBoard[4] == 'o' && gameBoard[0] == 'o' && gameBoard[8] == 'o') {
					playerOHasWon = true;
				} else if (
					gameBoard[4] == 'o' &&
					gameBoard[2] == 'o' &&
					gameBoard[6] == 'o'
				) {
					playerOHasWon = true;
				} else if (
					gameBoard[4] == 'o' &&
					gameBoard[1] == 'o' &&
					gameBoard[7] == 'o'
				) {
					playerOHasWon = true;
				} else if (
					gameBoard[4] == 'o' &&
					gameBoard[3] == 'o' &&
					gameBoard[5] == 'o'
				) {
					playerOHasWon = true;
				} else if (
					gameBoard[0] == 'o' &&
					gameBoard[3] == 'o' &&
					gameBoard[6] == 'o'
				) {
					playerOHasWon = true;
				} else if (
					gameBoard[0] == 'o' &&
					gameBoard[1] == 'o' &&
					gameBoard[2] == 'o'
				) {
					playerOHasWon = true;
				} else if (
					gameBoard[6] == 'o' &&
					gameBoard[7] == 'o' &&
					gameBoard[8] == 'o'
				) {
					playerOHasWon = true;
				} else if (
					gameBoard[2] == 'o' &&
					gameBoard[5] == 'o' &&
					gameBoard[8] == 'o'
				) {
					playerOHasWon = true;
				}
			}

			return { playerXHasWon, playerOHasWon };
		})();
	return {
		updateBoard,
		checkIfGameWon,
		resetGameBoard,
		resetWinStatus,
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
	playGame();
});

function resetPlayerWin() {}

function playGame() {
	boardButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (button.innerText !== '') {
				return;
			}

			if (XTurn == true) {
				button.firstElementChild.innerText = playerO.getSign();
				button.firstElementChild.classList.toggle(playerO.getSign());
				gameBoard.checkIfGameWon();
				XTurn = false;
				if (playerXHasWon == true) {
					playerO.addPoint();
					gameBoard.resetGameBoard();
					gameBoard.updateBoard();
				}
				numberOfTurns++;
			} else {
				button.firstElementChild.innerText = playerX.getSign();
				button.firstElementChild.classList.toggle(playerX.getSign());
				gameBoard.checkIfGameWon();
				XTurn = true;

				if (playerOHasWon == true) {
					playerX.addPoint();
					gameBoard.resetGameBoard();
					gameBoard.updateBoard();
				}
				numberOfTurns++;
			}
			if (numberOfTurns == 9) {
				draws++;

				gameBoard.resetGameBoard();
				gameBoard.updateBoard();
			}

			console.log(gameBoard.updateBoard().gameBoard);
		});
	});
}

playGame();

/*
Make a checkIfDraw in the gameBoard, filter for empty string. If return -1, draw ++, reset board, then update board
*/
