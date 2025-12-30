function vowelfinder(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (CHAR in str){
        if (vowels.includes(str[CHAR])) {
            count++;
        }
    }
    return count;
}
console.log(vowelfinder("JavaScript is fun")); // Output: 5 
