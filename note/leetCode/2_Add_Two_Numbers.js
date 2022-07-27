/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    /* find num1, num2 */
    let num1 = 0;
    let num2 = 0;
    for (let i=0; i<l1.length; i++) {
        num1 += l1[i]*Math.pow(10,i);
        //console.log(num1);
    }
    for (let i=0; i<l1.length; i++) {
        num2 += l2[i]*Math.pow(10,i);
        //console.log(num2);
    }

    /* sum up, made it into array */
    let rawNum3 = num1 + num2;
    let arr = [];
    let maxN = 0
   
    do {
        if (rawNum3%Math.pow(10,maxN) === rawNum3) {
            break;
        }
        maxN++ ;
        } while (rawNum3%Math.pow(10,maxN) !== rawNum3);
    console.log("maxN="+maxN);

    for (let n=maxN; n>=0; n--) {
        let num = Math.floor(rawNum3/Math.pow(10,n-1));
        console.log(num, n);
        if (10>num>=0) {
            arr.unshift(num);
            rawNum3 -= num*Math.pow(10,n);
        } 
    }
    return arr;
    
    
};