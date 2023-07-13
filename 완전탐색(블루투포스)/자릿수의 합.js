function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
        }
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}
