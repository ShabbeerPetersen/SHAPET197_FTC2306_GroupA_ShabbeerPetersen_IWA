function add(a, b) {
  sum = a + b;
  return sum;
}
function multiply(a, b) {
  sum = a * b;
  return sum;
}

// Taken on as a value by 'calculate' below
function internal() {
  const added = add(this.internal.a, this.internal.b);
  const multiplied = multiply(this.internal.c, added);
  console.log(multiplied);
}

// Not allowed to change code below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
