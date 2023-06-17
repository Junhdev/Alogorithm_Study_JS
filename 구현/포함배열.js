/* 네이버 부스트캠프 예시문제 풀이 */
// 풀이1 - Map 객체 활용
function solution(arr){
    let answer = [];
    let arrMap = new Map();
    
    arrMap.set(arr[0],1)
    for(let i=1; i<arr.length; i++){
        
        
        if(arrMap.has(arr[i])){
            let before = arrMap.get(arr[i])
            // 수정의 기능 >> key 순서 그대로
            arrMap.set(arr[i], before+1)
        }
        else{
            // 수정의 기능 >> key 순서 그대로
            arrMap.set(arr[i], 1)
        }
    }

    let flag = false;
    for (const [key, value] of arrMap) {
        if(value > 1){
            answer.push(value)
        }
        if(value !== 1){
            flag = true;
        }
    }
    if(flag === false){
        answer.push(-1)
    }
    
    
   
    return answer;
}
console.log(solution([1,2,4,3,4,3,4,3,2]))

// 상태 이중 배열 활용

function solution(arr){
    let answer = [];
    let stack = [];
    stack.push([arr[0],1]);
    let flag = false
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<stack.length; j++){
            if(stack[j][0] === arr[i]){
                stack[j][1] ++
                flag = true
            }
        }
        if(flag === false){
            stack.push([arr[i],1])
        }

    }
    
    let flag2 = false
    for(let i=0; i<stack.length; i++){

            if(stack[i][1] > 1){
                answer.push(stack[i][1])
                flag2 = true
            }
            
        
    }
    if(flag2 === false){
        answer.push(-1)
    }
   
    return answer;
}
console.log(solution([1,2,4,3,4,3,4,3,2]))