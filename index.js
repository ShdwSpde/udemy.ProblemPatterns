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