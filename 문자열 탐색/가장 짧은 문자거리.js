function solution(input_string) {
    let answer = '';
    let answerArr = [];
    let disArr = [];
    let t_indexArr = [];
    let input_st = input_string.split(' ');
    let t = input_st[1];
    let inputArr = input_st[0].split('');
    //console.log(inputArr)
    
    
    for(let i=0; i<inputArr.length; i++){
        if(inputArr[i] === t){
            t_indexArr.push(i);
        }
    }
    //console.log(t_indexArr)
    for(let j=0; j<inputArr.length; j++){
        for(let k=0; k<t_indexArr.length; k++){
            //console.log(t_indexArr)
            //console.log(j-t_indexArr[k])
            disArr.push(Math.abs(j-t_indexArr[k]));
        }
        // console.log(disArr)
        
        answerArr.push(Math.min(...disArr));
        disArr.pop();
        disArr.pop();
        disArr.pop();
    }
    answer = answerArr.join(' ');
    return answer;
}
let input_string = 'teachermode e'
console.log(solution(input_string));