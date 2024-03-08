//  console.log("ishga tushdi tushyapti");
// J- task

function findLongestWord(inputString: string): string {
    const words: string[] = inputString.split(' ');
    let longestWord: string = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const inputString: string = "I come from Uzbekistan";
const result: string = findLongestWord(inputString);
console.log(result);




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
