function solution(arr){
    let answer = [];
    let arrMap = new Map();
    
    let stack = [];
    for(let i=1; i<arr.length; i++){
        if(!arrMap.has(arr[i])){
            arrMap.set(arr[i-1], 0)
        }
        
        if(arrMap.has(arr[i])){
            let before = arrMap.get(arr[i])
            arrMap.set(arr[i], before+1)
        }
    }
    
    
   
    return arrMap;
}
console.log(solution([1,2,3,3,3,3,4,4]))