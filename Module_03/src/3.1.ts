{
  // OOP - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //   Parameter propertise
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} sounds like ${this.sound}`);
    }
  }

  const dog = new Animal("Who let the dog's out", "dog", "who who");

  const cat = new Animal("Billi ki AKh", "cat", "meaw meaw");

  cat.makeSound();
}
