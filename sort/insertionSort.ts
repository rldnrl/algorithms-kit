function insertionSort(arr: Array<number>) {
  for (let index = 1; index < arr.length; index++) {
    const temp = arr[index]
    let prevIndex = index - 1
    while (prevIndex >= 0 && arr[prevIndex] > temp) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex--
    }
    arr[prevIndex + 1] = temp
  }
  return arr
}

export default insertionSort