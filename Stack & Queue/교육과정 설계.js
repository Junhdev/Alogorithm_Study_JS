/* 나의풀이 */
function solution(necSubject, buildSubject){

    let answer = 'YES';
    let necArr = necSubject.split('');
    let subjectArr = buildSubject.split('');
    let stack = [];
    for(let i=0; i<subjectArr.length; i++){
        if(necArr.includes(subjectArr[i])){
            stack.push(subjectArr[i]);
        }
    }
    for(let j=0; j<stack.length; j++){
        if(stack[j] !== necArr[j]){
            answer = 'NO';
        }
    }
    
    return answer;

}

let necSubject = 'CBA';
let buildSubject = 'BDAGE';
console.log(solution(necSubject, buildSubject));

/* 강의 풀이
function solution(need, plan){
    let answer = "YES"
    let queue = need.split('');
    for(let x of plan){
        if(queue.includes(x)){
            if(x !== queue.shift()) return 'NO';
        }
    }
    if(queue.length>0) return 'NO';
    return answer;
} 

let a = 'CBA';
let b = 'CBDGE';
console.log(solution(a,b))
*/