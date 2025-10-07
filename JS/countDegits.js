let count = 0

let digit = 346445678076

while (digit % 10 == digit || digit % 10 != 0d ) {
    count += 1
    digit = Math.floor(digit / 10)

}

console.log(count);
