const n = 3;
const m = 2;

const mySol = (n, m) => {
    let temp = Array.from({length: m}, () => 0);
    const DFS = (L) => {
        if (L == m) {
            console.log(temp);
        } else {
            for(let i = 1; i <= n; i++) {
                temp[L] = i;
                DFS(L + 1);
            }
        }
    };
    DFS(0);
};
mySol(n, m);

function solution(n, m){
    let answer=[];
    let tmp=Array.from({length:m}, ()=>0);
    function DFS(L){
        if(L===m){
            answer.push([...tmp]); //arr에 temp를 push하여 return하는 식이므로 복사해서 값을 넣음
        }
        else{
            for(let i=1; i<=n; i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }
    }

    DFS(0);
    return answer;
}
console.log(solution(3, 2));