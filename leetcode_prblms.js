//Given an array of integers (num) and an integer (target),
//return indicies of the two numbers such that they add up to (target).

function twoSum(arr, target){
    for(var i = 0; i < arr.length-1; i ++) {
        if(arr[i] + arr[i + 1] == target)
        console.log([i, i+1])
    }
}

// console.log(twoSum([2,5,1,8], 7));

function isPal(str){
    if(str.length == 1) return true;

    if(str.length == 2) return str[0] === str[1];

    if(str[0] === str.slice(-1)) return isPal(str.slice(1, -1))

    return false
}

// console.log(isPal("434"))


// const r = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}


var mergeTwoLists = function(list1, list2) {
    var result = [];
    var i = 0;
    var j = 0;
    
    while(i < list1.length && j < list2.length) {
        if(list2[j] > list1[i]) {
            result.push(list1[i])
            i ++;
        } else {
            result.push(list2[j])
            j ++;
        }
    }
    while(i < list1.length){
        result.push(list1[i])
        i ++;
    }
    while(j < list2.length){
        result.push(list2[j])
        j ++;
    }
    return result;
};

var list1 = [1,7,12,8];
var list2 = [5,9,50,32];

// console.log(mergeTwoLists(list1, list2))

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that 
// each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the 
// result be placed in the first part of the array nums. More formally, if there are k elements after removing 
// the duplicates, then the first k elements of nums should hold the final result. It does not matter what you 
// leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums


var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]) nums.splice(nums[i], 1);
    }
    console.log(nums)
    return nums.length;
}

// console.log(removeDuplicates([1,2,2,3,3,4,5,5]));

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    merge(list1, list2) {
        if(list1.length === 0) return undefined;
        if(list2.length === 0) return undefined;
        var newList = [];
        var i = 0;
        var j = 0;
        while(i < list1.length && j < list2.length) {
            
        } 
    }
}

// var list1 = [1,7,12,8];
// var list2 = [5,9,50,32,0];

// let list = new SLL();

// list.merge(list1,list2);

// console.log(list);

// let sum = 0;
// for (let i = 0; i < 3; i++) {
//     for (let j = 5; j >2; j--) {
//         sum = sum + j + i;
//         console.log(i);
//         console.log(j);
//         console.log(sum);
//     }
// }

// console.log(sum);

let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        if (i >= 2) {
            continue;
        }
        sum = sum + i + j;
    }
}
// console.log(sum)

/* Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order. */

function searchPosition(arr, target) {
    if(arr.length < 0) return undefined;
    var start = 0; var end = arr.length - 1; var mid;

    while(start < end) {
        mid = Math.floor((start + end)/2);

        if(target < arr[mid]) {
            end = mid - 1;
        } else if(target > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start;
}

console.log(searchPosition([1,3,5,7,9], 5)); // Won't work on leetcode. Why?

/** Example interview problem */

/* Write a method that accepts a single string or a phrase as an argument. prints outh teh number of characters, 
do not count whitespace or special characters. Prints out the number of words in the string. Prints out the longest word in the string. 
Print the shortest word in the string */

// const newStr = 'These are words to search';
const stringQuest = (str) => {

    console.log(str.trim().length)
    const strSplit = str.split(" ") //will seperate string into indices
    let wordCount = 0;
    let longestWord = strSplit[0];
    let shortestWord = strSplit[0];
    
    for(let i = 0; i < strSplit.length; i++) {

        if(strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
            };
            if(strSplit[i].length < shortestWord.length) {
                    shortestWord = strSplit[i];
                };
            if(strSplit[i].length > 0) wordCount++;
            }
        return [wordCount, longestWord, shortestWord, str.trim()]
        }

console.log(stringQuest('These are some words to search'))


// var findLongest = (str) => {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
    
//     for(var i = 0; i < strSplit.length; i++) {
//         if(strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongest('This is a string'))

var removeDuplicates = function(nums) {

    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i + 1]) nums.splice(nums[i],1);
    }
    return {'length': nums.length, 'nums': nums};
}

// console.log(removeDuplicates([1,2,2,3,4,4]))

// let test = ' This is a string. ';
// let newTest = test.replace(/this/g, 'poop').toUpperCase();
// console.log(test)
// console.log(newTest)