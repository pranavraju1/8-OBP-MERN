function allPalindromes(str){
    let palindromes = [];
    for(let i=0; i<str.length; i++){
        for(let j=i+2; j<=str.length; j++){
            let sub = str.slice(i,j);
            let reversed = sub.split("").reverse().join("");
            if(sub == reversed){
                palindromes.push(sub)
            }
        }
    }
    return palindromes
}
console.log(allPalindromes("racecar"))