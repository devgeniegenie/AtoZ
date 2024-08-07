/**
 * https://leetcode.com/problems/two-sum/?submissionId=1347369984
 */

var twoSum = function(nums, target) {
    const result = [];
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
                break;
            }
        }
    }
    return result;
};

console.log(twoSum([0,4,3,0], 0))