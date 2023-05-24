//fibonacci
function fibs(num) {
    let sum = 0;
    let results = [0, 1];
    if (num === 1) {
        return results.slice(0, 1);
    } else {
        for (let i = 0; i < num; i++) {
            let currentNumber = results[i];
            sum = currentNumber + results[i + 1];
            results.push(sum);
        }
        return results.slice(0, num);
    }
}

function fibsRec(num, results = [0, 1]) {
    if (num <= 2) {
        return results;
    }   
        results.push(results[results.length - 2] + results[results.length - 1]);
        return fibsRec(num - 1, results);
}
//mergeSort
function sort (array = [5, 2, 1, 3, 6, 4]) {
    if (array.length < 2) {
        return array;
    }
    let leftArray = array.slice(0, array.length / 2);
    let rightArray = array.slice(array.length / 2, array.length)
    return merge(sort(leftArray), sort(rightArray));
}

function merge(leftArray, rightArray) {
    let finalArray = [];
    let finalArrayLength = leftArray.length + rightArray.length;
    let i = 0;
    let j = 0;
    while (finalArray.length != finalArrayLength) {
        if (leftArray[i] < rightArray[j]) {
            finalArray.push(leftArray[i])
            i++;
            if (leftArray[i] === undefined) {
                let remainingArray = rightArray.slice(j, rightArray.length)
                finalArray.push(...remainingArray);
            }
        } else {
            finalArray.push(rightArray[j])
            j++;
            if (rightArray[j] === undefined) {
                let remainingArray = leftArray.slice(i, leftArray.length)
                finalArray.push(...remainingArray);  //MDN array.prototype.push()
            }
        }
    }
    return finalArray;
}