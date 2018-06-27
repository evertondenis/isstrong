import {
  passwordLength,
  passwordNumber,
  passwordCapitalLetter,
  passwordSpecial,
  statusInput } from '../utils'
import 'setupTest'

describe('Password lenght', () => {
  it('passwordLength({}) should return "empty"', () => {
    const data = {}
    const expected = 'empty'
    expect(passwordLength(data)).toEqual(expected)
  })

  it('passwordLength({current: { value: "pass"}}) should return "invalid"', () => {
    const data = {current: { value: "pass"}}
    const expected = 'invalid'
    expect(passwordLength(data)).toEqual(expected)
  })

  it('passwordLength({current: { value: "password"}}) should return "valid"', () => {
    const data = {current: { value: "password"}}
    const expected = 'valid'
    expect(passwordLength(data)).toEqual(expected)
  })

  it('passwordLength({current: { value: "pa"}}, 3) should return "invalid"', () => {
    const min = 3
    const data = {current: { value: "pa"}}
    const expected = 'invalid'
    expect(passwordLength(data, min)).toEqual(expected)
  })

  it('passwordLength({current: { value: "pas"}}, 3) should return "valid"', () => {
    const min = 3
    const data = {current: { value: "pas"}}
    const expected = 'valid'
    expect(passwordLength(data, min)).toEqual(expected)
  })

  it('passwordLength({current: { value: "passworddd"}}, 6, 8) should return "invalid"', () => {
    const min = 6
    const max = 8
    const data = {current: { value: "passworddd"}}
    const expected = 'invalid'
    expect(passwordLength(data, min, max)).toEqual(expected)
  })

  it('passwordLength({current: { value: "password"}}, 6, 8) should return "valid"', () => {
    const min = 6
    const max = 8
    const data = {current: { value: "password"}}
    const expected = 'valid'
    expect(passwordLength(data, min, max)).toEqual(expected)
  })
})

describe('Password has number', () => {
  it('passwordNumber() should return "empty"', () => {
    const data = {}
    const expected = 'empty'
    expect(passwordNumber(data)).toEqual(expected)
  })

  it('passwordNumber({current: { value: "pass"}}) should return "invalid"', () => {
    const data = {current: { value: "pass"}}
    const expected = 'invalid'
    expect(passwordNumber(data)).toEqual(expected)
  })

  it('passwordNumber({current: { value: "6"}}) should return "valid"', () => {
    const data = {current: { value: "6"}}
    const expected = 'valid'
    expect(passwordNumber(data)).toEqual(expected)
  })

  it('passwordNumber({current: { value: "passw0rd"}}) should return "valid"', () => {
    const data = {current: { value: "passw0rd"}}
    const expected = 'valid'
    expect(passwordNumber(data)).toEqual(expected)
  })
})

describe('Password has capital letter', () => {
  it('passwordCapitalLetter() should return "empty"', () => {
    const data = {}
    const expected = 'empty'
    expect(passwordCapitalLetter(data)).toEqual(expected)
  })

  it('passwordCapitalLetter({current: { value: "password"}}) should return "invalid"', () => {
    const data = {current: { value: "password"}}
    const expected = 'invalid'
    expect(passwordCapitalLetter(data)).toEqual(expected)
  })

  it('passwordCapitalLetter({current: { value: "Password"}}) should return "valid"', () => {
    const data = {current: { value: "Password"}}
    const expected = 'valid'
    expect(passwordCapitalLetter(data)).toEqual(expected)
  })
})

describe('Password has special character', () => {
  it('passwordSpecial() should return "empty"', () => {
    const data = {}
    const expected = 'empty'
    expect(passwordSpecial(data)).toEqual(expected)
  })

  it('passwordSpecial({current: { value: "password"}}) should return "invalid"', () => {
    const data = {current: { value: "password"}}
    const expected = 'invalid'
    expect(passwordSpecial(data)).toEqual(expected)
  })

  it('passwordSpecial({current: { value: "p@ssword"}}) should return "valid"', () => {
    const data = {current: { value: "p@ssword"}}
    const expected = 'valid'
    expect(passwordSpecial(data)).toEqual(expected)
  })
})

describe('Password stage step', () => {
  it('password stage 0 should be isEmpty', () => {
    const data = undefined
    const expected = 'isEmpty'
    expect(statusInput(data)).toEqual(expected)
  })

  it('password stage 0 should be isEmpty', () => {
    const data = { pwdLength: "", pwdCapital: "", pwdNumber: "" }
    const expected = 'isEmpty'
    expect(statusInput(data)).toEqual(expected)
  })

  it('password stage 1 should be isWeak', () => {
    const data = { pwdLength: "valid", pwdCapital: "", pwdNumber: "" }
    const expected = 'isWeak'
    expect(statusInput(data)).toEqual(expected)
  })

  it('password stage 2 should be isMedium', () => {
    const data = { pwdLength: "valid", pwdCapital: "valid", pwdNumber: "" }
    const expected = 'isMedium'
    expect(statusInput(data)).toEqual(expected)
  })

  it('password stage 3 should be isStrong', () => {
    const data = { pwdLength: "valid", pwdCapital: "valid", pwdNumber: "valid" }
    const expected = 'isStrong'
    expect(statusInput(data)).toEqual(expected)
  })
})
