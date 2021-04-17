function checkValid(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (result[i] = '(') {
            result.push(i)
        }

    }
    for (let i = 0; i < str.length; i++) {
        if (result[i] = ')') {
            result.pop(i)
        }

    }
    if (result.length == 0) {
        return 'valid'
    } else {
        return 'Invalid'
    }
}

let str = '(())';
checkValid(str)