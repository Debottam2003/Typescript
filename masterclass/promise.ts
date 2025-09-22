let data1: Promise<string> = Promise.resolve("string data"); //? returns a promise object immediately
//? and promises to return a string when it is resolved.
console.log(data1);
let data2: string = await Promise.resolve("string data"); //? waits untill the promise resolves and then
//? returns a string
console.log(data2);
let response: Promise<Response> = fetch("https://google.com");
let responseData = await response;
console.log(responseData);
let data: Promise<string> = responseData.text();
let d: string = await data;
console.log(d.slice(0, 100) + "...");
