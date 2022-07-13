export function randomString(length: Number): string {
  const str = '1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'
  let result = ''
  for (let i = 0; i < length; i += 1) {
    result += str[Math.floor(Math.random() * str.length)]
  }
  return result
}

export function randomString1(length = 6): string {
  const str = '1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'
  let result = ''
  for (let i = 0; i < length; i += 1) {
    result += str[Math.floor(Math.random() * str.length)]
  }
  return result
}
