/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let replica = head;
    let counter = 0;
    let res;
    if(replica.next === null) return head
    while(replica.next !== null){
        replica = replica.next;
        counter+=1;
    }
    replica = head;
    let iteration = 0;
    while(replica.next !== null && iteration <= counter){
        replica = replica.next;
        iteration += 1;
        if(iteration === Math.round(counter/2)) res = replica;
    }
    return res;
};