let res = {};
let idx = 0;
let arr = ["A", "E", "I", "O", "U"];

const dfs = (L, now) => {
    if(L>5) return;
    else{
        res[now] = idx;
        idx++
        for(let i=0; i<5; i++){
            dfs(L+1, now + arr[i]);
        }
    }
}

function solution(word) {
    var answer = 0;
    dfs("", 0);
    return res[word];
}