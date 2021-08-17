//Find the minimum contiguous subarray whose sum adds up at least a given sum.
function findSum(nums, sum) {
    if(nums.length == 0) {
        return 0;
    }

    let start = 0;
    let end = 0;
    let runningSum = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    
    for(end = 0; end < nums.length; end++) {
        runningSum += nums[end];
        while(runningSum >= sum) {
            if(end - start + 1 < minLength) {
                minLength = end - start + 1;
            }

            runningSum -= nums[start];
            start++;
        }
    }

    return minLength;
}

console.log(findSum([2,3,1,2,4,3], 7));
