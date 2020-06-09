function countingSheep(sheep) {
    for (let i = sheep; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence`);
    }
    console.log("All sheep jumped over the fence");
}

// countingSheep(4);

function powerCalculator(number, exponent) {
    if (exponent < 0) {
        console.log("exponent should be >= 0");
    } else {
        let total = 1;
        for (let i = exponent; i > 0; i--) total *= number;
        console.log(total);
    }
}

// powerCalculator(10, 3);

function reverseString(text) {
    let reverseText = "";
    for (let i = text.length - 1; i >= 0; i--)
        reverseText += text.slice(i, i + 1);
    console.log(reverseText);
}

// reverseString("test case");

function nthTriangularNumber(triangleNumber) {
    let sum = 0;
    for (let i = 1; i <= triangleNumber; i++) sum += i;
    console.log(sum);
}

// nthTriangularNumber(9);

function stringSplitter(text, delimiter) {
    const splitArray = [];
    let currentString = "";
    for (let i = 0; i <= text.length; i++) {
        if (text.slice(i, i + 1) === delimiter || i === text.length) {
            splitArray.push(currentString);
            currentString = "";
            continue;
        }
        currentString += text.slice(i, i + 1);
    }
    console.log(splitArray);
}

// stringSplitter("1/2/3/55", "/");

function fibonacci(fibNum) {
    const fibArray = [1, 1];

    for (let i = 0; i < fibNum; i++) {
        if (i > 1) fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
        console.log(fibArray[i]);
    }
}

// fibonacci(7);

function factorial(number) {
    let total = number;
    for (let i = number - 1; i > 1; i--) total *= i;
    console.log(total);
}

factorial(6);
