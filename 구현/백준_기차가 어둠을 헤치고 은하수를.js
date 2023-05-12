function solution(N, M , input) {
    
    let order =  input;
    
    //[Array(20), Array(20), Array(20), Array(20), Array(20)]
    // [[], [], [], [], [],...[]]
    // ★ 0으로 된 2차원배열에 태우면 1 내리면 0 으로 할당!!
    let train = Array.from(Array(N), () => Array(20).fill(0))
   
    // sub
    let trainNum= 0;
    let tmp = Array.from(Array(N), () => Array(20).fill(0));
    //console.log(tmp)

/* 
for(let i=0; i<order.length; i++){
    if(order[i][0]===1){
        trainNum = order[i][1];
        let startIndex = 20*trainNum-20
        if(train[startIndex + order[i][2]-1] === 0){
            train[startIndex + order[i][2]-1] = 1;
        }
        
    }
    // 기차번호 1로 바뀐 상태에서
    if(order[i][0] === 2){
        // 번호 같다면
        trainNum = order[i][1];
        let startIndex = 20*trainNum-20
        if(train[startIndex + order[i][2]-1] === 1){
            train[startIndex + order[i][2]-1] = 0;
        }
    }
    //console.log(train)
    if(order[i][0] === 3){
        trainNum = order[i][1];
        let startIndex = 20*trainNum-20
        //train = trainArr + String(trainNum) 
        for(let j=startIndex+1; j<=startIndex+19; j++){
            train[j] = tmp[j-1]
            
        }
    }
    if(order[i][0] === 4){
        trainNum = order[i][1];
        let startIndex = 20*trainNum-20
        for(let j=startIndex+19; j>=startIndex+1; j--){
            //let tmp = train.slice();
            train[j-1] = tmp[j]
            
        }
    }
}
*/

for(let i=0; i<order.length; i++){
    // 모든조건 실행해야하므로 else if가 아닌 if문으로!!!
    // order[i][1]-1번의 기차에 사람 태우기
    if(order[i][0]===1){
        
        trainNum = order[i][1]-1;
        if(train[trainNum][order[i][2]-1] === 0){
            train[trainNum][order[i][2]-1] = 1;
        }
        
    }
    // order[i][1]-1번의 기차에 사람 하차시키기
    if(order[i][0] === 2){
        
        trainNum = order[i][1]-1;
        if(train[trainNum][order[i][2]-1] === 1){
            train[trainNum][order[i][2]-1] = 0;
        }
    }
    // 오른쪽으로 한칸씩 옮기고 첫번쨰 사람은 0으로 만들어주기!!!
    if(order[i][0] === 3){
        trainNum = order[i][1]-1;
        
        for(let j=1; j<=19; j++){
            //★ tmp를 활용하여(얕은복사) 이동시켜야함!!!
            // tmp는 앞명령들 모두 끝난 후의 결과가 적용된 배열!!!
            // 그래서 맨 하단에 할당!!
            train[trainNum][j] = tmp[trainNum][j-1]
           
        }
        // ★★★시작점 변경!!!!!!!!!!!!
        train[trainNum][0] = 0;
        
    }
    if(order[i][0] === 4){
        trainNum = order[i][1]-1;
       
        for(let j=19; j>=1; j--){
            // 여기다가 하면 안됨!
            //let tmp = train.slice();
            train[trainNum][j-1] = tmp[trainNum][j]
            
        }
        // ★★★끝점 변경!!!!!!!!!!!!
        train[trainNum][19] = 0;
    }
    // ★★★선언 위치(scope 설정 중요)
    // tmp는 앞명령들 모두 끝난 후의 결과가 적용된 배열!!!
    // 2차원배열의 얕은복사
    tmp = train.map((v)=>v.slice())
}

// ★배열끼리 비교는 문자열로 변환해서 하자!!!
let compareArr = [];
compareArr.push(train[0].join(''))
for(let i=1; i<train.length; i++){
    // 아무도 안탔어도 기차 지나갈 수 있다! 단, 문제 조건만 만족한다면
    if(!compareArr.includes(train[i].join('')) /*&& train[i].join('') !== '00000000000000000000'*/){
        compareArr.push(train[i].join(''))
    }   
}

answer = compareArr.length
return answer
    
}



console.log(solution(5,5,[[1,1,1],[1,1,2],[1,2,2],[1,2,3],[3,1]]));