const num = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > 3) break
    console.log(element);
}

console.log("break");
console.log("Continue");
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element < 3) continue
    console.log(element);
}