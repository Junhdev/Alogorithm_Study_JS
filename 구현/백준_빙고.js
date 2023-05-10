function solution(inputArr, bingoArr) {
    let answer = 0;
    let flag = 0;
    let bingoArr2 = [];
    let queue = [];
    for(let i=0; i<5; i++){
        bingoArr2.push(...bingoArr[i]);
    }
        
    for(let j=0; j<25; j++){
        for(let k=0; k<5; k++){
            if(inputArr[k].includes(bingoArr2[j])){
                let index = inputArr[k].indexOf((bingoArr2[j]))
                queue.push([k,index])
            }
        }
    }
    console.log(queue) //[[2,2],[0,4],[4,2],[1,0],...]
    //let [x,y] = queue.shift()
    
    let columnArr = [];
    let rowArr = [];
    let bingo = 0;
    let flag_r = 0;
    let flag_l = 0;
    //★★★★★★ 호이스팅 이슈로 인해 저장변수는 항상 외부에 선언해놓기 
    let left = 0;
    let right = 0;

    for(let i=0; i<25; i++){
        columnArr.push(queue[i][0])
        rowArr.push(queue[i][1])
    } 

    while(queue.length){
        //console.log(queue)
        let beforecolumnArr = [...new Set(columnArr)];
        let beforerowArr = [...new Set(rowArr)];
        columnArr.shift()
        rowArr.shift()
        queue.shift();
        flag ++
            
        let aftercolumnArr = [...new Set(columnArr)];
        let afterrowArr = [...new Set(rowArr)];
        //console.log(beforecolumnArr,aftercolumnArr)
        // if문 나열 ( 무조건 밑 구문들 실행 => 중복 방지 , 동시 실행) vs else if (조건에 적합하여 위 구문 실행하면 밑 구문 실행xx)
        if(//queue[i][0]의 종류가 4개
            aftercolumnArr.length < beforecolumnArr.length ){
            bingo ++
            if(bingo === 3){
                answer = flag
                break;
            }
        }
        console.log(bingo,flag)

        if(//queue[i][1]의 종류가 4개
            afterrowArr.length < beforerowArr.length){
            bingo++
            if(bingo === 3){
                answer = flag
                break;
            }
        }
        console.log(bingo,flag)

        for(let i=0; i<queue.length; i++){
            if(queue[i][0] === queue[i][1]){
                flag_r++ 
            }
        }
        
        //let right = 0;
        if(flag_r === 0) {
            bingo ++
            right ++
            flag_r = 1;
        }
        // 대각선은 한번 줄 그어지면 끝이므로 더 이상 진행안되게 설정(중복방지)
        else if(flag_r !== 0 && right === 0){
            flag_r = 0
        }
        
        console.log(bingo,flag)
        if(bingo === 3){
            answer = flag
            break;
        }
        
            /*
            if(//x===y인 원소가 없으면 //forEach??
            //queue[i][0] === queue[i][1]
            // 2차원배열은 includes x
            !queue.includes([0,0]) && !queue.includes([1,1]) && !queue.includes([2,2]) && !queue.includes([3,3]) && !queue.includes([4,4])){
                bingo++
                if(bingo === 3){
                answer = flag
                break;
            }
            }
            
            if(!queue.includes([0,4]) && !queue.includes([1,3]) && !queue.includes([2,2]) && !queue.includes([3,1]) && !queue.includes([4,0])
            모두 없으면){
                bingo++
                if(bingo === 3){
                answer = flag
                break;
            }
            }
            */

        for(let i=0; i<queue.length; i++){
            for(let j=0; j<5; j++){
                /* ★왼쪽 대각선 설정하기 */
                if(queue[i][0] === j && queue[i][1] === 5-j-1){
                    flag_l ++
                }
            }

                /* 2차원배열은 등호사용 X
                if(queue[i][0] === 0  || queue[i] === [1,3] || queue[i] === [2,2] || queue[i] === [3,1] || queue[i] === [4,0]){
                    flag_l ++ 
                } */
        }
        //console.log(flag_l)
        //★★★★★★ 아래와 같이 내부에 저장변수 선언하면 호이스팅이슈로 인해 while문이 돌때마다 left값이 0으로 초기화된다.
        // let left = 0;
        //console.log(left)
        //console.log(flag_l)
        if(flag_l === 0) {
            bingo ++
            left ++
            flag_l = 1;
        }
        // 대각선은 한번 줄 그어지면 끝이므로 더 이상 진행안되게 설정(중복방지)
        else if(flag_l !== 0 && left === 0){
            flag_l = 0
        }
        
        console.log(bingo,flag)
        if(bingo === 3){
            answer = flag
            break;
        }
    
    }
    return answer;
}
    

let inputArr = [[11, 12, 2, 24, 10], [16, 1, 13, 3, 25], [6 ,20, 5, 21, 17], [19, 4, 8, 14, 9], [22, 15, 7, 23, 18]];
let bingoArr =[[5 ,10, 7 ,16, 2], [4 ,22, 8, 17, 13], [3 ,18, 1, 6, 25], [12, 19, 23, 14, 21], [11, 24, 9, 20, 15]];
console.log(solution(inputArr, bingoArr));
       