const euclideanGCD = (first: number, second: number) => {
  if (second === 0) return first
  return euclideanGCD(second, first % second)
}