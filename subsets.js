/*
Given a set of distinct integers, nums, return all possible subsets 

Note: Solution set does not contain duplicates

Example:
Input: nums = [1,2,3]
Output: 
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

// leetcode solution
const subsets = (array) => {
    let results = [];
    const createSet = (current, remaining, startIdx) => {
        results.push(current);
        for( let i = startIdx; i < remaining.length; i++){
            createSet(
                [...current, remaining[i]],
                [...remaining.slice(0,i), ...remaining.slice(i+1)],
                startIdx
            );
            startIdx++;
        }   
    }

    createSet([], array, 0);
    return results;
}

console.log(subsets([1, 2, 2]))

// with duplicates in the input 
// Example:

// Input: [1, 2, 2]
// Output:
// [
//     [2],
//     [1],
//     [1, 2, 2],
//     [2, 2],
//     [1, 2],
//     []
// ]

const subsetsNoDups = (array) => {
    let results = [];
    array = array.sort((a,b) => a-b);

    const createSet = (current, remaining, startIdx) => {
        results.push(current);
        for (let i = startIdx; i < remaining.length; i++) {
            // console.log('current_i', i);
            // console.log('results', results);
            // console.log('current', current);
            // console.log('remaining', remaining);
            // console.log('start', startIdx);
            if(remaining[i] === remaining[i-1]) {
                // console.log('remaining', remaining);
                // console.log('remaining[i]', remaining[i]);
                // console.log('remaining[i-1]', remaining[i - 1]);
                continue;
            }
            createSet(
                [...current, remaining[i]],
                [...remaining.slice(0, i), ...remaining.slice(i + 1)],
                startIdx
            );
            startIdx++;
        }
    }

    createSet([], array, 0);
    return results;
}


console.log(subsetsNoDups([2, 1, 2, 2]))