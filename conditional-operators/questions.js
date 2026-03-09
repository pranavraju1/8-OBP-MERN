// 90–100 → Grade A+

// 80–89 → Grade A

// 70–79 → Grade B

// 60–69 → Grade C

// 50–59 → Grade D

// 40–49 → Grade E

// Below 40 → Grade F

let marks = 73; // change this value to test different cases
// solve it using if else













// let marks = 73; // change this value to test different cases

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80 && marks < 90) {
    console.log("Grade: A");
} else if (marks >= 70 && marks < 80) {
    console.log("Grade: B");
} else if (marks >= 60 && marks < 70) {
    console.log("Grade: C");
} else if (marks >= 50 && marks < 60) {
    console.log("Grade: D");
} else if (marks >= 40 && marks < 50) {
    console.log("Grade: E");
} else if (marks >= 0 && marks < 40) {
    console.log("Grade: F");
} else {
    console.log("Invalid marks entered");
}
