export function RandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function Range(start: number, count: number) {
  const arr = [] as any[]
  for (var z = 0; z < count; z++) {
    arr.push(start + z)
  }
  return arr
}
