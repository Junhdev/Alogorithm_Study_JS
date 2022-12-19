function solution(s){
    let answer=0;
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='(') stack.push('(');
        else{ // s[i]===')' 이면 2가지 case로 분류
            stack.pop(); //stack에서 pop해도 s에는 영향을 미치지 않는다.
            if(s[i-1]==='(') answer+=stack.length;
            else answer+=1;
            //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
        }
    }                          
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));