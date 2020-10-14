export const isUnique = (str) => {
    let dict = {}

    for (const char of str) {
        if (!dict[char]) {
            dict[char] = true
        } else {
            return false
        }
    }

    return true
}

export const isUniqueSpace = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

export const isPermutation = (str1, str2) => {
    const dict1 = {}
    const dict2 = {}
    if (str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i]
        let char2 = str2[i]
        if (!dict1[char1]) {
            dict1[char1] = 1
        } else {
            dict1[char1] = dict1[char1]++
        }

        if (!dict2[char2]) {
            dict2[char2] = 1
        } else {
            dict2[char2] = dict2[char2]++
        }
    }

    let keys1 = Object.keys(dict1)
    let keys2 = Object.keys(dict2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        if (dict1[key] !== dict2[key]) {
            return false
        }
    }

    return true
}

export const urlify = string => {
    const trimmed = string.trim()
    const arr = []
    for (const char of trimmed) {
        if (char === ' ') {
            arr.push ('%20')
        } else {
            arr.push(char)
        }
    }
    return arr.join('')
}

export const isPalinPerm = string => {
    const dict = {}

    for (const char of string) {
        if (char !== ' ') {
            if (dict[char]) {
                delete dict[char]
            } else {
                dict[char] = true
            }
        }
    }

    return !(Object.keys(dict).length > 1)
}

export const oneEdit = (str1, str2) => {
    let changes = 0
    let short = str1
    let long = str2

    if (str1.length > str2.length) {
        short = str2
        long = str1
    }

    if (str1.length === str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                changes++
                if (changes > 1) {
                    return false
                }
            }
        }
    } else {
        if (long.length - short.length > 1) {
            return false
        }

        let longIndex = 0
        for (let i = 0; i < short.length; i++) {
            if (short[i] !== long[longIndex]){
                changes++
                i--
            }
            longIndex++
            if (changes > 1) {
                return false
            }
        }

    }

    return true
}

// export const stringCompression = str => {
//     const arr = []
//     const
// }
