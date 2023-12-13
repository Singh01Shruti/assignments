/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function waitOneSecond(n1) {
    const p = new Promise (function (resolve) {
        setTimeout( function () {
            resolve();
        }, n1*1000)
    });
    return p;
}

function waitTwoSecond(n2) {
    const p = new Promise (function (resolve) {
        setTimeout( function () {
            resolve();
        }, n2*1000)
    });
    return p;
}

function waitThreeSecond(n3) {
    const p = new Promise (function (resolve) {
        setTimeout( function () {
            resolve();
        }, n3*1000)
    });
    return p;
}

function calculateTime() {
    const start = new Date().getTime();
    Promise.all([waitOneSecond(1), waitTwoSecond(2), waitThreeSecond(3)])
    .then(() => {
        const totalTime = Math.floor((new Date().getTime() - start) / 1000);
        console.log(totalTime);
    })

}

calculateTime();

