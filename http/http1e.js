const waitTimeMs = 1000;
const callback = () => {
    console.log("This is Second.");
}
console.log("This is first.");
setTimeout(callback, waitTimeMs);
console.log("This is Third.");
