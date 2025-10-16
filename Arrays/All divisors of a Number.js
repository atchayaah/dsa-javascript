/*


Easy - Given an integer n, print all the divisors of N in the ascending order.
 
Examples:
Input : n = 20
Output: 1 2 4 5 10 20
Explanation: 20 is completely divisible by 1, 2, 4, 5, 10 and 20.
Input: n = 21191
Output: 1 21191
Explanation: As 21191 is a prime number, it has only 2 factors(1 and the number itself).

Constraints:
1 ≤ n ≤ 109

*/

class Solution {
    // Function to print all the divisors of the given number.
    print_divisors(n) {
        // code here
        let div = [];       // to store smaller divisors
        let largeDiv = [];  // to store larger divisors

        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                div.push(i);             // i is a divisor
                if (i !== n / i) {       // avoid duplicate for perfect squares
                    largeDiv.push(n / i);
                }
            }
        }

        // Append large divisors in ascending order
        for (let i = largeDiv.length - 1; i >= 0; i--) {
            div.push(largeDiv[i]);
        }

        // Print divisors as a space-separated string
        console.log(div.join(" "));

        
    }
}
