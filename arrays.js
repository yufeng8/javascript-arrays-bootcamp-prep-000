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

function accessElementInArray(A, n) {
  return A[n]
}

function destructivelyRemoveElementFromBeginningOfArray(A) {
  return A.shift()
}

function removeElementFromBeginningOfArray(A) {
  return A.slice(0)
}

function destructivelyRemoveElementFromEndOfArray(A) {
  return A.pop()
}

function removeElementFromEndOfArray(A) {
  return A.slice(0, A.length()-1)
}
