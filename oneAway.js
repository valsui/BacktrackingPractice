//given two strings, determine if they are at most one difference away from each other
//one diff means: one extra letter, one letter deleted, one letter replaced

//this way will optimize for space, however, it isn't that easily comprehendable. in order to make it more coder friendly, should separate into functions.

const oneAway = (str1, str2) => {
    if( str1 === str2 ) return true;
    if( Math.abs(str1.length) - Math.abs(str2.length) > 1) return false;

    let countDiff = 0, i = 0, j = 0;
    const s1Len = str1.length;
    const s2Len = str2.length;

    while( countDiff < 2 && (i < s1Len && j < s2Len)){
        if(str1[i] !== str2[j]){
            countDiff++;
            if(s1Len < s2Len){
                j++;
            }else if(s1Len > s2Len){
                i++;
            }else{
                i++;
                j++;
            }
        }else{
            i++;
            j++;
        }
    }

    if(countDiff < 2){ return true} else {return false;}
};

console.log(oneAway('pale', 'palse'));
console.log(oneAway('bale', 'pale'));
console.log(oneAway('balse', 'pale'));
console.log(oneAway('bales', 'pale'));
