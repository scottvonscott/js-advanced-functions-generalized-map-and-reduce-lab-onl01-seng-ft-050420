// Add your functions here

function map(array, func) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        let ele = array[i]
        arr.push(func(ele))
    }
    return arr
}

function reduce(arr, func, startingPoint) {
    let r = (!!startingPoint) ? startingPoint : arr[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i < arr.length; i++) {
        r = func(arr[i], r)
    }
    return r
}