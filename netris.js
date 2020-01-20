const spaceChar = '.';
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
			Array(this.boardSize.x).fill(0)
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
				outputString += this.board[y][x] ? blockChar : spaceChar
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

blocks = [
	// T
	[
		[1,1,1],
		[0,1,0]
	],
	// S
	[
		[0,1,1],
		[1,1,0]
	],
	// Z
	[
		[1,1,0],
		[0,1,1]
	],
	// L
	[
		[1,1,1],
		[1,0,0]
	],
	// J
	[
		[1,1,1],
		[0,0,1]
	],
	// O
	[
		[1,1],
		[1,1]
	],
	// I
	[
		[1,1,1,1]
	]
]

board.init()

console.log(board.printBoard());
console.log(blocks)
