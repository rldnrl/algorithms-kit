const binarySearch = (arr: unknown[], low = 0, high = arr.length - 1, searchValue) => {
  if (high >= low) {
    const middle = low + Math.floor((high - low) / 2)

    if (arr[middle] === searchValue) return middle

    if (arr[middle] > searchValue) {
      return binarySearch(arr, low, middle - 1, searchValue)
    }

    return binarySearch(arr, middle + 1, high, searchValue)
  }

  return -1
}
