function solution(queries) {
    let answer = [];

    //arr[[0],[0,'Rr',0,0,,,4^n-1까지],[0,'RR','Rr','Rr','rr'],[0,0,0,0,0],[...]]
    const arr = Array.from(Array(16), () => new Array(4^15)); //16xp 이차원배열 만들기
    //console.log(arr)
    arr[1][1] = 'Rr';
    //[[1,1]] = 'Rr';
    for(let n=2; n<=16; n++){ //[[2,3]]
        for(let p=1; p <= 4^(n-1); p++){ 
            if([arr[n-1][Math.ceil(p/4)]] === 'RR'){ //부모 노드
                arr[n][p] = 'RR';
            }
            else if(arr[n-1][Math.ceil(p/4)] === 'Rr'){
                if(p % 4 === 1){
                    arr[n][p] = 'RR';
                }
                if(p % 4 === 2){
                    arr[n][p] = 'Rr';
                }
                if(p % 4 === 3){
                    arr[n][p] = 'Rr';
                }
                if(p % 4 === 0){
                    arr[n][p] = 'rr';
                }
                /* [[n,p/4 나머지 1]] = 'RR';
                [[n,p/4 나머지 2]] = 'Rr';
                [[n,p/4 나머지 3]] = 'Rr';
                [[n,p/4 나머지 0]] = 'rr'; */
            }
            else if([arr[n-1][Math.ceil(p/4)]] === 'rr'){
                arr[n][p] = 'rr';
            }
        }
    }
    
    for(let i=0; i<queries.length; i++){ // queries[[3, 1], [2, 3], [3, 9]]
        n = queries[i][0]; 
        p = queries[i][1];
        answer.push(arr[n][p]);
    }
    /* 
    Rr 이면  arr = [[RR,Rr,Rr,rr]]
    부모 노드가 Rr일때 arr[[RR,RR,RR,RR]]
    [[2,i]] === arr[2][i-1] === []
    RR 이면 [RR,RR,RR,RR]
    rr 이면 [rr,rr,rr,rr] */
    return answer;
}