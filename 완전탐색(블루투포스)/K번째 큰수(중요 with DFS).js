function solution(N, K, card){
    let sum = 0;
    let answer = 0;
    // let answer1 = [];
    // let answer2 = [];
    let set = new Set(); // 크기 비교할 때 중복 제거 용도
    let tmp = Array.from({length:3},()=>0); // 카드 3장 뽑으므로(3칸짜리 배열 생성)
    function DFS(L,s,sum){ // DFS(0,0) // DFS(1,13)
        if(L===3){ //3장은 고정
            // answer2.push(tmp.slice()); // answer2 배열 디버깅 // slice >> tmp 원본을 보존하고 싶을때 사용
            // answer1.push(sum); //sum 배열 디버깅
            set.add(sum);
        }
        else{ //L===0 // L===1
            for(let i=s; i<N; i++){ // L===2,i===3
                    tmp[L] = card[i];
                    DFS(L+1, i+1, sum+card[i]); 
                }
            }
        }
    DFS(0,0,0); // 꼭 호출 해주어야함
    let myArr = Array.from(set).sort((a,b)=>{return b-a}); //set은 sort메서드 적용 안되므로(객체이므로) 배열화 한다음 sort 적용해야함
    answer = myArr[K-1];
    return answer;
}

let input = [13, 15, 34, 23, 45, 65, 33, 11 ,26, 42];        
console.log(solution(10, 3, input));