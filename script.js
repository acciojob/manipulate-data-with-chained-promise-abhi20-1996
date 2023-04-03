function manipulateArray(arr) {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(arr);
}, 3000);
});
}

manipulateArray([1, 2, 3, 4])
.then((arr) => {
const filteredArr = arr.filter(num => num % 2 === 0);
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(filteredArr);
}, 1000);
});
})
.then((arr) => {
const multipliedArr = arr.map(num => num * 2);
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(multipliedArr);
}, 2000);
});
})
.then((arr) => {
const outputEl = document.getElementById('output');
outputEl.textContent = arr.join(', ');
})
.catch((err) => {
console.error(err);
});