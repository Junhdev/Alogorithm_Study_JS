function solution(N, input_string) {
    let answer = 0;
    let inputArr = input_string.split(' ').map((x)=>{return parseInt(x);});
    let score = 0;
    let continuousNum = [];

    // 1. 1번문제가 맞는 경우 1점으로 계산
    if(inputArr[0] === 1){
            score ++;
        }
    for(let i=1; i<inputArr.length; i++){
        // ★문제 조건 case분류 !!
        // 2. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제 1점
        if(inputArr[i-1] === 0 && inputArr[i] === 1 && inputArr[i+1] === 0){
            score ++;
        }

        // 3. 연속으로 답이 맞는 경우의 점수 계산
        if(inputArr[i-1] === 1 && inputArr[i] === 1){ // i=2 ~ i=4 ,, i=7~i=8
            continuousNum.push(i-1); // [2,3]
            
        }
        if(inputArr[i] === 1 && inputArr[i+1] === 0){
            for(let j=1; j<=continuousNum.length+1; j++){
                score += j;
            }
            // conti배열 빈 배열로 초기화 시키기
            continuousNum.splice(0,continuousNum.length);
            //for(let k=0; k<continuousNum.length; k++){
                //continuousNum.pop();
                // pop은 반복문 적용 x
        }
    }
    answer = score;
    return answer;
    
}

console.log(solution(10, '1 0 1 1 1 0 0 1 1 0'));