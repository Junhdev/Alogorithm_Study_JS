function solution(N, inputArr) {
    
    
    let sumInput = 0;
    let stack2 = [];
    let stack3 = [];
    for(let i=0; i<N; i++){
        for(let j=0; j<2; j++){
            sumInput += inputArr[i][j];
        }
        stack2.push(sumInput);
        sumInput = 0;
    }
    //let sortInput = stack2.sort((a,b)=>{return a-b;});
    
    for(let i=0; i<N; i++){
        
            let saleInput = inputArr[i][0]/2 + inputArr[i][1];
            stack3.push(saleInput);
            saleInput = 0;

        }
    //let sortInput2 = stack3.sort((a,b)=>{return a-b;});

    let stack = [];
    // 최대 몇명인지 경우의 수 따져봐야함
    /* for(let i=0; i<inputArr.length; i++){
        // inputArr[0][0]/2
        sum += inputArr[i][0]/2;
        for(let j=0; j<M; j++){
            if(j === i){
                continue;
            }
            else{
                sum += inputArr[j][0];
            }
            
            sum += inputArr[j][1];
            
        }
    } */
    //let tmp = Array.from({length:3},()=>0); // 카드 3장 뽑으므로(3칸짜리 배열 생성)
    
    let myArr1 = 0;
    let myArr2 = 0;
    let myArr3 = 0;
    let answer = [];
    let tmp = [];
    let answer3=Number.MIN_SAFE_INTEGER;
    function DFS(L,s,sum){ // DFS(0,0) // DFS(1,13)
        
        
       
            if(L===4&& sum<=28){ //3장은 고정
                
                    //stack.push(N,sum);
                    
                
            answer.push(tmp.slice()); // answer2 배열 디버깅 // slice >> tmp 원본을 보존하고 싶을때 사용
            // answer1.push(sum); //sum 배열 디버깅
                
            }
            
            else{ //L===0 // L===1
                for(let i=s; i<5; i++){

                    
                    tmp[L] = stack2[i]
                    /*
                    myArr1 = stack2[i]
                    for(let j=s; j<N; j++){
                        if(j===i){
                            continue;
                        }
                        else{
                            myArr2 += stack3[j];
                        } // L===2,i===3
                        
                            
                    }*/
                    //console.log(tmp);
                    DFS(L+1, i+1,sum+stack2[i]); 
                }
            }
        }
     // 꼭 호출 해주어야함
    
    DFS(0,0,0);
    
    return answer;
}
let inputArr = [[6,6],[2,2],[4,3],[4,5],[10,3]];
console.log(solution(5, inputArr));