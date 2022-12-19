//Write a method that accepts an array of integers and updates every element with multiplication of previous and next elements



function modify(arr, n) {

    if (n <= 1)
        return;


    let prev = arr[0];
    arr[0] = arr[0] * arr[1];

    for (let i = 1; i < n - 1; i++) {
        let curr = arr[i];

        arr[i] = prev * arr[i + 1];
        prev = curr;
    }
    arr[n - 1] = prev * arr[n - 1];
}

let arr = [2, 3, 4, 5, 6];
let n = arr.length;
modify(arr, n);
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");



    console.log("-----------------------------")
// Move all negative numbers to the end and positive to the beginning of the array 
//without using any predefined sorting method.



function segregateElements(arr1, n1) {

    let temp = new Array(n1);
    let j = 0;
    for (let i = 0; i < n1; i++)
        if (arr1[i] >= 0)
            temp[j++] = arr1[i];


    if (j == n1 || j == 0)
        return;

    for (let i = 0; i < n1; i++)
        if (arr1[i] < 0)
            temp[j++] = arr1[i];

    for (let i = 0; i < n1; i++) arr1[i] = temp[i];
}

let arr1 = [1, -1, -3, -2, 7, 5, 11, 6];
let n1 = arr1.length;

segregateElements(arr1, n1);

for (let i = 0; i < n1; i++)
    console.log(arr1[i] + " ");

