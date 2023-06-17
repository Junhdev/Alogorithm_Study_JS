function solution(orders, course) {
    var answer = [];
    let stack = [];
    let stack2 = [];
    let stack3 = [];
    
    
    for(let j=0; j<orders.length; j++){
        let orders_index = orders[j]
        let n = orders[j].length
        for(let p=0; p<course.length; p++){
            let k = course[p]
            function combi(n,k,orders_index){
            let tmp = Array.from({length:k},()=>undefined);
            function DFS(L,s){
            if(L===k){
                
                stack.push(tmp.slice().sort().join(''));
            }
            else{
                for(let i=s; i<n; i++){
                    tmp[L] = orders_index[i];
                    DFS(L+1,i+1);
                }
            }
            }
            DFS(0,0)

            }
            combi(n,k,orders_index)
        }
       
    }
    console.log(stack)
    let flag = 0;
    stack2.push([stack[0],1])
    for(j=1; j<stack.length; j++){
            for(let k=0; k<stack2.length; k++){
                if(stack2[k][0] === stack[j]){
                    stack2[k][1] ++
                    flag = 1;
                }
            }
            if(flag === 0){
                stack2.push([stack[j],1])
            }
            flag = 0;
            
        

    }

    for(let i=0; i<course.length; i++){
        for(let j=0; j<stack2.length; j++){
            if(stack2[j][0].length === course[i]){
                stack3.push(stack2[j][1])
                //console.log(stack3)
                
            }

            
        }
        for(let j=0; j<stack2.length; j++){
            // 세부조건 잘 체크
            if(stack2[j][1] === Math.max(...stack3) && stack2[j][0].length === course[i] && stack2[j][1]>1 ){
                answer.push(stack2[j][0])
            }
        }
        
        stack3.splice(0, stack3.length)
    }
    
    answer.sort();


return answer;
}
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]))