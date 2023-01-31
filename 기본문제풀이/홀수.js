function solution(input){

    let answerArr = [];
    let inputArr = input.split(' ').map((x)=>{return parseInt(x);});
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<inputArr.length; i++){
        if(inputArr[i] % 2 !== 0){
            sum += inputArr[i];
            if(inputArr[i] < min){
                min = inputArr[i];
            }

        }
        
    }

    answerArr.push(sum);
    answerArr.push(min);
    let answer = answerArr.join('\n'); // 리턴값 여러개를 여러줄에 출력하고 싶을 때
    return answer;
    
}

let input = '12 77 38 41 53 92 85';
console.log(solution(input));