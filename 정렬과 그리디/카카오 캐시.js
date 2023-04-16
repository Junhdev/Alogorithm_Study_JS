function solution(S,N,input_string) {
    let answer = '';
    let inputArr = input_string.split(' ');
    let stack = [];
    stack.push(inputArr[0]);
    for(let i=1; i<N; i++){
        if(stack.includes(inputArr[i])){ //i=5, 2,[6,2,3,1]
            // 포함되어있는 인덱스 번호 찾기
            let index = stack.indexOf(inputArr[i]); // 1
            // 포함되어있는 원소 기준 왼쪽 원소들만 선택정렬
            for(let j=index-1; j>=0; j--){ // j=0
                stack[j+1] = stack[j] // stack[6,6,3,1]
                
            }
            stack[0] = inputArr[i]
        }
        else{ // 맨 뒤 원소 제거 , 한칸씩 뒤로 옮김, 맨 앞에 추가
            stack.unshift(inputArr[i]);
            if(stack.length>S){
                stack.pop();
            }
        }
    }
    
    answer = stack.join(' ');
    return answer;
}
let input_string2 = '1 2 3 2 6 2 3 5 7'
console.log(solution(5,9,input_string))