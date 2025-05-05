{
  // * Polymorphisom

  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 7 hours a day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours a day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //   getSleepingHours(person1);
  //   getSleepingHours(person2);
  //   getSleepingHours(person3);

  //* Different Example

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //* Math.PI * this.radias
  class Circle extends Shape {
    radias: number;

    constructor(radias: number) {
      super();
      this.radias = radias;
    }

    getArea(): number {
      return Math.PI * this.radias;
    }
  }

  //* height * width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getLog = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(8, 9);

  getLog(shape1);
  getLog(shape2);
  getLog(shape3);
}
