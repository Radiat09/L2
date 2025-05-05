{
  // Inharitence in OOP

  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHrs: number) {
      console.log(`${this.name} sleeps for ${numOfHrs} a day`);
    }
  }

  class Student extends Person {
    // name: string;
    // age: number;
    // address: string;

    constructor(name: string, age: number, address: string) {
      //   this.name = name;
      //   this.age = age;
      //   this.address = address;
      super(name, age, address);
    }

    // getSleep(numOfHrs: number) {
    //   console.log(`${this.name} sleeps for ${numOfHrs} a day`);
    // }
  }

  const student = new Student("M. X", 22, "Dhaka");

  // Teacher Class

  class Teacher extends Person {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      //   this.name = name;
      //   this.age = age;
      //   this.address = address;
      super(name, age, address);
      this.designation = designation;
    }

    // getSleep(numOfHrs: number) {
    //   console.log(`${this.name} sleeps for ${numOfHrs} a day`);
    // }

    takeClass(numOfClass: number) {
      console.log(`${this.name} wil take ${numOfClass} classes a day`);
    }
  }

  const teacher = new Teacher("Mr.Y", 40, "Rangpur", "Principle");
}
