import {
    isPermutation,
    isUnique,
    isUniqueSpace,
    urlify,
    isPalinPerm, oneEdit
} from './ch01-arrays'
import { expect } from "@jest/globals";

test('checks if string is unique', () => {
    expect(isUnique('abcde')).toBe(true)
    expect(isUnique('abcdea')).toBe(false)

    expect(isUniqueSpace('abcde')).toBe(true)
    expect(isUniqueSpace('abcdea')).toBe(false)
})

test('checks if two strings are a permutation of each other', () => {
    expect(isPermutation('abc', 'acb').toBeTruthy)
    expect(isPermutation('abc', 'acbd').toBeFalsy)
})

test('changes spaces to "%20" in a string', () => {
    expect(urlify('mr john smith   ')).toBe("mr%20john%20smith")
})


test('checks if string is a palindrome permutation', () => {
    expect(isPalinPerm('taco act')).toBeTruthy()
})

test('checks if string is has one edit max', () => {
    expect(oneEdit('pale', 'ple')).toBeTruthy()
    expect(oneEdit('pale', 'pales')).toBeTruthy()
    expect(oneEdit('apple', 'aple')).toBeTruthy()
    expect(oneEdit('pale', 'bale')).toBeTruthy()
    expect(oneEdit('pale', 'bake')).toBeFalsy()
})

test('checks if string is compressed', () => {

})
