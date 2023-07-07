function solution(N, arr) {
    
    let reverseArr = arr.map(x=>x.reverse()).map(x=>x.join(''))
    let stack = [];
    
    
    for(let j=0; j<reverseArr.length; j++){
        let reverseArr_index = reverseArr[j]
        let n = reverseArr_index.length
        for(let p=1; p<reverseArr[0].length; p++){
            
            
                let tmp = Array.from({length:p},()=>undefined);
                function dfs(L,s){
                    if(L===p){
               
                        stack.push(tmp.slice().join(''));
                    }
                    else{
                        for(let i=s; i<n; i++){
                            tmp[L] = reverseArr_index[i];
                            dfs(L+1,i+1);
                        }
                    }
                }
                dfs(0,0)
                console.log(stack)
                const setArr = new Set(stack);
                if(setArr.size === stack.length){
                    return p
                }
                stack.splice(0, stack.length)
            
           
        }
       
    }
    
   
}

console.log(solution(3, [[1,2,1,2,3,4,5],[1,2,1,2,3,5,6],[0,0,3,3,4,4,5]]))