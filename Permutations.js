const str1 = '12ש456';
const str2 = '654ש21';

function Permutations (str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    var counterArr = {};

    for(let i = 0 ; i< str1.length;i++){
        counterArr[str1[i]] = (counterArr[str1[i]] || 0 )+1;
    }

    for(let i = 0 ; i< str2.length;i++){
        if(!counterArr[str2[i]])
            return false;
        counterArr[str2[i]]--;
        
    }
    return true;

}

console.log(Permutations(str1,str2));