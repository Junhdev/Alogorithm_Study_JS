function solution(input_string) {
    let answer = '';
    let inputArr = input_string.split('');
    let repeat = 1;
    let stack = [];
    stack.push(inputArr[0]);
    for(let i=0; i<inputArr.length; i++){
        if(inputArr[i] === inputArr[i+1]){ // K = K // S = S
            //stack.push(inputArr[i]); // [K] // [K,2,H,S,S]
            repeat ++; // 2 // 2 // 3 // ... // 7
        }
        else{ // ... // S !== E
            if(repeat !== 1){ // 2!==1 // X // 7 !==1 
                stack.push(repeat); // [K,2] // [K,2,H,S,7]
            }
            stack.push(inputArr[i+1]); // [K,2,H] // [K,2,H,S] // [K,2,H,S,7,E]
            repeat = 1; // 1
        }
    }
    answer = stack.join('');
    return answer;
}
let input_string = 'KKHSSSSSSSE'
console.log(solution(input_string));