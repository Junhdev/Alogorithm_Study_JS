function solution(input_string) {
    var answer = '';
    let inputArr = input_string.split('');
    let stack = [];
    let myArr = [];
    stack.push(inputArr[0]);
    for(let i=1; i<inputArr.length; i++){//
        if(stack.includes(inputArr[i])){//stack['e'] // stack['e','d'] // stack['e','d','e']
            if(inputArr[i-1] !== inputArr[i]){ // 'd' !== 'e'
                myArr.push(inputArr[i]); // x // myArr['e'] // ... // myArr['e','d']
            } 
        }
        stack.push(inputArr[i]);
    }
    if(!myArr.length){
        return 'N';
    }
    myArr.sort();
    answer = [...new Set(myArr)].join('');
    return answer;
}