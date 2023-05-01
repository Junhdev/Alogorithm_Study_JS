function solution(N, input) {
    let answer = 0;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    let ch = Array.from(Array(5), () => Array(5).fill(1));
    let flag = [];
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
                        // ★★★ if문 : for 루프 각각 조건 만족할때마다 안의 구문 실행 => 모두 만족할때 안의 구문 실행이 아니다
                        // 문제 조건 case 코드화
                        // "자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다"
                        if(nx>=0 && nx<N && ny>=0 && ny<N && input[nx][ny]<input[x[0]][x[1]]){
                            // 자신보다 크지 않은 주위의 숫자들은 실행해보지 않아도 안되는 걸 앎으로
                            ch[nx][ny] = 0; 
                            flag.push(1);
                        }
                        else if(nx>=0 && nx<N && ny>=0 && ny<N && input[nx][ny]>=input[x[0]][x[1]]){
                            // 자신의 상하좌우 숫자 중 하나라도 자신보다 크거나 같은 것이 있으면 0을 배열에 push 
                            flag.push(0);
                        }
                    }
                    // 배열에 0이 하나라도 포함안되어 있으면 모든 경우에 if문을 만족하므로 이렇게 해야함 
                    // 주위의 모든 원소들보다 큰 숫자이면 봉우리이므로 ++
                    if(!flag.includes(0)){
                        answer ++;
                    }  
                    // ★★★ flag 초기화
                    flag.splice(0);
                }
            }
        }
    }
    return answer;
}
    
let input = [[5,3,7,2,3],[3,7,1,6,1],[7,2,5,3,4],[4,3,6,4,1],[8,7,3,5,2]];
console.log(solution(5, input));