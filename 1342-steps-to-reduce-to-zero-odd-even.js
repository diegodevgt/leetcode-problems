/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let acc = 0;
    let number = num;
    while(number > 0){
        acc = acc + 1;
        if(number % 2 === 0) number = number / 2;
        else number = number - 1;
    }
    return acc;
};