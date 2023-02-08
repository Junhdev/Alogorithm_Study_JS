function solution(input){
    let answer = '';
    let inputArr = input.split('');
    let stack = [];
    /* for(x of input){
        if(!stack.includes(x)){
            stack.push(x);
        }
    } */
    //answer = stack.join('');
    for(let i=0; i<inputArr.length; i++){
        if(!stack.includes(inputArr[i])){
            stack.push(inputArr[i]);
        }
    } 
    answer = stack.join('');
    return answer;
}

let input = 'ksekkset'
console.log(solution(input));