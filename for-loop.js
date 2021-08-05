// Write a function addTo() that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

function addTo(num) {
    let counter = 0; // initial start value for the loop  
    //  for loop structure- loop starting index, condition, increment
    for (let i = 0; i <= num; i++) {
      counter += i; // i is then added to counter each time the loop passes, thus adding the values together
    }
      return counter;
    }

console.log(addTo(5))


let comments = ["nice hat.", "hello.", "how are you?"]

for (var i = 0; i < comments.length; i++) {
  console.log("Comment: " + comments[i]);
}
