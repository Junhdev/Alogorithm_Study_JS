function lower(infoMap, target, start, end){
                    
    let flag = 0;
    let mid = 0;
   
    let midSet = new Set();
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(infoMap.get(`점수${mid}`) >= parseInt(target[7])){
            if(infoMap.get(`언어${mid}`) === target[0] || target[0] === '-'){
                flag++;
            }
            if(infoMap.get(`직군${mid}`) === target[2] || target[2] === '-'){
                flag++;
            }
            if(infoMap.get(`경력${mid}`) === target[4] || target[4] === '-'){
                flag++;
            }
            if(infoMap.get(`소울 푸드${mid}`) === target[6] || target[6] === '-'){
                flag++;
            }
            if(flag === 4){
                midSet.add(`${mid}`)
                
            }
            //ans = mid;
            end = mid -1
        }
        else if(infoMap.get(`점수${mid}`) < parseInt(target[7])){
            start = mid + 1;
        }
        // 중요
        flag = 0;
    }
    // 중요
    if(midSet.size === 0){
        return -1;
    }
    else{
        return midSet;
    }
}

function upper(infoMap, target, start, end){
    
    let flag = 0;
    let mid = 0;
    
    let midSet = new Set();
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(infoMap.get(`점수${mid}`) >= parseInt(target[7])){
            if(infoMap.get(`언어${mid}`) === target[0] || target[0] === '-'){
                flag++;
            }
            if(infoMap.get(`직군${mid}`) === target[2] || target[2] === '-'){
                flag++;
            }
            if(infoMap.get(`경력${mid}`) === target[4] || target[4] === '-'){
                flag++;
            }
            if(infoMap.get(`소울 푸드${mid}`) === target[6] || target[6] === '-'){
                flag++;
            }
            
            if(flag === 4){
                midSet.add(`${mid}`)
                
            }
            //ans = mid;
            start = mid + 1
        }
        else if(infoMap.get(`점수${mid}`) < parseInt(target[7])){
            start = mid + 1;
        }
        flag = 0;
    }
    if(midSet.size === 0){
        return -1;
    }
    else{
        return midSet;
    }

}

Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
};

function solution(info, query) {
    let querySplit = query.map(x=>x.split(' '));
    let infoSplit = info.map(x=>x.split(' '));
    let infoMap = new Map();
    let answer = Array.from({length:query.length}, ()=>0)
    let N = info.length
    
    // 정렬먼저 시키키 중요!!
    infoSplit.sort((a,b) => a[4]-b[4])
    
    for(let j=0; j<info.length; j++){
        
        infoMap.set(`언어${j}`, infoSplit[j][0])
        infoMap.set(`직군${j}`, infoSplit[j][1])
        infoMap.set(`경력${j}`, infoSplit[j][2])
        infoMap.set(`소울 푸드${j}`, infoSplit[j][3])
        infoMap.set(`점수${j}`, parseInt(infoSplit[j][4]))
    }
    //console.log(infoMap)
    querySplit.forEach((value, idx) => {

        //console.log(value,idx)
        let loweridx = lower(infoMap, value, 0, N-1);
        let upperidx = upper(infoMap, value, 0, N-1);
        let sum = 0;
        if(loweridx !== -1 && upperidx !== -1){
            //console.log(loweridx,upperidx)
            let result = loweridx.union(upperidx)
            sum = result.size
        }
        else{
            sum = 0;
        }
        answer[idx] = sum;
    })
    
    return answer;
}

/* 정확성 테스트 O , 효율성 테스트 X
function solution(info, query) {
    let querySplit = query.map(x=>x.split(' '));
    let infoSplit = info.map(x=>x.split(' '));
    let infoMap = new Map();
    let flag = 0;
    let answer = Array.from({length:query.length}, ()=>0)
    for(let i=0; i<query.length; i++){
        
            infoMap.set('언어', infoSplit[j][0])
            infoMap.set('직군', infoSplit[j][1])
            infoMap.set('경력', infoSplit[j][2])
            infoMap.set('소울 푸드', infoSplit[j][3])
            infoMap.set('점수', infoSplit[j][4])
           
            if(querySplit[i][0] === '-' || infoMap.get('언어') === querySplit[i][0] ) flag++
            if(querySplit[i][2] === '-' || infoMap.get('직군') === querySplit[i][2] ) flag++
            if(querySplit[i][4] === '-' || infoMap.get('경력') === querySplit[i][4] ) flag++
            if(querySplit[i][6] === '-' || infoMap.get('소울 푸드') === querySplit[i][6] ) flag++
            if(Number(querySplit[i][7]) <= Number(infoMap.get('점수'))) flag++
            if(flag === 5) answer[i]++
            flag = 0;
        
    }

return answer;
}
*/