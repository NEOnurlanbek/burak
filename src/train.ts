 console.log("ishga tushdi tushyapti");
// O - task
function calculateSumOfNumbers(arr: any[]): number {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
        } else if (typeof arr[i] === 'string' && !isNaN(parseFloat(arr[i]))) {
            sum += parseFloat(arr[i]);
        }
    }
    return sum;
}
console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 25])); 





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
