part1

1 
> value added:  20

2
> final result:  20

3
> value added:  20

4
> ReferenceError: result is not defined
My explanation: `let result` is defined in the `if` block, so the `result` here is not defined in its block.

5
> TypeError: Assignment to constant variable.
My explanation: The `const` variable `result` is forced to an update on line 7. A `const` variable is not allowed to be updated.

6
> 
Due to previous error explained in previous question.