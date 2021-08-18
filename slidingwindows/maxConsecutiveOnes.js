// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
function maxConsectiveOnes(nums) {
    if(nums.length == 0) {
        return 0;
    }

    let start = 0;
    let end = 0;
    let maxLength = 0;

    for(end = 0; end < nums.length; end++) {
        if(nums[end] == 1) {
            maxLength = Math.max(maxLength, end - start + 1);
        } else {
            start = end + 1;
        }
    }

    return maxLength;

}

console.log(maxConsectiveOnes([1,1,1,1,1]))