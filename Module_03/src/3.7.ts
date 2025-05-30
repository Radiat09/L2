{
  //* Static in OOP TS

  class Counter {
    // count: number = 0;
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  // console.log(instance1.increment());
  console.log(Counter.increment());

  const instance2 = new Counter();
  // console.log(instance2.increment());
  console.log(Counter.increment());
}
