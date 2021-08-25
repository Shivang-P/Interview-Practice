function findMax(nums, k) {
    let start = 0;
    let end = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let runningSum = 0;

    for(end = 0; end < nums.length; end++) {
        runningSum += nums[end];

        if(end - start + 1 == k) {
            max = Math.max(runningSum, max);
            runningSum -= nums[start];
            start++;
        }
    }

    return max;
}

console.log(findMax([4,2,1,7,8,1,0], 3))