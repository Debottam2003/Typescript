console.log("Hello via Bun!");

function users() {
  console.log("this is /users route handler");
}

let middlewareStack: { [key: string]: () => void } = {
  "/users": users,
  "/login": () => {
    console.log("this is /login route handler");
  },
};

middlewareStack["/users"]!();

console.log(middlewareStack);

function add(pathname: string, func: () => void) {
  middlewareStack[pathname] = func;
}

add("/profile", () => {
  console.log("this is the /profile route handler");
});

console.log(middlewareStack);
