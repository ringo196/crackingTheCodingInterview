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

export const stringCompression = str => {
    const arr = []
    let prevChar = str[0]
    let count = 1

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === prevChar) {
            count++
        } else {
            arr.push(`${prevChar}${count}`)
            prevChar = str[i]
            count = 1
        }
    }

    const compressed = arr.join('')

    return compressed.length < str.length ? compressed : str
}

export const rotateMatrix = matrix => {
    let n = matrix.length
    let rotations = n / 2
    for (let c = 0; c < rotations; c++) {
        for (let i = c; i < n - 1 - c; i++) {
            let nw = matrix[c][i]
            let ne = matrix[i][n - 1 - c]
            let se = matrix[n - 1 - c][n - 1 - i]
            let sw = matrix[n - 1 - i][c]

            matrix[c][i] = ne
            matrix[i][n - 1 - c] = se
            matrix[n - 1 - c][n - 1 - i] = sw
            matrix[n - 1 - i][c] = nw
        }
    }
    return matrix
}

export const zeroMatrix = matrix => {
    const zeroRowsSet = new Set()
    const zeroColumnsSet = new Set()

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                zeroRowsSet.add(r)
                zeroColumnsSet.add(c)
            }
        }
    }

    const zeroRows = Array.from(zeroRowsSet)
    const zeroColumns = Array.from(zeroColumnsSet)

    for (let row of zeroRows) {
        for (let matrixColumn = 0; matrixColumn < matrix[row].length; matrixColumn++){
            matrix[row][matrixColumn] = 0
        }
    }
    for (let col of zeroColumns) {
        for (let matrixRow = 0; matrixRow < matrix.length; matrixRow++){
            matrix[matrixRow][col] = 0
        }
    }

    return matrix
}

export const isStringRotation = (str1, str2) => {
    const doubleStr1 = str1 + str1
    return doubleStr1.includes(str2)
}


