export default function sumOfArray(array) {
    let sum = 0
    for (const number of array) {
        sum += number
    }
    return sum
}