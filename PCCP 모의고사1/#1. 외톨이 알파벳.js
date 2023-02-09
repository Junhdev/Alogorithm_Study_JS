function solution(input_string) {
    var answer = '';
    let inputArr = input_string.split('');
    let stack = [];
    let myArr = [];
    stack.push(inputArr[0]);
    for(let i=1; i<inputArr.length; i++){//
        if(stack.includes(inputArr[i])){//stack['e','d']
            if(inputArr[i-1] !== inputArr[i]){
                myArr.push(inputArr[i]); //myArr['e','d']
            } 
        }
        stack.push(inputArr[i]);
    }
    if(!myArr.length){
        return 'N';
    }
    myArr.sort();
    answer = [...new Set(myArr)].join('')
    return answer;
}