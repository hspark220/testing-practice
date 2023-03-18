function average(array) {
    if (array.length == 0) return 'no avg'
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    result = result/array.length;
    return result;
}

function min(array) {
    if (array.length == 0) return 'no min'
    let result;
    result = array[0];
    for (let i = 0; i < array.length; i ++) {
        result = result < array[i] ? result : array[i];
    }
    return result;
}

function max(array) {
    if (array.length == 0) return 'no max'
    let result;
    result = array[0];
    for (let i = 0; i < array.length; i ++) {
        result = result > array[i] ? result : array[i];
    }
    return result;
}

function length(array) {
    return array.length;
}

function analyzeArray(array) {
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array)
    }
}

module.exports = analyzeArray;