firstName = "John";
age = 35;
hobby = "Coding";

function logTwice(parameter) {
  console.log(parameter);
  console.log(parameter);
}

function hobby_func() {
  new_string = `Hello, ${firstName} (${age}). I love ${hobby}!`;
  logTwice(new_string);
}

hobby_func();
