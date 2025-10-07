let sum = 0

for (let i = 1;  i <= 10; i++) {
    console.log(`${sum} + ${i} = ${sum+i}`);
    
    sum += i;
}

console.log(`sum of 1 to 10 is ${sum}`)