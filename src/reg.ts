/**
 * 验证用户名：字母/数字
 * @param  {string} value 需要验证得字符串
 * @param  {number} max 最大位数
 * @param  {number} min 最小位数
 * @returns {boolean}
 */
export function regUserName(value: string, min = 6, max = 16): boolean {
  const reg = new RegExp(`^[A-Za-z0-9]{${min},${max}}$`)
  return reg.test(value)
}

/**
 * 验证密码：数字/字母/英文符号
 * @param  {string} value 需要验证得字符串
 * @param  {number} max 最大位数
 * @param  {number} min 最小位数
 * @returns {boolean}
 */
export function regPassword(value: string, min = 6, max = 16): boolean {
  // eslint-disable-next-line no-useless-escape
  const reg = new RegExp(`^[\x21-\x7E]{${min},${max}}$`)
  return reg.test(value)
}

/**
 * 验证电话号码：支持验证座机或手机
 * @param  {string} value 需要验证得字符串
 * @returns {boolean}
 */
export function regPhoneNumber(value: string): boolean {
  return /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/.test(value)
}

/**
 * 验证真实姓名：2-16位中文或英文名
 * @param  {string} value 需要验证得字符串
 * @param  {number} max 最大位数
 * @param  {number} min 最小位数
 * @returns {boolean}
 */
export function regRealName(value: string, min = 2, max = 16): boolean {
  const reg = new RegExp(`^([\u4e00-\u9fa5]{${min},${max}}|[A-Za-z]{${min},${max}})$`)
  return reg.test(value)
}
