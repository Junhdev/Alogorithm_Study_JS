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