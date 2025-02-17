 // Clock function using setTimeout
function displayTimeWithTimeout() {
    const now = new Date();
    console.log('24-hour format:', now.toLocaleTimeString('en-GB'));
    console.log('12-hour format:', now.toLocaleTimeString('en-US'));
    setTimeout(displayTimeWithTimeout, 1000);
}
displayTimeWithTimeout();