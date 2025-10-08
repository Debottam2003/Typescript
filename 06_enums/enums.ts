enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
};

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
};

enum Response {
    Yes = "YES",
    No = "NO",
    Maybe = "MAYBE"
};

enum CircuitState {
    On,
    Off
};

console.log(Status.Active); // Output: ACTIVE
console.log(Status.Inactive); // Output: INACTIVE
console.log(Status.Pending); // Output: PENDING

console.log(Direction.Up); // Output: UP
console.log(Direction.Down); // Output: DOWN
console.log(Direction.Left); // Output: LEFT
console.log(Direction.Right); // Output: RIGHT

console.log(Response.Yes); // Output: YES
console.log(Response.No); // Output: NO
console.log(Response.Maybe); // Output: MAYBE

console.log(CircuitState.On); // Output: 0  
console.log(CircuitState.Off); // Output: 1
