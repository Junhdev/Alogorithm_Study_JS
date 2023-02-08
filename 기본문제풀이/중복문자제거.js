function solution(input){
    let answer = '';
    let inputArr = input.split('');
    
    let stack = [];
    for(let i=0; i<inputArr; i++){
        if(stack.includes(inputArr[i])){
            stack.push(inputArr[i]);
            
        }
        
    }
    return stack;

}

let input = 'ksekkset'
console.log(solution(input));