import { randomInt } from "chatujs";
const { log: print } = console;
print(randomInt(1, 100));

function identity<T>(value: T): T {
    return value;
}

let str = identity<string>("hello"); // type is string
let num = identity(42); // type inferred as number
print(str);
print(num);

class DataStore<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    getAll(): T[] {
        return this.data;
    }
}

const stringStore = new DataStore<string>();
stringStore.add("apple");

const numberStore = new DataStore<number>();
numberStore.add(10);

print(numberStore.getAll());
