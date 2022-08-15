/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = 0;
    for(let i = 0; i < accounts.length; i++){
        let current_wealth = 0;
        for(let j = 0; j < accounts[i].length; j++){
            current_wealth = current_wealth + accounts[i][j];
        }  
        if(wealth <= current_wealth){
            wealth =  current_wealth;
        }
    }  
    return wealth;
};