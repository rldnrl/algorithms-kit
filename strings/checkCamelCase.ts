const checkCamelCase = (str: string) => {
  const re = /^[a-z][A-Za-z]*$/
  return re.test(str)
}