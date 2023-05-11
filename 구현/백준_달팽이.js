function solution(input) {
    let inputArr = input.split('\n').map((x)=>parseInt(x));
    const N = inputArr[0];
    const M = inputArr[1];
    let answer = '';
    let chart = Array.from(Array(N), () => Array(N).fill(0));
    chart[parseInt(N/2)][parseInt(N/2)] = 1;
    chart[parseInt(N/2)-1][parseInt(N/2)] = 2;
    chart[parseInt(N/2)-1][parseInt(N/2)+1] = 3;
    chart[parseInt(N/2)][parseInt(N/2)+1] = 4;
    chart[parseInt(N/2)+1][parseInt(N/2)+1] = 5;
    chart[parseInt(N/2)+1][parseInt(N/2)] = 6;
    chart[parseInt(N/2)+1][parseInt(N/2)-1] = 7;
    chart[parseInt(N/2)][parseInt(N/2)-1] = 8;
    chart[parseInt(N/2)-1][parseInt(N/2)-1] = 9;
    
    
    //console.log(chart)
    // 12시 ~9시
   
    /*
    while(queue.length){
        let [x,y] = queue.shift();
    }
    for(let i=0; i<4; i++){
        let nX = x + dx[i];
        let nY = y + dy[i];
    }
    */
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    let stack = [[parseInt(N/2)-1,parseInt(N/2)-1]];
    let beforeNum = 9;
    let disArr = [];
    let index = 0;
    let myArr = [];
    let sub = [];
    if(M === 1){
        myArr.push([parseInt(N/2)+1,parseInt(N/2)+1])    
    }
    else if(M === 2){
        myArr.push(parseInt(N/2)-1+1,parseInt(N/2)+1)
    }
    else if(M === 3){
        myArr.push([parseInt(N/2)+1,parseInt(N/2)+1+1])
    }
    else if(M === 4){
        myArr.push([parseInt(N/2)+1,parseInt(N/2)+1+1])
    }
    else if(M === 5){
        myArr.push([parseInt(N/2)+1+1,parseInt(N/2)+1+1])
    }
    else if(M === 6){
        myArr.push([parseInt(N/2)+1+1,parseInt(N/2)+1])
    }
    else if(M === 7){
        myArr.push([parseInt(N/2)+1+1,parseInt(N/2)-1+1])
    }
    else if(M === 8){
        myArr.push([parseInt(N/2)+1,parseInt(N/2)-1+1])
    }
    else if(M === 9){
        myArr.push([parseInt(N/2)-1+1,parseInt(N/2)-1+1])
    }

    /*
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(chart[i][j]===0){ */// [2][2]
                //chart[i][j]= beforeNum+1;
                //밑에서 이미 push 해주었으므로 stack.push([i, j]); // stack[[2,2]]
               
                while(stack.length){
                    if(beforeNum === N*N){
                        break;
                        
                    }
                    let [x,y]=stack.pop(); // [2,2]
                    for(let k=0; k<4; k++){
                        let nX=x+dx[k];
                        let nY=y+dy[k];
                        if(nX>=0 && nX<N && nY>=0 && nY<N && chart[nX][nY] === 0){
                            sub.push(k);
                            disArr.push(Math.abs(nX-parseInt(N/2))+Math.abs(nY-parseInt(N/2)))
                        }
                        
                    }
                    //dis에 4개 있을때
                    if(disArr.length === 4){
                        index = sub[disArr.indexOf(Math.min(...disArr))]
                    }

                    // dis에 3개 있을때
                    if(disArr.length === 3){
                        index = sub[disArr.indexOf(Math.min(...disArr))]
                    }

                    //dis에 2개 있을때
                    if(disArr.length === 2){
                        // 12시>9시(ex.9,25)
                        if(disArr[0]===disArr[1] && sub[0] === 0 && sub[1] === 3){
                            index = sub[0];
                        }
                        // dis똑같을때 대부분의 경우!
                        else if(disArr[0]===disArr[1] && (sub[0] !== 0 || sub[1] !== 3)){
                            index = sub[1]
                        }
                        // dis 다를때 >> 나머지 경우 // 26때매!!!
                        else if(disArr[0] !== disArr[1]){
                            index = sub[disArr.indexOf(Math.min(...disArr))];
                        }
                    }

                    // dis에 1개 있을때(막혀있을때)
                    if(disArr.length === 1){
                        index = sub[0];
                    }

                    sub.splice(0,sub.length); 
                    disArr.splice(0,disArr.length);
                    
                    chart[x+dx[index]][y+dy[index]] = beforeNum+1;
                    //console.log(chart)
                    if(beforeNum === M-1){
                        myArr.push(x+dx[index]+1)
                        myArr.push(y+dy[index]+1)
                    }
                    beforeNum ++;
                    
                    
                    stack.push([x+dx[index], y+dy[index]]);
                    
                    
                }









                    /*
                    if(disArr.length === 3){
                        index = sub[2]; // 마지막 인덱스
                       
                    }
                    //let sameArr = disArr.fliter((a,b) => a === b)
                    // 최솟값이 2개, disArr이 2개일떄
                    if(disArr.length === 2){
                        if(disArr[0] === disArr[1]){
                            
                                index = sub[0];
                            
                        
                        
                        }

                    // ★값이 최소일 때의 index번호 찾기
                    // 최솟값이 1개일때, disArr 3개일때
                        else{
                            index = disArr.indexOf(Math.min(...disArr))
                            
                        }
                    }
                    //x+dx[index]
                    //y+dy[index]
                    */
                    
            
                
        
    
    //console.log(...myArr)
    chart.push(myArr)
    let stringChart = chart.join('\n')
    answer = stringChart.replace(/,/g," ")
    return answer
    
}

let s = '5,25'
let input = s.replace(/,/g,"\n") 
//console.log(input)   

console.log(solution(input));