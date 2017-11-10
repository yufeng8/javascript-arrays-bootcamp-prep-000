chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(A, N) {
  return A.unshift(N)
}

function destructivelyAddElementToBeginningOfArray(A,N) {
  return  [N, ...A]
}