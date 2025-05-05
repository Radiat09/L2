{
  //* abstaction : 1.interface 2.abstract

  // Idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stoping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }

  const toyota = new Car1();
  //   toyota.startEngine();

  //* abstract class
  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  // real implementation
  class Toyota extends Car2 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stoping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }

  const honda = new Toyota();
  honda.startEngine();
}
