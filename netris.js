const emptySpaceChar = '.';
const blockChar = '█';

board = {
	// +y ┌─────┐
	//  ▲ │.....│
	//  │ │.....│
	//  │ │.....│
	//  │ │.....│
	//  │ └─────┘
	//  0 ───► +x
	// board[y][x]
	// ie., rows first, then columns within

	boardSize: {
		x: 10,
		y: 20
	},

	init: function() {
		console.log('Initialising board.')
		this.board = Array(this.boardSize.y).fill( 
			Array(this.boardSize.x).fill (
				emptySpaceChar
			)
		)
	},

	printBoard: function() {
		console.log('Printing board.')
		let outputString = ''
	
		// Print top border
		outputString += '┌'
		for (let x = 0; x < this.boardSize.x; x++) {
			outputString += '─'
		}
		outputString += '┐\n'

		// Rows from top to bottom
		for (let y = this.board.length - 1; y >= 0; y--) {
			outputString += '│'
			// Columns from left to right
			for (let x = 0; x < this.board[y].length; x++) {
				outputString += this.board[y][x]
			}
			outputString += '│\n';
		}

		// Print bottom border
		outputString += '└'
		for (let x = 0; x < this.boardSize.x; x++) {
			outputString += '─'
		}
		outputString += '┘\n'

		return outputString
	}
}

board.init()

console.log(board.printBoard());
