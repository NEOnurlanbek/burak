 console.log("ishga tushdi tushyapti");
// U - task
function toqsonlar(n: number) {
    let count: number = 0;

    for (let i = 2; i <= n; i += 2) {
        count++;
    }

    return count;
}

console.log(toqsonlar(9)); 
console.log(toqsonlar(11)); 
 
// Q - task
// function calculate(yozuv: string) {
//     const parts: string[] = yozuv.split('+')
//     const sum: number = parts.reduce((acc, curr) => acc + parseInt(curr), 0);

//     return sum;
// }

// console.log(calculate("1+3")); 


// S - task
// function missingNumber(numbers: number[]){
//     const numm: number = numbers.length;
//     const expectedSum: number = (numm * (numm + 1)) / 2;
//     const actualSum: number = numbers.reduce((acc, curr) => acc + curr, 0);

//     return expectedSum - actualSum;
// }
// console.log(missingNumber([3, 0, 1])); 

// R - task
// function calculate(str: string) {
//     const parts: string[] = str.split('+');

//     const sum: number = parts.reduce((acc, curr) => acc + parseInt(curr), 0);
    
//     return sum;
// }

// console.log(calculate("1+3"));

// Q - task

// function hasProperty(obj: { [key: string]: any }, key: string){
//     return obj.hasOwnProperty(key);
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model")); 
// console.log(hasProperty({name: "BMW", model: "M3"}, "year")); 

// p - task
// function objectToArray(o: { [key: string]: any }) {
//     return Object.entries(o);
// }

// const result = objectToArray({a: 10, b: 20});
// console.log(result); 




// O - task
// function calculateSumOfNumbers(arr: any[]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number"){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 





//N - task

// function isPalindrome(soz: string): boolean {
//     const sozlar: string = soz.split('').reverse().join('');
    
//     return soz === sozlar;
// }

// console.log(isPalindrome("non")); 
// console.log(isPalindrome("mit")); 


//L - task

// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({ number: num, square: num * num }));
// }

// const inputNumbers: number[] = [1, 2, 3];
// const result = getSquareNumbers(inputNumbers);
// console.log(result); 




// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     const result: { number: number, square: number }[] = [];

//     for (const num of numbers) {
//         const square = num * num;
//         const obj = { number: num, square: square };
//         result.push(obj);
//     }

//     return result;
// }

// const inputNumbers: number[] = [1, 2, 3];
// const result = getSquareNumbers(inputNumbers);
// console.log(result);



 //K- task
// function countVowels(inputString: string): number {
//     const vowels = "aeiouAEIOU";
//     let vowelCount = 0;

//     for (const char of inputString) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }

//     return vowelCount;
// }

// const inputString: string = "string";
// const result: number = countVowels(inputString);
// console.log(result);


// J- task

// function findLongestWord(inputString: string): string {
//     const words: string[] = inputString.split(' ');
//     let longestWord: string = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// const inputString: string = "I come from Uzbekistan";
// const result: string = findLongestWord(inputString);
// console.log(result);




// I - task



// function getDigits(inputString: string): string {
//     const digitsArray: string[] = inputString.split('').filter(char => /\d/.test(char));
//     const resultString: string = digitsArray.join('');

//     return resultString;
// }

// // Test qilish
// const inputString: string = "m14i1t";
// const result: string = getDigits(inputString);
// console.log(result); 




// H - task

// function getPositive(numbers: number[]): string {
//     const positiveNumbers = numbers.filter(num => num > 0);
//     const positiveString = positiveNumbers.join('');

//     return positiveString;
// }

// const inputArray: number[] = [1, -4, 2];
// const result: string = getPositive(inputArray);
// console.log(result); 











 // function getReverse(str: string): string {
//     return str.split('').reverse().join('');
// }

// const originalString: string = "hello";
// const reversedString: string = getReverse(originalString);
// console.log(reversedString); 
