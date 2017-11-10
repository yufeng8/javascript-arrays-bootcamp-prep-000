chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(A, N) {
  return [N, ...A]
}

function destructivelyAddElementToBeginningOfArray(A,N) {
  return  A.unshift(N)
}

function addElementToEndOfArray(A, N) {
  return A.[...A, N]
}

function destructivelyAddElementToEndOfArray(A, N) {
  return A.push(N)
}
