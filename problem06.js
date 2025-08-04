/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
let result=startingSalary*Math.pow((1+0.05),experience);
console.log(result.toFixed(2));