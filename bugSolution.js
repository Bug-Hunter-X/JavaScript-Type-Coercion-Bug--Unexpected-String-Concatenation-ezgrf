function foo(a,b){if(typeof a === 'number' && typeof b === 'number'){return a+b;}else{console.error("Both inputs must be numbers");return null;}}console.log(foo(2,3));//This will return 5console.log(foo(2,"3"));//This will return an error message because the function now explicitly checks the data type before performing addition.