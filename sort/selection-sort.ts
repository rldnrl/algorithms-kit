function selectionSort(arr: Array<number>) {
  let indexMin, temp

  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i
    for (let j = i; i < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j
      }
    }
    temp = arr[indexMin]
    arr[indexMin] = arr[i]
    arr[i] = temp
  }

  return arr
}

export default selectionSort
