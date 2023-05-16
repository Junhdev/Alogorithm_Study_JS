function solution(inputArr) {
    //★ 1. 입력 2차원 배열로 잘 받기
    let input = inputArr.split("\n").map((x)=>x.split(' ').map((y)=>parseInt(y)))
    
let answer = '';
let N = input[0][0]

let switchArr = input[1]

/*
    let switchArr = [1,1,1,1,1,1,1,1,1];
    let man = [1,5]
    let woman = [2,5]
    */
//★ 2. 처음부터, 1부터 모든 경우의 수 한글화 & 코드화
    for(let i=3; i<input.length; i++){
        // 남자면
        if(input[i][0] === 1){
            // ★ 3. 남자가 1번 받았을때(예외적상황 정의)
            if(input[i][1] === 1){
                for(let j=0; j<N; j++){
                    // 모든 자연수는 1의 배수이므로 모두 교체
                    if(switchArr[j] === 0){
                        switchArr[j] = 1;
                    }
                    else{
                        switchArr[j] = 0;
                    }
                
                }
                
            }
            

        // ★ 4. 남자가 1번말고 다른 것 받았을때(일반적 상황)    
            else if(input[i][1] !== 1){
                for(let j=input[i][1]; j<=N; j++){
                    if(j % input[i][1] === 0){
                        if(switchArr[j-1] === 0){
                            switchArr[j-1] = 1;
                        }   
                         else{
                            switchArr[j-1] = 0;
                        }
                
                    }
                }
            }  

        }

        // 여자일떄
        else if(input[i][0] === 2){
            // 여자 일반적 상황(예외상황 x)
        let num = input[i][1]-1 
        //0 , 4 8 N=1일떄는??
        for(let k=1; k<=parseInt(N/2); k++ ){
            if(0<=num-k<=num && 1<=num+k<=N-1 ){
                if(switchArr[num-k] === switchArr[num+k]){
                    if(switchArr[num-k] === 0){
                        switchArr[num-k] = 1;
                        switchArr[num+k] = 1;
                        //switchArr[num] = 1;
                    }
                    else if(switchArr[num-k] === 1){
                        switchArr[num-k] = 0;
                        switchArr[num+k] = 0;
                        //switchArr[num] = 0;
                    }
                }
                // ★ break문 활용해서 더 이상 진행하지 않게 하기 !
                else{
                    break;
                }
                //else면 다음으로 진행
                //console.log(switchArr)
                /*
                else{
                    if(switchArr[num] === 0){
                        switchArr[num] = 1;
                       
                    }
                    else{
                        switchArr[num] = 0;
                        
                    }
                    break;

                }
                */
                
            }
            // ★★★★★ 단계별로 직접 써보기!!
            /*num-j
            num+j
            num-2*j
            num+2*j*/

        }
        
        // 추가 상황(조건 마무리) !!
        if(switchArr[num] === 0){
            switchArr[num] = 1;
        }
        else{
            switchArr[num] = 0;
                        
        }
        }
        
        }
    
    let result = [];
    
    for(i=0; i<switchArr.length; i+=20) {
        result.push(switchArr.slice(i, i+20));
    }
    answer = result.join('\n').replace(/,/g," ")
    return answer;
            
    }
    let s = '9,1 1 1 1 1 1 1 1 1,2,1 1,2 9'
    //let s = '8,0 0 0 0 0 0 0 0,8,1 2,1 3,1 4,1 5,2 2,2 3,2 4,2 5'
    let inputArr = s.replace(/,/g,"\n") 
    
    

console.log(solution(inputArr));