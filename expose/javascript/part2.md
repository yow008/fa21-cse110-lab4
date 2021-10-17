### 1
`3` is printed. From the array intialization, we know that `prices.length` is 3. In each iteration of the `for` loop, `i`, with inital value 0, is incremented by 1. When `i` holds value 3, we exit the for loop and print that value.

### 2
`150` is printed. `discountedPrice` holds value of last entry in the array after discount. `discountedPrice` = prices[2] * (1 - 0.5) = 300 * (1 - 0.5) = 150.

### 3
`150` is printed. `finalPrice` holds the value in `(discountedPrice * 100) / 100` rounded to integer. By explanation in previous question, the printed value is still `150`.

### 4
It returns an array `[ 50, 100, 150 ]`. `finalPrice` essentially holds the value (rounded to integer) of half of the original price, and the return value `discounted` gives us an array holding each of these values in order. The `var` varaible `discounted` is accessed within its function scope.

### 5
The code causes an error. Every `let` variable has block scope. Since `i` is a `let` variable defined in the `for` block, calling `i` outside the `for` block causes an error.

### 6
The code causes an error. Every `let` variable has block scope. Since `discountedPrice` is a `let` variable defined in the `for` block, calling `discountedPrice` outside the `for` block causes an error.

### 7
`150` is printed. `finalPrice` is defined in the function block, and then we call `finalPrice` in this block, so we can access its value.

### 8
It returns an array `[ 50, 100, 150 ]`. `finalPrice` essentially holds the value (rounded to integer) of half of the original price, and the return value `discounted` gives us an array holding each of these values in order. The `let` varaible `discounted` is accessed within its block scope.

### 9
The code causes an error. Every `let` variable has block scope. Since `i` is a `let` variable defined in the `for` block, calling `i` outside the `for` block causes an error.

### 10
`3` is printed. The function does not reassign the `const` variable `discounted`, and there is no error.

### 11
It returns an array `[ 50, 100, 150 ]`. `finalPrice` essentially holds the value (rounded to integer) of half of the original price, and the return value `discounted` gives us an array holding each of these values in order. None of the `const` varaibles is reassigned.

### 12
A. `student.name`
B. `student["Grad Year"]`
C. `student.greeting()`
D. `student["Favorite Teacher"]["name"]`
E. `student.courseLoad[0]`

### 13
A. `'32'` since integers map to their exact string representation when the first entry in the addition is a string. In this case, JavaScript does contatenation.
B. `1` since, while JavaScript performing a subtraction, `'3'` is converted to integer 3.
C. `3` since `null` is interpreted as 0 when the first entry in the addition is an integer.
D. `'3null'` since the first entry in the addition is a string.
E. `4` since `true`, of type boolean, is converted to an integer value in additions.
F. `0`. In additions where the first entry is not a boolean, false is converted to 0 and null is converted to 0.
G. `'3undefined'` since the first entry in the addition is a string.
H. `NaN` because the sencond entry `undefined` is converted to NaN.

### 14
A. `true`. When comparing values of different types, JavaScript converts the values to numbers.
B. `false`. Strings are compared letter by letter, and letters are compared using their lexicographical order.
C. `true`. When comparing values of different types, JavaScript converts the values to numbers.
D. `false`. `===` checks the equality without type conversion.
E. `false`. `true` is converted to 1, which is not equal to 2.
F. `true`. Since `2` is a non-zero integer, `Boolean(2)` returns true, which is strictly equal to `true`.

### 15
`==` is for a non-strict check, meaning automatic type casting is performed. `===` is for a strict equality check, meaning no automatic type casting is performed.

### 17
The result will be array [2, 4, 6]. After we calling method `modifyArray`, JavaScript initializes an empty array, and starts executing the for loop. In each iteration, it picks the corresponding value in the array, using this value as an input of `callback`, which is `doSomething`. The `doSomething` essentially doubles the input value. Then, it puts this new number into the new array. After all elements in the original array have been used, JavaScript exits the for loop, and returns the new array.

### 19
1
3
4
2