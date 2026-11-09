function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    if (input === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}

function formatCoordinate(coord: readonly [number, number, string]): string {
  const latitude: number = coord[0];
  const longitude: number = coord[1];
  const locationName: string = coord[2];
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combinedArray: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const currentArray: T[] = arrays[i];
    for (let j = 0; j < currentArray.length; j++) {
      combinedArray.push(currentArray[j]);
    }
  }
    return combinedArray;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popularCourses: Course[] = [];
  for (let i = 0; i < courses.length; i++) {
    const course: Course = courses[i];
    if (course.isPublished === true && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    values.push(items[i][key]);
  }
  return values;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}