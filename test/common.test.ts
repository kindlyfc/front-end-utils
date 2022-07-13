import { randomString } from '../src/common'

describe('测试randomString方法', () => {
  test('6位 => mach', () => {
    expect(randomString(6)).toMatch(/^[0-9A-Za-z]{6}$/)
  })
  test('255位 => mach', () => {
    expect(randomString(255)).toMatch(/^[0-9A-Za-z]{255}$/)
  })
})
