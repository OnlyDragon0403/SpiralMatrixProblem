function convertToMatrix(inMatrixElements, NumRows, NumColumns) {
        let i = 0;
        let matrix = [];
        for(i = 0; i < NumRows; i++){
            matrix.push(inMatrixElements.slice(i * NumColumns, (i + 1) * NumColumns));
        }
        return matrix;
    }

function BuildStringFromMatrix(inMatrixElements, NumRows, NumColumns)
{
    let matrix = convertToMatrix(inMatrixElements , NumRows, NumColumns);   // convert one dimentional array to multi dimentional array.
    // check for an edge
    // matrix is empty
    let result = [];
    if(matrix.length === 0)
        return result;
    
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;
    
    while(startRow <= endRow && startCol <= endCol){    // end condition
        for(let col = startCol; col <= endCol; col++){
            result.push(matrix[startRow][col]);
        }
        for(let row = startRow + 1; row <= endRow; row++){
            result.push(matrix[row][endCol]);
        }
        for(let col = endCol - 1; col >= startCol; col--){
        if(startRow == endRow){
                break;
            }
            result.push(matrix[endRow][col]);
        }
        for(let row = endRow - 1; row > startRow; row--){
        if(startCol == endCol){
                break;
            }
            result.push(matrix[row][startCol]);
        }
        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    } 

    return result;
}