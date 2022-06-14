import { regUserName, regPassword, regPhoneNumber, regRealName } from '../src/reg'

describe('reg_userName', () => {
  test('asd123 => true', () => {
    expect(regUserName('asd123')).toBeTruthy()
  })
  test('asd1234,8,17 => true', () => {
    expect(regUserName('asd1234', 8, 17)).toBeFalsy()
  })
  test('asd123asd123asd123,8,17 => true', () => {
    expect(regUserName('asd123asd123asd123', 8, 17)).toBeFalsy()
  })
  test('asd123 => true', () => {
    expect(regUserName('asd123')).toBeTruthy()
  })
  test('123123 => true', () => {
    expect(regUserName('123123')).toBeTruthy()
  })
  test('asdasd => true', () => {
    expect(regUserName('asdasd')).toBeTruthy()
  })
  test('asd12 => false', () => {
    expect(regUserName('asd12')).toBeFalsy()
  })
  test('asd12/ => false', () => {
    expect(regUserName('asd12/')).toBeFalsy()
  })
  test('asd12345678912345 => false', () => {
    expect(regUserName('asd12345678912345')).toBeFalsy()
  })
})

describe('reg_password', () => {
  test('asd123 => true', () => {
    expect(regPassword('asd123')).toBeTruthy()
  })
  test('123123 => true', () => {
    expect(regPassword('123123')).toBeTruthy()
  })
  test('asdasd => true', () => {
    expect(regPassword('asdasd')).toBeTruthy()
  })
  test('asdasd/_.. => true', () => {
    expect(regPassword('asdasd/_..')).toBeTruthy()
  })
  test('[]\\/12 => true', () => {
    expect(regPassword('asdasd/_..')).toBeTruthy()
  })
  test('asd12/￥ => false', () => {
    expect(regPassword('asd12/￥')).toBeFalsy()
  })
})

describe('reg_phoneNumber', () => {
  test('028-8235639 => true', () => {
    expect(regPhoneNumber('028-8235639')).toBeTruthy()
  })
  test('028-82356399 => true', () => {
    expect(regPhoneNumber('028-82356399')).toBeTruthy()
  })
  test('0832-8235639 => true', () => {
    expect(regPhoneNumber('0832-8235639')).toBeTruthy()
  })
  test('18030382011 => true', () => {
    expect(regPhoneNumber('18030382011')).toBeTruthy()
  })
  test('12030382011 => false', () => {
    expect(regPhoneNumber('12030382011')).toBeFalsy()
  })
  test('180303820111 => false', () => {
    expect(regPhoneNumber('180303820111')).toBeFalsy()
  })
})

describe('reg_regRealName', () => {
  test('悟空 => true', () => {
    expect(regRealName('悟空')).toBeTruthy()
  })
  test('花果山水帘洞美猴王齐天大圣孙悟空 => true', () => {
    expect(regRealName('花果山水帘洞美猴王齐天大圣孙悟空')).toBeTruthy()
  })
  test('wukong => true', () => {
    expect(regRealName('wukong')).toBeTruthy()
  })
  test('悟K => false', () => {
    expect(regRealName('悟K')).toBeFalsy()
  })
})
