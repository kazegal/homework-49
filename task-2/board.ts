const generateChessBoard = (size: number): string[][] => {
    const board: string[][] = [];

    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = (i + j) % 2 === 0 ? '#' : '*';
        }
    }

    return board;
};

const printChessBoard = (board: string[][]): void => {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(''));
    }
};

const boardSize: number = 8;
const chessBoard: string[][] = generateChessBoard(boardSize);
printChessBoard(chessBoard);