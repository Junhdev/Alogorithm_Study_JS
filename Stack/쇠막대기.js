/* 나의 풀이 >>> 중요! */
function solution(s){
    let myArr = s.split('');
    let answer=0;
    let stick=0;
    for(let i=0; i<myArr.length; i++){
        if (myArr[i]==='(' && myArr[i+1] !== ')'){
            stick += 1;
        }
        else if(myArr[i]==='(' && myArr[i+1] ===')'){ //쇠막대기를 자르는 레이저는 적어도 하나 존재하므로 이 순서가 밑 순서보다 항상 먼저 일어난다.
            answer += stick;
        }
        else if(myArr[i]===')' && myArr[i-1] !== '(' ){ // 디버깅 하면서 수정 ( 결과값 확인하여 어디가 틀렸는 지 입력예시 단계적으로 대입해보면서 분석)
            stick -= 1;
            answer += 1;
        }
        
    }
    return answer;
}
console.log(solution('(((()(()()))(())()))(()())'));


/*
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
*/