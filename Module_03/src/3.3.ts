{
  //type guards
  // typeof --> type guard

  type Alphanumaric = string | number;

  const add = (param1: Alphanumaric, param2: Alphanumaric): Alphanumaric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  //in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser): void => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and I am an ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Normal",
  };
  const adminUser: AdminUser = {
    name: "Admin",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
