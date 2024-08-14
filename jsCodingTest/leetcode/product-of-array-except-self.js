var productExceptSelf = function (nums) {
    const result = Array(nums.length);

    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = temp;
        temp *= nums[i]
    }

    temp = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= temp;
        temp *= nums[i]
    }

    return result;
};

const input = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(input));