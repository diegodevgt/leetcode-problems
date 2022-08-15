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
    let counter = 1;
    let res;
    let map_values = [];
    if(replica.next === null) return head
    map_values.push(replica)
    while(replica.next !== null){
        replica = replica.next;
        map_values.push(replica)
        counter+=1;
    }
    if(counter % 2 === 0) return map_values[Math.round(counter/2)]
    else return map_values[Math.round(counter/2) - 1];
};

