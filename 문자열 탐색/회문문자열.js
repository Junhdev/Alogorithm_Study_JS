function solution(input_string) {
    let answer='';
    let tmp = input_string.toLowerCase();
    let input_string2 = tmp.split('').reverse().join('');
    if(tmp === input_string2) {
        answer = 'YES';
    }
    else{
        answer = 'NO';
    }
    return answer;
}

let input_string = 'gvevP';
console.log(solution(input_string));