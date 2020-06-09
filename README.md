## Big O Notation Assignment

Create a GitHub repo called DSA-Big-O. Save all this work in the repo and submit the repo via the submission box at the end of this checkpoint.

In these drills, you'll practice determining the big O complexity of algorithms. For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.

1. What is the Big O for this?

    1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

        O(log(n))

    1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

        O(n)

1. Even or odd

    What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function isEven(value) {
        if (value % 2 === 0) {
            return true;
        }
        else
            return false;
        }
    }
    ```

    This algorithm is O(1) because it's performing one arithmetic operation no matter what the value is.

1. Are you here?

    What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }
    ```

    This algorithm is O(n^2) because it requires two levels of looping for the input.

1. Doubler

    What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }
    ```

    This algorithm is O(n) because the the computation time is directly proportional to the input size.

1. Naive search

    What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }
    ```

    This algorithm is O(n) because the the computation time is directly proportional to the input size. The search goes through every item in the array.

1. Creating pairs

    What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " + arr[j]);
            }
        }
    }
    ```

    This algorithm is approximately O(n^2) because it requires two levels of looping for the input. I say approximately because the loop size of the second loop decreases as the first loop progresses.

1. Compute the sequence

    What does the following algorithm do? What is its runtime complexity? Explain your answer.

    ```javascript
    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {
            if (i === 1) {
                result.push(0);
            } else if (i === 2) {
                result.push(1);
            } else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }
    ```

    This algorithm creates an array populated with alternating values of 0 and 1. The time complexity is O(n) because the computation time is directly proportional to the size of the input.

1. An efficient search

    In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            } else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            } else {
                return currentIndex;
            }
        }
        return -1;
    }
    ```

    The algorithm is O(log(n)) because the problem size is halved in every loop iteration.

1. Random element

    What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    ```

    The algorithm is O(1) because only one computation is performed no matter what the array size is.

1. What Am I?

    What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer.

    ```javascript
    function isWhat(n) {
        if (n < 2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % i === 0) return false;
        }
        return true;
    }
    ```

    This algorithm will find prime numbers (if the number is divisble by any number besides 1 and the number, the function returns false). It is O(n) because the computation time is directly proportional to the input number.

1. Tower of Hanoi

    The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

    - There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.

    - The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules:
        1. Only one disk may be moved at a time
        1. Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod.
        1. A larger disk may not placed on top of a smaller disk

    Input:

    | Rod A         | Rod B | Rod C |
    | ------------- | ----- | ----- |
    | ----          |       |
    | ---------     |       |
    | ------------- |       |

    Output:

    | Rod A | Rod B | Rod C         |
    | ----- | ----- | ------------- |
    |       |       | ----          |
    |       |       | ---------     |
    |       |       | ------------- |

    - Derive an algorithm to solve the Tower of Hanoi puzzle.
    - Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
    - If you are given 5 disks, how do the rods look like after 7 recursive calls?
    - How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
    - What is the runtime of your algorithm?

1. Iterative version

    Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

1. Recursive Big O

    Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

1. Iterative Big O

    Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

    Every solution is O(n), because they're all directly proportional to the input size.
