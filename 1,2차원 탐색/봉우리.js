function solution(N, input) {
    let answer = 0;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    let ch = Array.from(Array(5), () => Array(5).fill(1));
    
    let queue = []; 
    for(let i=0; i<input.length; i++){
        for(let j=0; j<N; j++){
            if(ch[i][j] === 1){
                ch[i][j]=0; 
                
                queue.push([i, j]);
                
                while(queue.length){
                    let x=queue.shift();
                    for(let k=0; k<4; k++){
                        let nx=x[0]+dx[k];
                        let ny=x[1]+dy[k];
                        if(nx>=0 && nx<N && ny>=0 && ny<N && input[nx][ny]<input[x[0]][x[1]]){
                            ch[nx][ny] = 0; 
                            
                        }
                    }  
                    answer ++;  
                }
            }
        }
    
    }
    return answer;
}
    


let input = [[5,3,7,2,3],[3,7,1,6,1],[7 ,2 ,5 ,3, 4],[4 ,3 ,6 ,4, 1],[8, 7, 3, 5 ,2]]
console.log(solution(5, input));