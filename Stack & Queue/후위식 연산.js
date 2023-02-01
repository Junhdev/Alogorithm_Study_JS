function solution(s){
    let answer;
    let stack = [];
    for(let x of s){
        if(!isNaN(x)){ // x가 숫자이면
            stack.push(Number(x));
        }
        else{// x가 연산식이면
            let rt = stack.pop();
            let lt = stack.pop();
            if(x==='+'){
                let result1 = lt+rt;
                stack.push(result1);
            }
            else if(x==='*'){
                let result2 = lt * rt;
                stack.push(result2);
            }
            else if(x==='/'){
                let result3 = lt / rt;
                stack.push(result3);
            }
            else if(x==='-'){
                let result4 = lt - rt;
                stack.push(result4);
            }
        }
    }
    answer = stack.pop();

    return answer;

    /* for(let i=0; i<myArr.length; i++){
        if(typeof(myArr[i]) ==="number"){
            stack.push(myArr[i]);
        }
        else{
            let cal = myArr[i];
            let rt = stack.pop();
            let lt = stack.pop();
            if(cal==='+'){
                let result = lt + rt
            }
        }
    }

    let a = 5+2
    let b= 3*a
    } */
                    
}
console.log(solution('352+*9-')); // 연산식이 포함되어 있으므로 문자열로 입력해줘야한다
        