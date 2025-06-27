function Α(next) {
  return function (input) {
    //Το toUpperCase() ειναι ενα method που υπάρχει στην JS και κανει κεφαλαία τα γράμματα.
    next(input.toUpperCase());
  };
}

function print(input) {
  console.log(input)
}

const upperCased = Α(print);

upperCased("Hello")



// ------------------------------
//Proxy
const target = {
  message: "Yoo from proxy",
};

const handler = {
  get: function (target, property) {
    if (property in target) console.log(target[property]);
  },
  set(target, property, value) {
    if (typeof value === "number") {
      target[property] = value;
    } else {
      throw new TypeError(`Value ${value} is not a number`);
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.message = '3'
console.log(proxy.message);
