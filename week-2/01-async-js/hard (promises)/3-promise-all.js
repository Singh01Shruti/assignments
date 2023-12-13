/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

