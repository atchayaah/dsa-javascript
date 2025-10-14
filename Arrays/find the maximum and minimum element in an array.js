/*
Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Examples:
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9
Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35
*/

function getMinMax(arr){
    let n=arr.length;
    let mx,mn,i;
    if(n%2==0){
        mx=Math.max(arr[0],arr[i+1]);
        mn=Math.min(arr[0],arr[i+1]);o
        i=2;
    }else{
        mx=mn=arr[0];
        i=1;
    }
    while(i<n-1){
        if(arr[i]<arr[i+1]){
            mx=Math.max(mx,arr[i+1]);
            mn=Math.min(mn,arr[0]);
        }
        else{
            mx=Math.max(mx,arr[0]);
            mn=Math.min(mn,arr[i+1]);
        }
        i+=2;
    }
    return [mx,mn];
}
let arr=[2,4,53,7,90];
let mx=getMinMax(arr)[0];
let mn=getMinMax(arr)[1];
console.log(mx);
console.log(mn);
