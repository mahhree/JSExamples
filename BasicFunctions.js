/*
    Reminder:
    Run this file by using the command: node homework1.js
    make sure you're in the right folder by using dir and cd
*/

//1
console.log( findMin([0, 100, 'hi', null, -1, 5, false]) );
//EXPECTED OUTPUT(number): -1



//2
console.log( halfNumberToArray(8) );
//EXPECTED OUTPUT(array): [4, 4]

console.log( halfNumberToArray(19) );
//EXPECTED OUTPUT(array): [10, 9]

console.log( halfNumberToArray(-19) );
//EXPECTED OUTPUT(array): [-9, -10]



//3
console.log( countCharacters('j', 'ES6 Javascript and Node.js.') );
//EXPECTED OUTPUT(number): 2

console.log( countCharacters('a', 'ES6 Javascript and Node.js.') );
//EXPECTED OUTPUT(number): 3



//4
console.log( findAndReplace('*', 'a', 'ES6 J*v*script *nd Node.js.') );
// //EXPECTED OUTPUT(string): 'ES6 Javascript and Node.js.'



//5 Write a function called removeFalsey
console.log( removeFalsey([8, false, '', 6, true, null, 7, 5, 0, 3]) );
//EXPECTED OUTPUT(array): [8, 6, true, 7, 5, 3]



//6
console.log( prioritizeUppercase('javAsCriTp') );
//EXPECTED OUTPUT(array): ['A', 'C', 'T', 'j', 'a', 'v', 's', 'r', 'i', 'p']

console.log( prioritizeUppercase('apPliCaTIon') );
//EXPECTED OUTPUT(array): ['P', 'C', 'T', 'I', 'a', 'p', 'l', 'i', 'a', 'o', 'n']



//7
console.log( vowelPosition('ES6 Javascript and Node.js.') );
//EXPECTED OUTPUT(array): [{e: 0}, {a: 5}, {a: 7}, {i: 11}, {a: 15}, {o: 20}, {e: 22}]



//8
console.log( bucketObjectKeyValues({Microsoft: 'Activision/Blizzard',
                                    Sony: 'Bungie',NYTimes: 'Wordle'}) );
// EXPECTED OUTPUT(object): 
// {
//     '0': ['Microsoft', 'Activision/Blizzard'],
//     '1': ['Sony', 'Bungie'],
//     '2': ['NYTimes', 'Wordle']
// }

console.log( bucketObjectKeyValues({Google: 'Play', Apple: 'Arcade'}) );
// EXPECTED OUTPUT(object): 
// {
//     '0': ['Google', 'Play'],
//     '1': ['Apple', 'Arcade']
// }



// 1. Write a function called findMin
function findMin(myArray)
{
    const length = myArray.length;
    let min = myArray[0];
   
    for(let i=1; i<length;i++)
    {
        if(myArray[i]<min)
            min = myArray[i];
    } 
    return min;
}

// 2. Write a function called halfNumberToArray
function halfNumberToArray(myNum)
{
    const x = Math.ceil(myNum/2);
    const y = Math.floor(myNum/2);
    return [x,y];
}

// 3. Write a function called countCharacters
function countCharacters(findMe, myString)
{
    const length = myString.length;
    let x = 0;
    findMe = findMe.toUpperCase();
    myString = myString.toUpperCase();
    
    for(let i=0;i<length;i++)
    {
        if(myString[i] == findMe)
            x++;
    }
    return x;
}

// 4. Write a function called findAndReplace
function findAndReplace(first, second, third)
{
    const length = third.length;
    let finalString = "";

    for(let i=0; i<length;i++)
    {
        if(third[i] == first)
            finalString = finalString + second;
        else
            finalString = finalString + third.substring(i,i+1); 
    }
    return finalString;
}


// 5. Write a function called removeFalsey
function removeFalsey(myArray)
{
    return myArray.filter(Boolean);
}

// 6. Write a function called priorityUppercase
function prioritizeUppercase(myString)
{
    let upperArray = new Array;
    let lowerArray = new Array;
    let finalArray = new Array;
    const length = myString.length;

    for(let i=0; i<length; i++)
    {
        if(myString[i] == myString[i].toUpperCase())
            upperArray.push(myString[i]);
        else
            lowerArray.push(myString[i]);
    }

    finalArray = finalArray.concat(upperArray,lowerArray);
    return finalArray;
}


// 7. Write a function called vowelPosition
function vowelPosition(myString)
{
    let finalArray = new Array;
    let vowels = ['a','e','i','o','u'];
    const lengthS = myString.length;
    const lengthV = vowels.length;

    for(let i=0; i<lengthS; i++)
    {
        for(let j=0; j<lengthV; j++)
        {
            if(myString[i].toLowerCase() == vowels[j])
            {
                let myObj = {};
                myObj[myString[i].toLowerCase()] = i;
                finalArray.push(myObj);
            }
        }
    }
    return finalArray;
}


// 8. Write a function called bucketObjectKeyValues
function bucketObjectKeyValues(myObj)
{
    let bucketObject = {};
    let valuesArray = Object.values(myObj);
    let keyArray = Object.keys(myObj);
    const length = valuesArray.length;

    for(let i=0; i<length; i++)
    {
        bucketObject[i] = [keyArray[i],valuesArray[i]];
    }
    return bucketObject;

}
