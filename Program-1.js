// Program - 1 (FizzBuzz Program)
for(let itr=1; itr<=100; itr++){
    if(itr%3 && itr%5==0){
        console.log("FizzBuzz");
    } else if (itr%3==0) {
        console.log("Fizz");
    } else if (itr%5==0) {
        console.log("Buzz");
    } else {
        console.log(itr);
    }
}

// Program - 2 (Palindrome)
const isPalindrome = (str) => {
    let l = 0;
    let r = str.length-1;
    let flag = 0;
    while(l<r){
        if(str[l] != str[r]){
            flag = 1;
            break;
        }
        l++;
        r--;
    }
        if(flag == 0){
            console.log("Palindrome");
        } else {
            console.log("Not a Palindrome");
        }
}


let string = prompt('Enter any String').toLowerCase()
isPalindrome(string);

// Program -3 (Larget Number)
const largestNum = (arr) => {
    let max = 0
    arr.forEach(element => {
        if (element>max){
            max = element
        }
    });
    return max
}

let array = [10, 20, 30];
console.log("Largest Element in the Array =",largestNum(array));

// Program - 4 (Number of Occurrences)
const count = (str) => {
    let obj = new Object();
    for (let i = 0; i < str.length; i++) {
        if(!obj[str[i]])
            obj[str[i]] = 1
        else
            obj[str[i]] += 1
    }
    return obj;
}
let str = "sixphase";
console.log(count(str));

// Program - 5 (Longest Word in the String)
const longestWord = (str) => {
    let arr = str.split(" ")
    arr.sort()
    return arr[arr.length - 1]
}

let sentence = prompt('Enter any String').toLowerCase()
console.log("Longest Word in the sentence is", longestWord(sentence));

// Program - 6 (Factorial)
const Factorial = (num) => {
    let result = 1
    for(let fact=1; fact<=num; fact++) {
        result = result*fact;
    }
    return result;
}

let num = prompt("Enter the number:")
console.log("Factorial of the number is", Factorial(num));

// Program - 7 (Celsius to Fahrenheit)
const Fahrenheit = (celsius) => {
    let temp = (celsius * 9/5) + 32;
    return temp
}   

let celsius = prompt("Enter the Temperatur in Celsius");
console.log("Fahrenheit Temperatur for", celsius, "is", Fahrenheit(celsius))

// Program - 8 (Missing Number from the array)
const miisingNumber = (arr) => {
    let result = 0;
    let max = largestNum(arr);
    alert(max)
    for(let itr=0; itr<=max; itr++) {
        if (arr.includes(itr)) continue
        else return itr
    }
}

let arr = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10]
console.log("Missing Number from the array is", miisingNumber(arr))