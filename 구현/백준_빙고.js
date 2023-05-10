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

    for(let i=0; i<25; i++){
        columnArr.push(queue[i][0])
        rowArr.push(queue[i][1])
    }
   
    
    
    while(queue.length){
        
            
            let beforecolumnArr = [...new Set(columnArr)];
            
           //console.log(queue)
            let beforerowArr = [...new Set(rowArr)];
            columnArr.shift()
            rowArr.shift()
            queue.shift();
            flag ++
            
            let aftercolumnArr = [...new Set(columnArr)];
            let afterrowArr = [...new Set(rowArr)];
            console.log(beforecolumnArr,aftercolumnArr)
            // if문 나열 ( 무조건 밑 구문들 실행 => 중복 방지 , 동시 실행) vs else if (조건에 적합하여 위 구문 실행하면 밑 구문 실행xx)
            if(//queue[i][0]의 종류가 4개
                aftercolumnArr.length < beforecolumnArr.length ){
                bingo++
                
                if(bingo === 3){
                answer = flag
                break;
            }
            }
            console.log(bingo,flag)

            if(//queue[i][1]의 종류가 4개
            afterrowArr.length < beforerowArr.length){
                bingo++
                //console.log(bingo,flag)
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
            //console.log(flag_r)
            if(flag_r === 0) {
                bingo ++
            }
            //초기화
            else{
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
            if(flag_l === 0) {
                bingo ++
            }
            else{
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
    

    

        


        /*
        let rowArr = [];
        let columnArr = [];
        
        let myArr1 = [];
        let myArr2 = [];
        let myArr3 = [];
        let myArr4 = [];
        let index1 = 0;
        let index2 = 0;
        for(let i=0; i<25; i++){
           
            rowArr.push(stack[i][1]);
            columnArr.push(stack[i][0]);
            if(stack[i][0] === stack[i][1]){
                myArr3.push(i)
            }
            
            
        }


       //stack[[2,3],[1,2],,,]
       for(let i=0; i<5; i++){
        for(let j=4; j>=0; j--){
         
            myArr4.push(stack.indexOf([i,j]))
           }
               
           }
           
           
       
       

    

        for(let i=0; i<5; i++){
            
            let uniquerowArr = [...new Set(rowArr)];
            index1 = rowArr.lastIndexOf(uniquerowArr[i])
            myArr1.push(index1)

            let uniquecolumnArr = [...new Set(columnArr)];
            index2 = columnArr.lastIndexOf(uniquecolumnArr[i])
            myArr2.push(index2)
            

            /* index1 = rowArr.lastIndexOf(rowArr[i])
            myArr1.push(index1)
            index2 = columnArr.lastIndexOf(stack[i][0])
            myArr2.push(index2) */
       
        //console.log(myArr1, myArr2, myArr3, myArr4)
        
           







/*

            // tmp = [[2,2],[0,4],...]
            // arr [{"0": 0}, {"1": 0}, {"2": 0}, {"3": 0}, {"4": 0}]
            let flag = [0,0,0,0,0,0,0,0,0,0,0,0]
            for(let j=0; j<5; j++){
                for(let k=0; k<tmp.length; k++){
                    if(/*tmp가 같고 그 갯수가 5개일때 tmp[k][1] === j){ 
                        부른 횟수 ++
                        flag[j] ++

                    }
                    if(/*tmp가 같고 그 갯수가 5개일때 tmp[k][0] === j){ 
                        부른 횟수 ++
                        flag[j] ++

                    }
                    if(flag.includes(5)){
                            bingo++
                            그 원소 = 0;
                            if(bingo === 3){
                                부른횟수 출력
                                break;
                            }
                    }
                        
                    if(tmp[k][1] === 1){
                        flag1 ++
                    }*/
        
       
    

let inputArr = [[11,12 ,2 ,24 ,10], [16, 1, 13, 3, 25], [6 ,20, 5, 21, 17], [19 ,4 ,8 ,14 ,9], [22 ,15 ,7 ,23 ,18]];
let bingoArr =[ [5 ,10, 7 ,16, 2], [4 ,22, 8, 17, 13], [3 ,18, 1, 6, 25], [12, 19, 23, 14, 21], [11, 24, 9, 20, 15]];
console.log(solution(inputArr, bingoArr));
       