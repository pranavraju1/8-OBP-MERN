// let a = 1;
// let b = 3;
// console.log(a ?? b) //1
// let a;
// let b = 3;
// console.log(a ?? b) //3
// let a;
// let b = null;
// console.log(a ?? b) //null

// let firstName = null;
// let lastName = null;
// let userName = null;

// let result = firstName ?? lastName ?? userName ?? 'Anonymus'
// console.log(result); //Anonymus


// let height = 0
// console.log(height || 100); //100
// console.log(height ?? 100); //0



// let heightS;
// let width;
// let area = (height ?? 100) * (width ?? 100)
// console.log(area)

// let x = 1 && 2 ?? 3 //this will give syntax error

// let y = (1 && 2) ?? 3 //this is the right way to do it
// console.log(y) //2