console.log("Hello via Bun!");

function users() {
  console.log("this is /users route");
}

let middlewareStack = {
  "/users": users,
  "/login": () => {
    console.log("this is /login route");
  },
};

middlewareStack["/users"]();
