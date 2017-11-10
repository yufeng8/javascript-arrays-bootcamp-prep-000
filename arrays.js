var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(A, N) {
  return [N, ...A]
}

function destructivelyAddElementToBeginningOfArray(A,N) {
   A.unshift(N)
   return A
}

function addElementToEndOfArray(A, N) {
  return [...A, N]
}

function destructivelyAddElementToEndOfArray(A, N) {
  return A.push(N)
}

function accessElementInArray(A, n) {
  return A[n]
}

function destructivelyRemoveElementFromBeginningOfArray(A) {
  return A.shift()
}

function removeElementFromBeginningOfArray(A) {
  A.slice(0)
  return A
}

function destructivelyRemoveElementFromEndOfArray(A) {
  return A.pop()
}

function removeElementFromEndOfArray(A) {
  return A.slice(0, A.length()-1)
}*/
