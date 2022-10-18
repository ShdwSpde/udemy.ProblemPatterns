/*
Patterns are programming mechanisms or blueprints that you could use to solve a problem

--- Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values

Write a function same which accepts two arrays. The function shoould return true if every value in the array has it value squared in the corresponding array. Te frequency of the values must be the same
*/

function same(arr1,arr2){
  if(arr1.length !== arr2.length){
    console.log(false)
  }
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
     console.log(false)
    }
    console.log(arr2)
    arr2.splice(correctIndex,1)
  }
  console.log(true)
}


same([1,3,5,7,3,2],[9,49,9,4,25,1])

// The use of indexOf iterates over the entire array, created a nested loop within our for loop, thus forming a quadratic relationship and making this O(n^2) and hugely inefficient. Let's try this below instead

function Same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(true)
}

Same([1,2,3,2,5], [9,1,4,4,11])


/*

This function creates 2 objects which store the frequency of individual values in our arrays

Then we loop through the values of our input array using a for of loop
For each val we will add 1 to the frequency counter or intialize it to 1

Then we check the keys in the first object to see if the keys in the first object correspond to that key squared with a similar value

In total we iterate 3 times for an O(N). Imagine if these had 1000 values. Iterating 1,000,000 times versus 3000 is a big difference
*/

/*

--- Anagram Challenge

Given two strings, determine if  the scond string is an anagram of the first

*/

function validAnagram(str1,str2){

  // if the length of the two diff strings is unequal we can immediately stop
  
  if(str1.length !== str2.length){
    return false
  }

  // create an object to store frequencies of each letter in str1
  
  const lookup = {}

  // if letter key exists in object, increase it by one or set it to one
  
  for(let i = 0; i < str1.length; i++){
    let letter = str1[i]
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
  }

  // return the object breakdown
  
  console.log(lookup)

  //if cant find the letter key or it is 0 then it is not an anagram
  for(let i = 0; i < str2.length;i++){
    let letter = str2[i]
    if(!lookup[letter]){
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  console.log(true)
}

validAnagram('iceman','cinema')

validAnagram('put my thang down flip it and reverse it','ti esrever dna ti pilf nwod gnaht ym tup')

/*

--- Multiple Pointers


Had issues with exiting while loop for below
*/
/*
function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left],arr[right]] ;
    } else if(sum > 0){
      right--;
    } else {
      left++;
    }
  }
}


sumZero([-4,-3,-2,-1,0,1,2,5])
*/

function countUniqueValues(arr){
  if(arr.length === 0) console.log(0)
  let  i = 0
  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    } 
  }
  console.log(i+1) 
}

countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7])
countUniqueValues([])

/*

Write a function called maxArraySum which accepts an array of integers and 
a number called n, the number should calculate the max sum of n consecituve elements in an array


*/

function maxArraySum(arr,num){
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for(let i = 0; i < num; i++){
    maxSum += arr[i]
  }
  tempSum = maxSum
  for(let i = num; i< arr.length; i++){
    tempSum = tempSum - arr[i-num] +arr[i]
    maxSum = Math.max(tempSum,maxSum)
  }
  return maxSum
}

/*
---Divide and Conquer

Thus pattern involves diving a data set into smaller chunks and then repeating a process with a subset of data

An example would be the search function, which given a sorted array of integers, accepts a value and returns the first index in which that value is located.If that value is not represented, it returns -1

search([1,2,3,4,5,6,7],4) - returns 3
search([1,2,3,4,5,6,7],6) - returns 5
search([1,2,3,4,5,6,7],11) - returns -1

function search(arr,num){
  for(let i=0; i < arr.length;i++){
    if (arr[i] === num){
      return i
    }
  }
  return -1
}

Time complexity = O(N)
*/

function search(arr,val){
  let min = 0
  let max = arr.length - 1

  while(min <= max){
    let middle = Math.floor((min + max)/ 2)
    let currentElement = arr[middle]

    if(arr[middle] < val){
      min = middle + 1
    }
    else if(arr[middle] > val){
      max = middle - 1
    }
    else {
      return middle
    }
  }
  return -1
}

// we reach O(logN) using this method. 