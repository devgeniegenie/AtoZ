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

//js 해시테이블일 이용해서 성능 개선
var twoSum2 = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let gap = nums[i] - target;
        if (map.has(gap)) {
            return [map.get(gap), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

console.log(twoSum2([0,4,3,0], 0))