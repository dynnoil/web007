const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 5000);
});

promise.then(() => {
    console.log('First promise is completed');
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
}).then(() => console.log('Second promise is completed'));

