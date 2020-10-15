import {
    isPermutation,
    isUnique,
    isUniqueSpace,
    urlify,
    isPalinPerm,
    oneEdit,
    stringCompression, rotateMatrix, zeroMatrix, isStringRotation
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
    expect(stringCompression('abbcccdddd')).toBe('a1b2c3d4')
    expect(stringCompression('abc')).toBe('abc')
})

test('rotates matrix', () => {
    expect(rotateMatrix([[1, 2], [3, 4]])).toStrictEqual([[2, 4], [1, 3]])
    expect(rotateMatrix(    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ])).toStrictEqual(    [
        [4, 8, 12, 16],
        [3, 7, 11, 15],
        [2, 6, 10, 14],
        [1, 5, 9, 13]
    ])
})

test('zeroes matrix', () => {
    expect(zeroMatrix([[0, 2], [3, 4]])).toStrictEqual([[0, 0], [0, 4]])
    expect(zeroMatrix(    [
        [1, 2, 0, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ])).toStrictEqual(    [
        [0, 0, 0, 0],
        [5, 6, 0, 8],
        [9, 10, 0, 12],
        [13, 14, 0, 16]
    ])
})

test('isStringRot', () => {
    expect(isStringRotation('aaabcd', 'bcdaaa')).toBeTruthy()
    expect(isStringRotation('aaabcd', 'bcdaaas')).toBeFalsy()
})