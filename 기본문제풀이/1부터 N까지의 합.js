function solution(N){
    let answer = 0;
    for(let i=1; i<=N; i++){
        answer += i;
    }
    return answer;
}
console.log(solution(6));