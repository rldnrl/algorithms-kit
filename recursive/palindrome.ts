const palindrome = (str: string) => {
  if (str.length <= 1) {
    return true
  }

  if (str[0] !== str[str.length - 1]) {
    return false
  } else {
    return palindrome(str.slice(1, str.length - 1))
  }
}