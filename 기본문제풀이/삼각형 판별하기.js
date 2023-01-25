function solution(a, b, c){
    let answer;
    let max;

    if(a<b){
        max = b;
    }
    else{
        max = a;
    }
    if(max<c){
        max = c;
    }

    if(max==a){
        if(a<b+c){
            answer = 'YES';
        }
        else{
            answer = 'NO';
        }
    }
    if(max==b){
        if(b<a+c){
            answer = 'YES';
        }
        else{
            answer = 'NO';
        }
    }
    if(max==c){
        if(c<a+b){
            answer = 'YES';
        }
        else{
            answer = 'NO';
        }
    }
    return answer;
}

console.log(solution(13,33,17));

/* 다른 풀이 
 function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO"; 
    return answer;
}

console.log(solution(13, 33, 17));
*/