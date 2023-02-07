function solution(N, input){
    let arr = input.split(' ').map((x)=>{return parseInt(x);});
    let answer = 1;
    let max = arr[0];
    for(let i=1; i<N; i++){       // i=4
        if(arr[i-1]<arr[i]){ // arr[0] < arr[1] // arr[3]<arr[4]
            //max = arr[i]; // max = arr[1]
            if(arr[i]>max){ //arr[1]>max  // arr[4] < arr[2]
                answer++; //answer=2
            }
            max = arr[i]; // max = arr[1] // max = arr[2]
        }

    }
    return answer;
}

let N = 8;
let input = '130 135 148 140 145 150 150 153'
console.log(solution(N, input)); 