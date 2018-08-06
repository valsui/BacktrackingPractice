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

function subsets(nums) {
    let res = [];

    function find(curr, remaining, start) {
        res.push(curr);
        console.log('res', res);
        for (let i = start; i < remaining.length; i++) {
            console.log('curr', curr);
            console.log('i', i);
            console.log('start', start)
            find(
                [...curr, remaining[i]],
                [...remaining.slice(0, i), ...remaining.slice(i + 1)],
                start
            );

            start++;
        }
    }

    find([], nums, 0);

    return res;
}

subsets([1,2,3]);

