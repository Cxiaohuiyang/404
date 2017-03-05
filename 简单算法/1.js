//找出整型数组中乘积最大的三个数
//给定一个包含整数的无序数组，要求找出乘积最大的三个数。

var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];
sum(unsorted_array);
function sum(unsorted_array) {

    let ary = unsorted_array.sort((a, b) => {
        return a - b;
    });
    let len = ary.length - 1, p1 = 1, p2 = 1;

    for (let i = len; i > len - 3; i--) {
        p1 *= ary[i];
    }

    p2 = ary[0] * ary[1] * ary[len];

    console.log(ary, p2, p1);

}
//http://www.codeceo.com/article/javascript-interviews-common-algorithm-issues.html
//寻找连续数组中的缺失数
//给定某无序数组，其包含了 n 个连续数字中的 n – 1 个，已知上下边界，要求以O(n)的复杂度找出缺失的数字

// The output of the function should be 8
var array_of_integers = [2, 5, 1, 4, 9, 6, 3, 7];
var upper_bound = 9;
var lower_bound = 1;
function findMissNunber() {
    let sum = array_of_integers.reduce((m, n) => m + n, 0);
    let sum1 = Math.ceil(upper_bound / 2) + (upper_bound + lower_bound) * (Math.floor(upper_bound / 2));
    return sum1 - sum;
}
console.log(findMissNunber(array_of_integers))


var str = [1, 2, 3, 9, 8, 19];
var count = 0;
function arrange(s, ary) { 
    if (ary.length === 1) {
        count++
        console.log(s +','+ary[0]); 
        return ; 
    }   
    for (var i = 0 ; i < ary.length; i++) {
         arrange(s +','+ary[i] ,ary.filter((v,idx)=>idx!==i) );
    }  
} 
arrange('' ,str); 
