// Function to print out properties of string value
function showProperties(object){
    for (let key in object){
        if (typeof(object[key]) === 'string')
            console.log(key + ': ' + object[key]);
    }
}

// Function to count the number of Truthy values in an array
function countTruthy(arr){
    let count = 0;
    for (i = 0; i < arr.length; i++)
        if (arr[i])
            count++;
        return count;
}

// Function to check for odd an even numbers with a limit and log them
function showNumbers(limit){
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i + ' EVEN');
        else
            console.log(i + ' ODD');
    }
}

// Function to check the speed of a driver
function checkSpeed(speed){
    const speedLimit = 70;
    let points = 0;
    let remainder = speed - speedLimit;
    
    if (speed <= speedLimit + 5)
        return 'Ok';
    if (remainder >= 5)
        for (let i = 5; i <= remainder; i+=5)
            points++;
        if (points >= 12)
            return 'License Suspended!';
        return 'Points: ' + points;
}

// Function to find the maximum of two numbers
function compare(num1, num2){
    if (num1 > num2) console.log(num1);
        else console.log(num2);
    (num1 > num2) ? console.log(num1) : console.log(num2);
}

// Function to check the orientation of an image
function checkOrientation(width, height) {
    if (width > height){
        return 'Landscape';
    }
    return 'Portrait';
}

// FizzBuzz function
function fizzBuzz(input) {
    if (input == NaN)
        return "Input is not a number";
    else if (input % 3 == 0 && input % 5 ==0)
        return 'FizzBuzz';
    else if (input % 3 == 0)
        return 'Fizz';
    else if (input % 5 == 0)
        return 'Buzz';
    else
        return input;
}

// sum of off multiples of 3 and 5 up to limit
function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 ===0))
            sum += i;
    }

    return sum;
}

// average mark and grade of a student
function calculateGrade(marks) {
    let average;
    let sum = 0;
    let grade = '';

    for (let mark of marks)
        sum += mark;
    average = Math.round(sum / marks.length);

    if (average >= 70)
        grade = 'A';
    else if (average >= 60)
        grade = 'B';
    else if (average >= 50)
        grade = 'C';
    else if (grade >= 40)
        grade = 'D';
    else
        grade = 'F';


    return 'Average: ' + average + '\n' 
            + 'Grade: ' + grade;
}

//return star rows
function showStars(rows) {
    let stars = '*';
    for (i = 0; i < rows; i++){
        console.log(stars);
        stars += '*';
    }
}