import { memo } from "react";
import ReactConcepts from "./ReactConcepts";

const Dashboard = () => {
  // Things to do
  // Var vs let vs const        old var variable is irregular    let value can be changed but cannnot be redefined    const value is constant cannot be changed
  // Scope and hoisting        scope= types of scope global scope, Local scope, nested scope(kind of closures), block scope.
  //                           hoisting is declared at the bottom but is moved to the top Eg; var , functions are also hoisted, import are also hoisted

  // Functions definition types
  // Type Conversion/Coercion    conversion-- done deliberately where as coercion done atomatically during compiling
  // Type casting types
  // == vs ===
  // Loops: for-in and for-of
  // Lexical scoping
  // Object mutations    // when we assign value of 1 obj to another obj it takes it reference value so if we change obj2 it will change obj1 as well
  // memoization
  // promise/async-await/callbacks
  // debugging

  /* Best practices 
1. keep the scope as local as possible 
2. Use closures to protect data

    function encapsulateData(){
    const user = {
        name: 'Chidera',
        age: 23
    }
    return updateUserAge(){
        return data.age++;
    }
}

const updateHandler = encapsulateData();
const updatedAge = updateHandler(); // 24
console.log(user); // undefined

3. Always use let and const to create variables




what is memory leaks 
Memory leaks occur when data or objects no longer needed and is not been released form the memory consuming 
the resources eventually crashes or slow down the applicaition because programs failed to allocate the memory






*/
  const handlelclickforMemoization = () => {
    // Memoization function
    const memo = (fn) => {
      const cache = {};
      return (n) => {
        if (cache[n]) {
          return cache[n];
        }
        const result = fn(n);
        cache[n] = result;
        return result;
      };
    };

    // Factorial function
    const factorial = (n) => {
      if (n === 0) return 1;
      console.log(n);
      return n * factorial(n - 1);
    };

    const memoizedFactorial = memo(factorial);

    console.log(memoizedFactorial(5)); // Computes
    console.log(memoizedFactorial(5)); // Fetches from cache
  };

  const handlelclickforLoops = () => {
    const data = [1, 2, 3, 4, 5];
    const objData = { a: 1, b: 2, c: 3, d: 4 };
    console.log("for of ");
    for (const i of data) {
      console.log(i, " ");
    }

    console.log("for in");

    for (const property in objData) {
      console.log(`${property} : ${objData[property]}`);
    }
  };

  const handlelclickClosure = () => {
    function encapsulateData() {
      const user = {
        name: "Chidera",
        age: 23,
      };

      return function updateUserAge() {
        user.age++; // Increment the age of user
        return user.age; // Return the updated age
      };
    }

    const updateHandler = encapsulateData();
    const updatedAge = updateHandler(); // 24
    console.log(updateHandler());
  };

  const handleClickType = () => {
    var x = "3";
    var y = 3;
    console.log("x=", x, "y = ", y);
    console.log("Type Coercion = ", x + y);
    console.log("Type Converson = ", Number(x) + y);

    console.log("using ==  ", x == y);
    console.log("using ===  ", x === y);

    const person1 = { name: "gagan" };
    const person2 = person1;
    console.log("before :");
    console.log(person1.name);
    console.log(person2.name);

    person2.name = "Shiv";
    console.log("after :");
    console.log(person1.name);
    console.log(person2.name);

    console.log("How to avoid it we use assign operator");

    const person3 = { name: "Aman" };
    const person4 = Object.assign({}, person3);

    console.log("after using assign :");
    person4.name = "Naman";
    console.log(person3.name);
    console.log(person4.name);
  };

  return (
    <div className="h-full ">
      {/* Heading */}
      <div className="text-6xl">Javascript Concepts</div>
      {/* Content */}
      <div className="flex flex-col gap-10">
        <div>
          <div className="mt-10">
            <div>
              Type conversion and diff btw == and === Also object mutation
            </div>
            <button
              onClick={handleClickType}
              className="bg-blue-600 rounded-md py-2 px-4 hover:opacity-90 active:opacity-70"
            >
              onCLick!
            </button>
          </div>
        </div>

        <div>
          <div>Use of closures</div>
          <button
            onClick={handlelclickClosure}
            className="bg-blue-600 rounded-md py-2 px-4 hover:opacity-90 active:opacity-70"
          >
            onCLick!
          </button>
        </div>

        <div>
          <div>for in and for off</div>
          <button
            onClick={handlelclickforLoops}
            className="bg-blue-600 rounded-md py-2 px-4 hover:opacity-90 active:opacity-70"
          >
            onCLick!
          </button>
        </div>
        <div>
          <div>memoization</div>
          <button
            onClick={handlelclickforMemoization}
            className="bg-blue-600 rounded-md py-2 px-4 hover:opacity-90 active:opacity-70"
          >
            onCLick!
          </button>
        </div>

        <div>
          <ReactConcepts />
          <div id="reactRoot"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
