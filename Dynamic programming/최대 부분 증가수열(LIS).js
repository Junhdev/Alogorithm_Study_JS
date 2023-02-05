/* 나의 풀이 */
function solution(N, input){
    let answer = 0;
    let inputArr = input.split(' ').map((x)=>{return parseInt(x);});
    let stack = [];
    let myArr = [];
    for(let i=0; i<inputArr.length; i++){
        stack.push(inputArr[i]); // stack[5] // stack[3]
        for(let j=i; j<inputArr.length; j++){ //j=0
            if(inputArr[j]<inputArr[j+1] && stack[0]<inputArr[j+1]/*탐색 시작 숫자보다 큰 지 체크 */){ // 5<3 && 5<3, 3<7 && 5<7 // 3<7 && 3<7, 7<8 && 3<8
                stack.push(inputArr[j+1]); //stack [5,7,8,9] // stack[3,7,8,9]
                //console.log(stack)
            }
        }
        myArr.push(stack.length) // myArr[4,4,...]
        
        for(let k=0; k<stack.length; k++){
            stack.pop();
            stack.pop(); // 다시 확인 **????
            
            //console.log(stack) // stack 길이만큼 pop  stack[5] >> stack[] // ...
        }
        //console.log(stack)
    }

    answer = Math.max(...myArr);

    return answer;

}

let N = 8;
let input = '5 3 7 8 6 2 9 4';
console.log(solution(N, input));



/* 강의 풀이 
function solution(arr){  
    let answer=0;
    let dy=Array.from({length:arr.length}, ()=>0);
    dy[0]=1;
    for(let i=1; i<arr.length; i++){
        let max=0;
        for(let j=i-1; j>=0; j--){
            if(arr[j]<arr[i] && dy[j]>max){
                max=dy[j];
            }
        }
        dy[i]=max+1;
        answer=Math.max(answer, dy[i]);
    }
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
*/