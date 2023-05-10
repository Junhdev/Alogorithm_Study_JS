function solution(inputArr) {
    let myArr = [0,1,0,1];
    let answer = 0;
        for(let j=0; j<inputArr[1]-2; j++){
            myArr.push(0)
        }
        for(let j=0; j<inputArr[1]-2; j++){
            myArr.push(1)
        }
        // myArr[0,1,0,1,0,0,0,0,1,1,1,1]
        // myArr.push(0) inputArr[1]-2번
        // myArr.push(1) inputArr[1]-2번
        let 뻔 = 0;
        let 데기 = 0;
        for(let i=0; i<4+inputArr[1]-2+inputArr[1]-2; i++){
            if(myArr[i] === 0){
                뻔 ++
            }
            else{
                데기 ++
            }
            if(inputArr[2] === 0 && 뻔 === inputArr[1]){
                //i출력
                //i/4 나머지 >> answer
                answer = i%inputArr[0];
                // console.log(i) 왜 3이 나올까? 다음 외치는 이름이 데기일때도 뻔은 2로 그대로이기 떄문!!! >> break 해주어야한다
                break;
            }
            if(inputArr[2] === 1&& 뻔 === inputArr[1]){
                //i출력
                //i/4 나머지 >> answer
                answer = i%inputArr[0];
                break;
            }
        }
        /*
        for(let i=0; j<4; j++){ // 4명에 대해
            [0,0,0,0]
            for(let j=0; j<12; i4++){
                student[i] = myArr[j] // j는 0,4,8
            }
            student[0] = myArr[0]
            student[1] = myArr[1]
            student[2] = myArr[2]
            student[3] = myArr[3]
            student[0] = myArr[4]
            student[1] = myArr[5]
            student[2] = myArr[6]
            student[3] = myArr[7]
            student[0] = myArr[8]
            student[1] = myArr[9]
            student[2] = myArr[10]
            student[3] = myArr[11]
    }*/
    
   
    return answer;
}
let inputArr = [4,6,1];
console.log(solution(inputArr));