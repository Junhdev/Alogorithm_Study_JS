function solution(N){
    let answer;
    let pencil = N/12; 
    answer = Math.ceil(pencil);
    
    return answer;

}
console.log(solution(37));