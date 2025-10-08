let promise = fetch("http://google.com");
let response = await promise;
let data = await response.text();
console.log(data);