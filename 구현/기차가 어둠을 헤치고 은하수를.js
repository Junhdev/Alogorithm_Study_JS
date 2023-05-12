function solution(N, M , input) {
    // 빈 배열 여러개 선언 후 할당하기
    let order =  input;
    

    //[Array(20), Array(20), Array(20), Array(20), Array(20)]
    // [[], [], [], [], [],...[]]
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
    if(order[i][0]===1){
        
        trainNum = order[i][1]-1;
        if(train[trainNum][order[i][2]-1] === 0){
            train[trainNum][order[i][2]-1] = 1;
        }
        
    }
    // 기차번호 1로 바뀐 상태에서
    if(order[i][0] === 2){
        // 번호 같다면
        trainNum = order[i][1]-1;
        if(train[trainNum][order[i][2]-1] === 1){
            train[trainNum][order[i][2]-1] = 0;
        }
    }
    //console.log(train)
    if(order[i][0] === 3){
        trainNum = order[i][1]-1;
        
        for(let j=1; j<=19; j++){
            
            train[trainNum][j] = tmp[trainNum][j-1]
           
        }
        // ★★★시작점 변경!!!!!!!!!!!!
        train[trainNum][0] = 0;
        
    }
    if(order[i][0] === 4){
        trainNum = order[i][1]-1;
       
        for(let j=19; j>=1; j--){
            //let tmp = train.slice();
            train[trainNum][j-1] = tmp[trainNum][j]
            
        }
        // ★★★끝점 변경!!!!!!!!!!!!
        train[trainNum][19] = 0;
    }
    // ★★★선언 위치(scope 설정 중요)
    tmp = train.map((v)=>v.slice())
}

let compareArr = [];
compareArr.push(train[0].join(''))
for(let i=1; i<train.length; i++){
    
        if(!compareArr.includes(train[i].join('')) && train[i].join('') !== '00000000000000000000'){
            compareArr.push(train[i].join(''))
        }
        
}

answer = compareArr.length
console.log(train)
    return answer
    
}



console.log(solution(5,5,[[1,1,1],[1,1,2],[1,2,2],[1,2,3],[3,1]]));