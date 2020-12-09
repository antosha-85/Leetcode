var twoSum = function(nums, target) {
    let newObj = {};
     for (let i = 0; i < nums.length; i++) {
         newObj[nums[i]] = i;
     }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (newObj.hasOwnProperty(complement) && newObj[complement] !== i) {
            return [i, newObj[complement]];
        }
    }
    return 'No solution was found'
};
