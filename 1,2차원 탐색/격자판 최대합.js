function solution(N, inputArr) {
    let resultSum = [];
    let columnSum = 0;
    let rowSum = 0;
    let rightDiagonalSum = 0;
    let leftDiagonalSum = 0;
    
    for(let i=0; i<inputArr.length; i++){
        rightDiagonalSum += inputArr[i][i];
        for(let j=0; j<N; j++){
            columnSum += inputArr[i][j];
            rowSum += inputArr[j][i];
        }
        resultSum.push(columnSum);
        resultSum.push(rowSum);
        columnSum = 0;
        rowSum = 0;
    }
    resultSum.push(rightDiagonalSum);
    // console.log(resultSum);
    for(let k=N-1; k>=0; k--){
        leftDiagonalSum += inputArr[k][k];
    }
    resultSum.push(leftDiagonalSum);

    let answer = Math.max(...resultSum);
    return answer;
}
let inputArr = [[10,13,10,12,15], [12,39,30,23,11], [11,25,50,53,15], [19,27,29,37,27], [19,13,30,13,19]]

console.log(solution(5, inputArr));