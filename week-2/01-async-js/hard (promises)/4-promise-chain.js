/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
       waitOneSecond(1).then(() => {
        return waitTwoSecond(2);
    }).then(() => {
       return waitThreeSecond(3);
    }).then(() => {
        const totalTime = Math.floor((new Date().getTime() - start) / 1000);
        console.log(totalTime);
    });  
}

calculateTime();
