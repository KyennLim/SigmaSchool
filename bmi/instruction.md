# Instructions  

  We are calculating your BMI.

  ## Steps
  1. Create a variable called `height` assign it to your height in metres, in a float type. e.g. 1.75.
  ```js
  const height = 1.75;
  ```
  2. Create another variable `weight` and assign it to your weight in kg as an round up to the nearest whole number, as an integer. e.g. 65.
  ```js
  const weight = 65;
  ```
  3. Create another variable called `bmi` and assign it to calculation of bmi with the help of the weight and height variable.
  
  ```javascript
  const bmi = weight / (height * height);
  ```
  Google how to calculate bmi if you have to.
  
  4. Print out your `bmi` variable in this format, for example:

  ```javascript
  console.log(`My BMI is ${bmi}.`);
  ```
<details>
<summary>Answer</summary>

```javascript
const height = 1.75;
const weight = 65;

const bmi = weight / (height * height);

console.log(`My BMI is ${bmi}.`);
```
</details>

## Reference
To print statement in a format, for example:
```
My name is {name}
```
Here is how:
```python
name = 'Haris'
print(f'My name is {name}')
```
This will print out: 
```
My name is Haris
```

Output (assuming height is 1.75m and weight is 65kg):
```
My BMI is 21.22.
```