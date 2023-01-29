function solution(s){
    let answer;
    let myArr = s.split(' ');
    myArr.sort((a,b)=> a-b);
    answer = myArr[0];

    /* 
    let answer, min = Number.MAX_SAFE_INTEGER; // 상당히 큰 정수
    for(let i=0; i<myArr.length; i++){
        if(arr[i]<min) min=arr[i];
    }
    answer = min;
    */
   
    return answer;
}
let s = '5 3 7 11 2 15 17';
console.log(solution(s)); 