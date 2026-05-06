// function bubbleSort(arr){
//     let swap;
//     do{
//         swap = false
//         for(let i=0; i<arr.length-1; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]; 
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//                 swap = true;
//             }
//         }
//     }
//     while(swap)
// }

// let arr = [8, 20, -2, 4, 6]
// bubbleSort(arr);
// console.log(arr);   //[ -2, 4, 6, 8, 20 ]
// // Best case: O(n)
// // Worst case: O(n^2) //[20, 8, 6, 4, -2]


// Insertion Sort
// here we virtually split the array into sorted and unsorted part
// assume that the 1st is already sorted and remaining elements are unsorted
// select an unsorted element and compare with all elements in the sorted part

// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the 
// unsorted part. Else shift larger elements in the sorted sorted parts towads the right

// insert the selected elements at the right index
// repeat till all the unsorted elements are placed in the right.

function insertionSort(arr){

    for(let i=1; i<arr.length; i++){
        let NIT = arr[i];   //no. to insert
        let j = i - 1;      //index of your sorted element

        // we compare the sorted elements in an array with the NIT
        // and trying to find the index where the insertion should take place
        // the index is where the sorted element is lesser than the NIT
        while(j>=0 && arr[j] > NIT){
            arr[j+1] = arr[j];
            j = j - 1; //j--
        }
        arr[j+1] = NIT;     //this where the insertion takes place
    }
}

let arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr)

// best case O(n)
// worst case O(n^2)


// Selection Sort
// Here we scan the unsorted elements of an array for a min value and swap the positions from the begining
// [8, 20, -2, 4, -6]
// [-6, 20, -2, 4, 8]
// [-6, -2, 20, 4, 8]
// [-6, -2, 4, 20, 8]
// [-6, -2, 4, 8, 20]

function selectionSort(arr){
    // the below loop is to keep trak of the index where the swap needs to take place
    for(let i=0; i<arr.length - 1; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

         let temp = arr[i]; 
         arr[i] = arr[minIndex];
         arr[minIndex] = temp;

        // OR
        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}
let arr = [8, 20, -2, 4, -6]; 
selectionSort(arr)
console.log(arr)

// Best  case -> O(n^2)
// Worst case -> O(n^2)

