function solution(n, build_frame) {
    var answer = [];
   // 함수 호이스팅 , 선언하기 / 이차원배열 / n+1 / 인덱스 
    let pillar = Array.from(Array(n+2), ()=>Array(n+2).fill(0))
    let bo = Array.from(Array(n+2), ()=>Array(n+2).fill(0))
    let index = 0;
    
    for(let [x,y,a,b] of build_frame){
        index ++
        // 설치
        if(b === 1){
            if(a === 0){
                add_pill(x,y,pillar,bo)
            }
            else if(a === 1){
                add_bo(x,y,pillar,bo)
            }
        }
        // 삭제
        else if(b === 0){
            delete_frame(x,y,a,pillar,bo,n,index, build_frame);
        }
    }
    
    for(let i=0; i<n+1; i++){
        for(let j=0; j<n+1; j++){
            if(pillar[i][j] === 1){
                answer.push([i,j,0]);
            }
            if(bo[i][j] === 1){
                answer.push([i,j,1]);
            }
        }
    }
    return answer;
}

function add_pill(x,y,pillar,bo,n){
    // 바닥 위
    if(y===0){
        pillar[x][y] = 1;
        return true;
    }
    // 다른 기둥 위
    if(y-1>=0 && pillar[x][y-1] === 1){
        pillar[x][y] = 1;
        return true;
    }
    // 보의 한쪽 끝 부분 위
    if((x-1>=0 && bo[x-1][y] === 1) || bo[x][y] === 1){
        pillar[x][y] = 1;
        return true;
    }
    // else
    return false;
}
    
function add_bo(x,y,pillar,bo,n){
    // 한쪽 끝 부분이 기둥 위
    if(y-1>=0 && (pillar[x][y-1] === 1 || pillar[x+1][y-1] === 1) ){
        bo[x][y] = 1;
        return true;
    }
    // 양쪽 끝 부분
    if(x-1>=0 && bo[x-1][y] === 1  && bo[x+1][y] === 1){
        bo[x][y] = 1;
        return true;
    }
    // else
    return false;
}    



function delete_frame(x, y, frame, pillar, bo, n) {
let flag = true;
if (frame == 0) pillar[x][y] = 0;
else bo[x][y] = 0;

for (let i = 0; i < n + 1; i++) {
for (let j = 0; j < n + 1; j++) {
  let testPillar = pillar[i][j];
  if (testPillar == 1) {
    testPillar = 0;
    if (!add_pill(i, j, pillar, bo)) flag = false;
    testPillar = 1;
  }
  let testBo = bo[i][j];
  if (testBo == 1) {
    testBo = 0;
    if (!add_bo(i, j, pillar, bo)) flag = false;
    testBo = 1;
  }
}
if (!flag) break;
}

if (!flag) {
if (frame == 0) pillar[x][y] = 1;
else bo[x][y] = 1;
}
return flag;
}

