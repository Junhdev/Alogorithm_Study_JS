const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b ,...c] = fs.readFileSync(__dirname+'/input.txt').toString().trim().split("\n"); 
let input = a.trim().split('');


function solution(input, word){
    
    let arr = Array.from({length:20});
    for(i=0; i<input.length; i++){
        arr[i] = input[i];
    }
    arr[input.length] = '*';
    
    let wordArr ='';
    for(let i=0; i<word.length; i++){
        if(word[i].includes('P')){           // i===0 만족하므로
            wordArr = word[i];         
            let myArr = wordArr.split(' '); // myArr['P','x']
            word[i] = myArr[1];
            //console.log(word);             // word['x','L','P y']
        }
        

        if(word[i] !== 'L' && word[i] !== 'B' && word[i] !== 'D'){ // P
            
             //만족
            
            let tmp2 = arr.indexOf('*'); // 0                
            let tmp3 = arr[tmp2+1]      //tmp3 = arr[1] = 'a'   arr['*','a','b','c']
            arr.splice(tmp2,0,word[i]);       // arr['x','*','a','b','c']
            
            // console.log(arr)       // arr[1] = '*', arr[2]='a'  
                     
        }   
                                              // arr['a','b','c','d','x','*']
        else if(word[i] === 'L'){               // i===1 일때 만족 
            if(arr.indexOf('*') === 0){             // 만족x
                continue;
            }
            else{
                
                let tmp4= arr.indexOf('*');   // 3                         
                arr[tmp4] = arr[tmp4-1];   // arr[3] = arr[2], arr['a','b','c','c']
                arr[tmp4-1] = '*'; //arr[2] = '*' , arr['a','b','*','c']
                //console.log(arr)
                 // arr[5-1, 5] = arr [5,4] 순서 바꾸기 ('*' 왼쪽으로 이동)
            }
        }

        else if(word[i] === 'D'){
            if(arr[arr.indexOf('*')+1] === undefined){             // 오른쪽 끝인 상태이면
                continue;
            }
            else{
                
                let tmp5= arr.indexOf('*');  // 2                arr['a','b','*','c']               
                arr[tmp5] = arr[tmp5+1];     // arr[2] = arr[3], arr['a','b','c','c']
                arr[tmp5+1] = '*';           //arr[3] = '*' ,    arr['a','b','c','*']
                //console.log(arr)
                 // arr[5-1, 5] = arr [5,4] 순서 바꾸기 ('*' 왼쪽으로 이동)
            }
        }
        
        else if(word[i] === 'B'){               //
            if(arr.indexOf('*') === 0){
                continue;
            }
            else{
                arr.splice(arr.indexOf('*')-1,1); //arr.indexOf('*')-1 인덱스에서 1개 제거
            }
            
        }
    }
    
    let answer = arr.filter((element) => element !== '*').join('');
    
    return answer;
   
}
console.log(solution(input, word));