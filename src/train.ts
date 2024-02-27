 console.log("ishga tushdi tushyapti");
// H - task

function getPositive(numbers: number[]): string {
    const positiveNumbers = numbers.filter(num => num > 0);
    const positiveString = positiveNumbers.join('');

    return positiveString;
}

const inputArray: number[] = [1, -4, 2];
const result: string = getPositive(inputArray);
console.log(result); 











 // function getReverse(str: string): string {
//     return str.split('').reverse().join('');
// }

// const originalString: string = "hello";
// const reversedString: string = getReverse(originalString);
// console.log(reversedString); 
