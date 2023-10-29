// Function Statement aka function declaration
function pandit() {
  console.log("Hello Pandit");
}

// function expression
var b = function () {
  console.log("hello js");
};
pandit();
b();

// aNONYMUS FUNCTION
let pan = function () {
  console.log("hi");
};

// nAMED FUNCTION EXPRESSION

// diffrence between parameter and arguments
function arg(parameter) {
  console.log(parameter);
}
arg("argument");

// First Class Functions
const firstClass = function () {
  return function () {
    console.log("hello");
  };
};
firstClass(function xyz() {
  console.log("hi");
});

// Arrow Functions ECMA Script 2015

const arrow = () => {};
