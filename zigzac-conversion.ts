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

function convert(s: string, numRows: number): string {
  return solution(s, numRows);
}

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("AB", 1)); // AB
