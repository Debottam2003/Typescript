interface Users {
    name: string,
    age: number
};

// Fetch returns a Promise<Response>, because when the Promise resolves it returns a Response object
let promise: Promise<Response> = fetch("http://google.com");
let response: Response = await promise;
// response.text() returns a Promise<string>, because when the Promise resolves it returns a string
let resData: Promise<string> = response.text();
let data: string = await resData;
console.log(data.length);
console.log(data.slice(0, 100));