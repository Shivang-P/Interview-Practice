// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function longestSubstring(s) {
    if(s.length == 0) {
        return 0;
    }

    let start = 0;
    let end = 0;
    let seen = new Set();
    let max = 0;

    for(end = 0; end < s.length; end++) {
        while(seen.has(s[end])) {
            seen.delete(s[start]);
            start++;
        }
        seen.add(s[end]);
        max = Math.max(max, end - start + 1);
    }

    return max;

}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("a"));