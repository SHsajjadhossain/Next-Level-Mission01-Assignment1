# Generics and Promises in TypeScript

## Introduction

Generics are a useful feature in TypeScript. They allow us to write functions and classes that can work with different data types without using `any`. Instead of writing a separate function for every type, we can write one reusable function. Generics are also useful when working with asynchronous data through `Promise<T>`.

## Detailed Explanation

A generic function uses a type parameter, often named `T`. TypeScript can understand the type from the value passed to the function.

```ts
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = getFirstItem(["Rakib", "Sadia"]);
const firstNumber = getFirstItem([10, 20, 30]);
```

In the first call, TypeScript understands that `T` is a string. In the second call, `T` is a number. The same function can therefore be used with both arrays while keeping type information.

A Promise represents a value that may become available later. We can write `Promise<T>` to describe the type of value that the Promise will provide when it is successful.

```ts
function getUserName(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rakib");
    }, 1000);
  });
}

async function showUser() {
  const name = await getUserName();
  console.log(name);
}
```

Here, `Promise<string>` means that the successful result will be a string. When we use `await`, TypeScript knows that `name` is a string. This gives us useful type checking when handling asynchronous results.

## Conclusion

Generics help make code reusable while keeping its types clear. `Promise<T>` uses the same idea to describe the result of an asynchronous operation. Learning these features makes it easier to write flexible and type-safe TypeScript code.
