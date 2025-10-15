/*

Medium - Given an integer n, find its factorial. Return a list of integers denoting the digits that make up the factorial of n.

Examples:
Input: n = 5
Output: [1, 2, 0]
Explanation: 5! = 1*2*3*4*5 = 120
Input: n = 10
Output: [3, 6, 2, 8, 8, 0, 0]
Explanation: 10! = 1*2*3*4*5*6*7*8*9*10 = 3628800
Input: n = 1
Output: [1]
Explanation: 1! = 1 
*/

/**
 * @param {number} n
 * @return {number[]}
 */

class Solution {
    factorial(n) {
        // code here
        let res=[1];
        
        for(let x=2;x<=n;x++){
            let carry=0;
            for(let i=0;i<res.length;i++){
                let prod=res[i]*x+carry;
                res[i]=prod%10;
                carry=Math.floor(prod/10);
                
            }
            while(carry>0){
                res.push(carry%10);
                carry=Math.floor(carry/10);
            }
            
        }
        return res.reverse();
        
    }
}
