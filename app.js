
function add (data) {
  let sum = 0;
  let counter = 0
  for (let element of data) {
    counter++
    sum = element + sum
  } 
  return sum
}

const result = add([1, 2, 3, 4, 5])
