function solution(orders, course) {
    var answer = [];
    let stack = [];
    function combi(n,k,orders_index){
        let tmp = Array.from({length:k},()=>undefined);
        function DFS(L,s){
            if(L===k){
                stack.push(tmp.slice());
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
    
    return answer;
}