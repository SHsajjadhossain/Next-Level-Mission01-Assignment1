# Type Narrowing in TypeScript

## Introduction

TypeScript allows a variable to hold more than one type by using a union type. For example, a value may be a string or a number. Before using that value, we need to check which type it has. This process is called type narrowing. It helps us write code that is safer and easier to understand.

## Detailed Explanation

One common way to narrow a type is with the `typeof` operator. It is useful for basic types such as strings, numbers, and booleans.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}
```

Inside the first condition, TypeScript knows that `value` is a string. In the other branch, it knows that the value is a number.

We can use `instanceof` to check whether an object belongs to a class. For example:

```ts
class User {
  login() {
    return "User logged in";
  }
}

function checkAccount(account: User | Date) {
  if (account instanceof User) {
    return account.login();
  }

  return account.toDateString();
}
```

The `in` operator checks whether a property exists in an object. It is helpful when working with different object shapes.

```ts
type Admin = { name: string; permissions: string[] };
type Customer = { name: string; address: string };

function showInfo(person: Admin | Customer) {
  if ("permissions" in person) {
    return person.permissions;
  }

  return person.address;
}
```

## Conclusion

Type narrowing helps TypeScript understand which type is being used in each part of a program. I can use `typeof`, `instanceof`, and `in` to check values before accessing their properties or methods. This reduces type errors and makes code more reliable.
