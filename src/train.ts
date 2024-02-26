console.log("ishga tushdi tushyapti");

function getReverse(str: string): string {
    return str.split('').reverse().join('');
}

const originalString: string = "hello";
const reversedString: string = getReverse(originalString);
console.log(reversedString); 
