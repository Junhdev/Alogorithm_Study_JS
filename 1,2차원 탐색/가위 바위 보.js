function solution(N, inputArr) {
    let answer = '';
    let stack = [];
    for(let j=0; j<N; j++){
        if(inputArr[0][j] === 1 && inputArr[1][j] === 3){
            stack.push('A');
        }
        else if(inputArr[0][j] === 3 && inputArr[1][j] === 1){
            stack.push('B');
        }
        else if(inputArr[0][j] > inputArr[1][j]){
            stack.push('A');
        }
        else if(inputArr[0][j] < inputArr[1][j]){
            stack.push('B');
        }
        else if(inputArr[0][j] === inputArr[1][j]){
            stack.push('D');
        }
    }
    answer = stack.join('\n');
    return answer;
}

let inputArr = [[2,3,3,1,3], [1,1,2,2,3]];
console.log(solution(5, inputArr));