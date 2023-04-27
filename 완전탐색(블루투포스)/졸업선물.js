function solution(M, input) {
    let inputArr = [[6,6],[2,2],[4,3],[4,5],[10,3]];
    let stack = [];
    // 최대 몇명인지 경우의 수 따져봐야함
    for(let i=0; i<inputArr.length; i++){
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
    }
    let tmp = Array.from({length:3},()=>0); // 카드 3장 뽑으므로(3칸짜리 배열 생성)
    function DFS(L,s,sum){ // DFS(0,0) // DFS(1,13)
        for(let N=M; i>=1; i--){
            if(L===N){ //3장은 고정
                if(sum<=28){
                    stack.push(N,sum);
                }
            // answer2.push(tmp.slice()); // answer2 배열 디버깅 // slice >> tmp 원본을 보존하고 싶을때 사용
            // answer1.push(sum); //sum 배열 디버깅
            
            }
            else{ //L===0 // L===1
                for(let i=s; i<N; i++){
                    myArr1 = inputArr[i][0]/2
                    for(let j=s; j<N; j++){
                        if(j===i){
                            continue;
                        }
                        else{
                            myArr2 = inputArr[i][0];
                        } // L===2,i===3
                        myArr3 = inputArr[j][1];
                            
                    }
                    //console.log(tmp);
                    DFS(L+1, i+1, sum+card[i]); 
                }
            }
        }
    DFS(0,0,0); // 꼭 호출 해주어야함
}
    
let input =;
console.log(solution(5, input));