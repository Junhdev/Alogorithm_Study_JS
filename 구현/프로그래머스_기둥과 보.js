function solution(n, build_frame) {
    let answer = [[]];
   // 함수 호이스팅 , 선언하기 / 이차원배열 / n+1 / 인덱스 
    //let ch0 = [[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0],0,0,0,0,0]
    let ch0 = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let ch1 = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let condition_기둥 = true
    let condition_보 = true
    let stack = [];
   
    function 기둥조건(x,y){
        if(y === 0 || (ch1[x-1][y] === 1 && x-1 >= 0) || ch1[x][y] === 1 || (ch0[x][y-1] === 1 && y-1 >=0)){
            condition_기둥 = true;
            
        }
        else {
            condition_기둥 = false;
          
        }
    }
    
    function 보조건(x,y){
        
        if((ch0[x][y-1]=== 1 && y-1>=0) || (ch0[x+1][y-1] === 1 && x+1<=n && y-1 >=0) || (ch1[x-1][y] === 1 && ch1[x+1][y] === 1 && x-1>=0 && x+1<= n) ){
            condition_보 = true;
           
        }
        else {
            condition_보 = false;
         
        }
    }
    
    for(let i=0; i<build_frame.length; i++){
        let a = build_frame[i][0]
        let b = build_frame[i][1]
       
        
        if(build_frame[i][2] === 0 && build_frame[i][3] === 1){
           console.log(기둥조건(a,b))
           if(condition_기둥 === true){
               ch0[a][b] = 1;
        
           }
        } 
        
        if(build_frame[i][2] === 1 && build_frame[i][3] === 1){
           console.log(보조건(a,b))
           if(condition_보 === true){
               ch1[a][b] = 1;
           }
        } 
        
        if(build_frame[i][2] === 0 && build_frame[i][3] === 0){
            ch0[a][b] = 0;
            for(let j=0; j<i; j++){
                console.log(기둥조건(build_frame[j][0],build_frame[j][1]))
                console.log(보조건(build_frame[j][0],build_frame[j][1]))
                if(condition_기둥 !== true || condition_보 !== true){
                    ch0[a][b] = 1;
                    break;
                }
            }
        }
        
        if(build_frame[i][2] === 1 && build_frame[i][3] === 0){
            ch1[a][b] = 0;
            for(let j=0; j<i; j++){
                console.log(기둥조건(build_frame[j][0],build_frame[j][1]))
                console.log(보조건(build_frame[j][0],build_frame[j][1]))
                if(condition_기둥 !== true || condition_보 !== true){
                    ch1[a][b] = 1;
                    break;
                }
            }
        }
           
    }
    
    for(let i=0; i<build_frame.length; i++){
        let p = build_frame[i][0]
        let q = build_frame[i][1]
        if(ch0[p][q] === 1){
            stack.push([p,q,0])
        }
        if(ch1[p][q] === 1){
            stack.push([p,q,1])
        }
    }
    
    stack.sort((a,b)=>{
        if(a[0] === b[0]){
            return a[1] - b[1]
        }
        else{
            return a[0] - b[0]
        }
    })
    stack.sort((a,b)=>{
        if(a[1] === b[1]){
            return a[2] - b[2]
        }
    })
    answer = stack
    return answer;
}
