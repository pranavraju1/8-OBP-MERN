// // Worst Case -> O(n^2) -> array is already sorted -> bc here we endup partioning into an empty array and a full array
// // Avg case -> O(nlogn) -> recursively devide the array into smaller array -> logn and apply a for loop to it to get O(nlogn)
// //space is O(n)

// // Quick sort using left right arrays 
function quickSort(arr){
    if(arr.length < 2){
        return arr
    }


    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));




// Inplace quickSort()
function partition(arr, low, high) {
  const pivot = arr[high];      // 1) choose pivot
  let i = low - 1;              // 2) boundary of "smaller than pivot" region


  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {       // 3) element belongs to "smaller" region
      i++;                      // move boundary right
      [arr[i], arr[j]] = [arr[j], arr[i]];   // swap into that region
    }
  }


  // 4) put pivot in its final position (right after "smaller" region)
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;                 // 5) return pivot index
}


function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;      // base case: 0 or 1 element


  const pi = partition(arr, low, high);  // 6) partition


  // 7) recursively sort left and right parts (in place)
  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
}


let arr = [8, 3, 1, 7, 0, 10, 2]
quickSort(arr)
console.log(arr)