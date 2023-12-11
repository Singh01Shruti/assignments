/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep (seconds) {
    const p = new Promise(function(resolve){
       setTimeout(() => {
            resolve();
        }, seconds);
    });
    return p;
}

const result = sleep(6999);
result.then(() => console.log("hi after seconds"));

