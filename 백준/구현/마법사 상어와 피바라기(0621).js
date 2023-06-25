function solution() {
    var answer = 0;
    //input.split('\n').map(x=>x.split(' ')).map(y=>y.map(z=>parseInt(z)))
    let inputArr = [[5,4],[0,0,1,0, 2],[2, 3, 2, 1, 0],[4, 3, 2, 9, 0],[1, 0, 2, 9, 0],[8, 8, 2, 1, 0],[1, 3],[3, 4],[8, 1],[4, 8]]
    let N = inputArr[0][0]
    let M = inputArr[0][1]
    // slice 두번째 인자 전까지 자르기
    let table = inputArr.slice(1,N+1)
    let ds = inputArr.slice(N+1,inputArr.length)
    let cloud = Array.from(Array(N), ()=>Array(N).fill(0));
    let dx = [0,-1,-1,-1,0,1,1,1]
    let dy = [-1,-1,0,1,1,1,0,-1]
    let clouds = [];
    cloud[N-1][0] = 1
    cloud[N-1][1] = 1
    cloud[N-2][0] = 1
    cloud[N-2][1] = 1
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(cloud[i][j] === 1){
                clouds.push([i,j])
            }
        }
    }
     

    for(let i=0; i<M; i++){
        let d_i = ds[i][0]-1
        let s_i = ds[i][1] 
        // let >> 자동 초기화
        let nextClouds = [];
       
        // 1번 
     
        for(let c of clouds){
            // 좌표 벗어났을때 범위 설정
            // ★ 덧셈 뺄셈 제외 곱하기 나누기 나머지 연산기호 괄호 위치 매우 중요!!!!
            let nX = (c[0]+(s_i*dx[d_i])) % N
            let nY = (c[1]+(s_i*dy[d_i])) % N
          
            nX = nX < 0 ? nX+N : nX
            nY = nY < 0 ? nY+N : nY
            nextClouds.push([nX, nY])
            
            }
        console.log(nextClouds)
        // 2번
        for(let nC of nextClouds){
           const [X,Y] = nC
            // [ [ 3, 2 ], [ 3, 3 ], [ 4, 2 ], [ 4, 3 ] ]
         
            table[X][Y] ++
          
        }
            
      
        // 3번
        clouds = []
        for(let nC of nextClouds){
            const [X,Y] = nC
            cloud[X][Y] = "removed"
        }
       
          
        
        // 4번
        const diagX = [-1,-1,1,1]
        const diagY = [-1,1,1,-1]
        let sum = 0;
        for(let nC of nextClouds){
            const [X,Y] = nC
            for(let j=0; j<4; j++){
                let ndiagX = nC[0]+ diagX[j] 
                let ndiagY = nC[1]+ diagY[j] 
                
                // ★등호 2개 한꺼번에 불가 따로 선언해주어야함!!!!!!!!!!
                if(0<=ndiagX && ndiagX<=N-1 && 0<=ndiagY && ndiagY<=N-1 && table[ndiagX][ndiagY] > 0){
                    sum ++
                }
            }
            table[X][Y] += sum
            sum = 0;
        }
        
      
        //5번
        for(let j=0; j<N; j++){
            for(let k=0; k<N; k++){
                if(table[j][k] >= 2 && cloud[j][k] !== "removed"){
                // 1. push
                    clouds.push([j,k])
                    table[j][k] -= 2
                        
                }
                // 2. 초기화
                cloud[j][k] = 0
                
               
            }
        }
        // 2. 초기화 - 생략 가능 위에서 let으로 초기화해주기 때문
        nextClouds = []
        
           
    }
     
      for(let j=0; j<N; j++){
            for(let k=0; k<N; k++){
                answer += table[j][k]
            }
        }
        /*
        cloud[N+(s_i*dx[d_i])][1+(s_i*dy[d_i])] = 1
        cloud[N+(s_i*dx[d_i])][2+(s_i*dy[d_i])] = 1
        cloud[N-1+(s_i*dx[d_i])][1+(s_i*dy[d_i])] = 1
        cloud[N-1+(s_i*dx[d_i])][2+(s_i*dy[d_i])] = 1
        cloud[N][1] = 0
        cloud[N][2] = 0
        cloud[N-1][1] = 0
        cloud[N-1][2] = 0
        
        table[N+(s_i*dx[d_i])-1][1+(s_i*dy[d_i])-1] ++
        table[N+(s_i*dx[d_i])-1][2+(s_i*dy[d_i])-1] ++
        table[N-1+(s_i*dx[d_i])-1][1+(s_i*dy[d_i])-1] ++
        table[N-1+(s_i*dx[d_i])-1][2+(s_i*dy[d_i])-1] ++
        */
        
   
    return answer;
}
