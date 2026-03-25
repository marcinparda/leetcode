type Direction = "down" | "up-right" | "right";

function nextDirection(
  dir: Direction,
  maxRows: number,
  currentRow: number,
): Direction {
  if (maxRows === 1) {
    return "right";
  }
  if (currentRow === maxRows - 1) {
    return "up-right";
  }
  if (currentRow === 0) {
    return "down";
  }
  return dir;
}

function matrixToString(matrix: string[][]): string {
  let s = "";
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      s += matrix[row][column];
    }
  }
  return s;
}

function calculateNrOfColumns(sLength: number, numRows: number): number {
  let nrOfColumns = 0;
  while (sLength > 0) {
    sLength -= numRows;
    nrOfColumns += 1;
    if (sLength <= 0) {
      break;
    }
    if (numRows > 2) {
      sLength -= numRows - 2;
      nrOfColumns += numRows - 2;
    }
  }
  return nrOfColumns;
}

function solution(s: string, numRows: number): string {
  const nrOfColumns = calculateNrOfColumns(s.length, numRows);
  let matrix: string[][] = Array.from({ length: numRows }, () =>
    Array.from({ length: nrOfColumns }, () => ""),
  );
  let column = 0;
  let row = 0;
  let direction: Direction = "up-right";
  for (let i = 0; i < s.length; i++) {
    matrix[row][column] = s[i];
    direction = nextDirection(direction, numRows, row);

    if (direction === "down") {
      row += 1;
    }
    if (direction === "right") {
      column += 1;
    }
    if (direction === "up-right") {
      row -= 1;
      column += 1;
    }
  }

  return matrixToString(matrix);
}

function recursive(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let text = "";
  for (let i = 0; i < numRows; i++) {
    const isMiddleRow = i > 0 && i < numRows - 1;
    const isTopRow = i === 0;
    const isBottomRow = i === numRows - 1;
    const rowsBelow = numRows - (i + 1);
    const rowsAbove = i;

    let strIndex = i;
    if (s.at(strIndex)) text += s[strIndex];
    while (strIndex < s.length - 1) {
      if (isMiddleRow) {
        strIndex += rowsBelow * 2;
        // console.log({ rowsBelow, i });
        if (s.at(strIndex)) text += s[strIndex];

        strIndex += rowsAbove * 2;
        // console.log({ rowsAbove, i });
        if (s.at(strIndex)) text += s[strIndex];
      }
      if (isTopRow) {
        strIndex += rowsBelow * 2;
        if (s.at(strIndex)) text += s[strIndex];
        console.log({ rowsBelow, i });
      }
      if (isBottomRow) {
        strIndex += rowsAbove * 2;
        if (s.at(strIndex)) text += s[strIndex];
        console.log({ rowsAbove, i });
      }
      if (strIndex >= s.length - 1) break;
    }
  }
  return text;
}

function convert(s: string, numRows: number): string {
  return recursive(s, numRows);
}

// console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
// console.log(convert("AB", 1)); // AB
console.log(convert("A", 2)); // A

// P A H N
// APLSIIG
// Y I R

// A   I   R
// B  HJ  P
// C G K O
// DF  LN
// E   M
