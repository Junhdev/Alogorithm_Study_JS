            function solution(s){  
                let answer;
                let stack=[];
                for(let x of s){
                    if(x===')'){
                        while(stack[stack.length-1]!=='('){
                            stack.pop();
                        }
                        stack.pop();
                    }
                    else stack.push(x);
                }
                answer=stack.join('');
                return answer;
            }

            let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
            console.log(solution(str));
       