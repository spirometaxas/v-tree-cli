const getWidth = function(n) {
  return Math.pow(2, n + 2);
}

const getHeight = function(n) {
  return Math.pow(2, n + 1);
}

const getSquareWidth = function(n) {
  return Math.pow(2, n + 1) + 1;
}

const getSquareHeight = function(n) {
  return Math.pow(2, n) + 1;
}

const isValidRotation = function(rotation) {
  return rotation !== undefined && (rotation.toLowerCase() === 'left' || rotation.toLowerCase() === 'right' || rotation.toLowerCase() === 'flip' || rotation.toLowerCase() === 'standard');
}

const LINES = {
  '─': {
    STANDARD: '─',
    BOLD: '━',
    DOUBLE: '═',
  },
  '│': {
    STANDARD: '│',
    BOLD: '┃',
    DOUBLE: '║',
  },
  '┌': {
    STANDARD: '┌',
    BOLD: '┏',
    DOUBLE: '╔',
  },
  '┐': {
    STANDARD: '┐',
    BOLD: '┓',
    DOUBLE: '╗',
  },
  '┘': {
    STANDARD: '┘',
    BOLD: '┛',
    DOUBLE: '╝',
  },
  '└': {
    STANDARD: '└',
    BOLD: '┗',
    DOUBLE: '╚',
  },
  '┴': {
    STANDARD: '┴',
    BOLD: '┻',
    DOUBLE: '╩',
  },
  '├': {
    STANDARD: '├',
    BOLD: '┣',
    DOUBLE: '╠',
  },
  '┤': {
    STANDARD: '┤',
    BOLD: '┫',
    DOUBLE: '╣',
  },
  '┬': {
    STANDARD: '┬',
    BOLD: '┳',
    DOUBLE: '╦',
  },
};

const getLine = function(lineId, lineType) {
  if (LINES[lineId] !== undefined && lineType !== undefined) {
    return LINES[lineId][lineType.toUpperCase()];
  } else if (LINES[lineId] !== undefined) {
    return LINES[lineId].STANDARD;
  } else {
    return ' ';
  }
}

const getLineType = function(line) {
  if (line !== undefined && (line.toLowerCase() === 'standard' || line.toLowerCase() === 'double' || line.toLowerCase() === 'bold')) {
    return line.toLowerCase();
  }
  return 'standard';
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawSquareBL = function(board, pos, size) {
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y][pos.x + i] = '─';
  }
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y + getSquareHeight(size) - 1][pos.x + i] = '─';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y + i][pos.x] = '│';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y + i][pos.x + getSquareWidth(size) - 1] = '│';
  }

  if (pos.x === 0 && pos.y === 0) {
    board[pos.y][pos.x] = '└';
  } else if (pos.x > 0 && board[pos.y][pos.x - 1] !== ' ') {
    board[pos.y][pos.x] = '┴';
  } else {
    board[pos.y][pos.x] = '├';
  }

  if (pos.x + getSquareWidth(size) < board[pos.y].length && board[pos.y][pos.x + getSquareWidth(size)] !== ' ') {
    board[pos.y][pos.x + getSquareWidth(size) - 1] = '┴';
  } else {
    board[pos.y][pos.x + getSquareWidth(size) - 1] = '┘';
  }

  if (pos.y + getSquareHeight(size) < board.length && board[pos.y + getSquareHeight(size)][pos.x] !== ' ') {
    board[pos.y + getSquareHeight(size) - 1][pos.x] = '├';
  } else {
    board[pos.y + getSquareHeight(size) - 1][pos.x] = '┌';
  }
  
  board[pos.y + getSquareHeight(size) - 1][pos.x + getSquareWidth(size) - 1] = '┐';
}

const drawSquareBR = function(board, pos, size) {
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y][pos.x - i] = '─';
  }
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y + getSquareHeight(size) - 1][pos.x - i] = '─';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y + i][pos.x] = '│';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y + i][pos.x - getSquareWidth(size) + 1] = '│';
  }

  if (pos.x === (board[pos.y].length - 1) && pos.y === 0) {
    board[pos.y][pos.x] = '┘';
  } else if (pos.x < (board[pos.y].length - 1) && board[pos.y][pos.x + 1] !== ' ') {
    board[pos.y][pos.x] = '┴';
  } else {
    board[pos.y][pos.x] = '┤';
  }

  if (pos.x - getSquareWidth(size) >= 0 && board[pos.y][pos.x - getSquareWidth(size)] !== ' ') {
    board[pos.y][pos.x - getSquareWidth(size) + 1] = '┴';
  } else {
    board[pos.y][pos.x - getSquareWidth(size) + 1] = '└';
  }

  if (pos.y + getSquareHeight(size) < board.length && board[pos.y + getSquareHeight(size)][pos.x] !== ' ') {
    board[pos.y + getSquareHeight(size) - 1][pos.x] = '┤';
  } else {
    board[pos.y + getSquareHeight(size) - 1][pos.x] = '┐';
  }

  board[pos.y + getSquareHeight(size) - 1][pos.x - getSquareWidth(size) + 1] = '┌';
}

const drawSquareTL = function(board, pos, size) {
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y][pos.x + i] = '─';
  }
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y - getSquareHeight(size) + 1][pos.x + i] = '─';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y - i][pos.x] = '│';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y - i][pos.x + getSquareWidth(size) - 1] = '│';
  }

  if (pos.x === 0 && pos.y === board.length - 1) {
    board[pos.y][pos.x] = '┌';
  } else if (pos.y < (board.length - 1) && board[pos.y + 1][pos.x] !== ' ') {
    board[pos.y][pos.x] = '├';
  } else {
    board[pos.y][pos.x] = '┬';
  }

  if (pos.y - getSquareHeight(size) >= 0 && board[pos.y - getSquareHeight(size)][pos.x] !== ' ') {
    board[pos.y - getSquareHeight(size) + 1][pos.x] = '├';
  } else {
    board[pos.y - getSquareHeight(size) + 1][pos.x] = '└';
  }

  if (pos.x + getSquareWidth(size) < board[pos.y].length && board[pos.y][pos.x + getSquareWidth(size)] !== ' ') {
    board[pos.y][pos.x + getSquareWidth(size) - 1] = '┬';
  } else {
    board[pos.y][pos.x + getSquareWidth(size) - 1] = '┐';
  }

  board[pos.y - getSquareHeight(size) + 1][pos.x + getSquareWidth(size) - 1] = '┘';
}

const drawSquareTR = function(board, pos, size) {
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y][pos.x - i] = '─';
  }
  for (let i = 1; i < getSquareWidth(size) - 1; i++) {
    board[pos.y - getSquareHeight(size) + 1][pos.x - i] = '─';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y - i][pos.x] = '│';
  }
  for (let i = 1; i < getSquareHeight(size) - 1; i++) {
    board[pos.y - i][pos.x - getSquareWidth(size) + 1] = '│';
  }

  if (pos.x === board[pos.y].length - 1 && pos.y === board.length - 1) {
    board[pos.y][pos.x] = '┐';
  } else if (pos.y < (board.length - 1) && board[pos.y + 1][pos.x] !== ' ') {
    board[pos.y][pos.x] = '┤';
  } else {
    board[pos.y][pos.x] = '┬';
  }

  if (pos.y - getSquareHeight(size) >= 0 && board[pos.y - getSquareHeight(size)][pos.x] !== ' ') {
    board[pos.y - getSquareHeight(size) + 1][pos.x] = '┤';
  } else {
    board[pos.y - getSquareHeight(size) + 1][pos.x] = '┘';
  }

  if (pos.x - getSquareWidth(size) > 0 && board[pos.y][pos.x - getSquareWidth(size)] !== ' ') {
    board[pos.y][pos.x - getSquareWidth(size) + 1] = '┬';
  } else {
    board[pos.y][pos.x - getSquareWidth(size) + 1] = '┌';
  }

  board[pos.y - getSquareHeight(size) + 1][pos.x - getSquareWidth(size) + 1] = '└';
}

const drawSquare = function(board, pos, size, type) {
  if (type === 'BR') {
    drawSquareBR(board, pos, size);
  } else if (type === 'TL') {
    drawSquareTL(board, pos, size);
  } else if (type === 'TR') {
    drawSquareTR(board, pos, size);
  } else {
    drawSquareBL(board, pos, size);
  }
}

const vtree = function(n, size, board, pos, type) {
  drawSquare(board, pos, size, type);
  if (n <= 0) {
    return;
  }

  if (type === 'BR') {
    vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y + getHeight(size - 1) }, type);
    vtree(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1), y: pos.y }, type);
  } else if (type === 'TL') {
    vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y - getHeight(size - 1) }, type);
    vtree(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y }, type);
  } else if (type === 'TR') {
    vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y - getHeight(size - 1) }, type);
    vtree(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1), y: pos.y }, type);
  } else {
    vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y + getHeight(size - 1) }, type);
    vtree(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y }, type);
  }
}

const draw = function(board, lineType) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += getLine(board[board.length - i - 1][j], lineType); 
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }

  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const lineType = config !== undefined ? getLineType(config.line) : undefined;
  const rotate = config !== undefined && isValidRotation(config.rotate) ? config.rotate.toLowerCase() : 'standard';

  const board = createBoard(getWidth(size), getHeight(size));

  let type = 'BL';
  let pos = { x: 0, y: 0 };
  if (rotate === 'left') {
    type = 'BR';
    pos = { x: board[0].length - 1, y: 0 };
  } else if (rotate === 'right') {
    type = 'TL';
    pos = { x: 0, y: board.length - 1 };
  } else if (rotate === 'flip') {
    type = 'TR';
    pos = { x: board[0].length - 1, y: board.length - 1 };
  }

  vtree(n, size, board, pos, type);
  return draw(board, lineType);
}

module.exports = {
  create: create
};