function solution(date, input){

    let answer = 0;
    let carNum = input.split(' ').map((x)=> {return parseInt(x);});
    //console.log(carNum)
    
    for(let i=0; i<carNum.length; i++){
     if(date === (carNum[i] % 10)){
         answer ++;
     }
    }
    return answer;
     
 }
 let date = 0;
 let input = '12 20 54 30 87 90 30';
 console.log(solution(date, input));