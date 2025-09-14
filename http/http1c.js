function printURLParts(urlString) {
    const urlObj = new URL(urlString);
    // console.log(urlObj);
    console.log("protocol:", urlObj.protocol);
    console.log("username:", urlObj.username);
    console.log("password:", urlObj.password);
    console.log("hostname: ", urlObj.hostname);
    console.log("port:", urlObj.port);
    console.log("pathname:", urlObj.pathname);
    console.log("search:", urlObj.search);
    console.log("hash:", urlObj.hash);
}

const jelloURL =
    "http://waynelagner:pwn3d@jello.app:8080/boards?sort=createdAt#id";
printURLParts(jelloURL);
