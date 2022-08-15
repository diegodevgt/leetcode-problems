/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let acc = 0;
    let res = nums.map((num,index)=>{
        if(index === 0){
            acc = num;
            return acc;
        }
        if(index < nums.length){
            acc = acc + num
            return acc
        }
    })
    return res;
};