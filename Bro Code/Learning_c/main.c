#include <stdio.h>

/* ===================================
   CHALLENGE 1: Hello World
   =================================== */
void challenge1() {
    printf("\n=== CHALLENGE 1: Hello World ===\n");
    // TODO: Print "Hello, World!" to the screen
    
    
}


/* ===================================
   CHALLENGE 2: Variables & Math
   =================================== */
void challenge2() {
    printf("\n=== CHALLENGE 2: Variables & Math ===\n");
    // TODO: Create two integer variables (a and b)
    // Set a = 10, b = 20
    // Print their sum
    
    
}


/* ===================================
   CHALLENGE 3: Arrays
   =================================== */
void challenge3() {
    printf("\n=== CHALLENGE 3: Arrays ===\n");
    // TODO: Create an array of 5 integers: {2, 4, 6, 8, 10}
    // Use a loop to print each number
    
    
}


/* ===================================
   CHALLENGE 4: Pointers (Basic)
   =================================== */
void challenge4() {
    printf("\n=== CHALLENGE 4: Pointers ===\n");
    int x = 42;
    
    // TODO: Create a pointer to x
    // Print the value of x using the pointer
    // Hint: int *ptr = &x;
    
    
}


/* ===================================
   CHALLENGE 5: Pointer to modify value
   =================================== */
void challenge5() {
    printf("\n=== CHALLENGE 5: Modify with Pointer ===\n");
    int num = 5;
    
    // TODO: Create a pointer to num
    // Use the pointer to change num to 100
    // Print the new value
    // Hint: *ptr = 100;
    
    
}


/* ===================================
   CHALLENGE 6: Array with Pointer
   =================================== */
void challenge6() {
    printf("\n=== CHALLENGE 6: Array with Pointer ===\n");
    int numbers[] = {10, 20, 30, 40, 50};
    
    // TODO: Create a pointer to the array
    // Use pointer arithmetic to print the 3rd element (30)
    // Hint: int *ptr = numbers; then *(ptr + 2)
    
    
}


int main() {
    printf("====================================\n");
    printf("   C PROGRAMMING CHALLENGES\n");
    printf("====================================\n");
    
    // Uncomment each challenge as you complete them!
    
    challenge1();
    // challenge2();
    // challenge3();
    // challenge4();
    // challenge5();
    // challenge6();
    
    return 0;
}


/* ===================================
   SOLUTIONS (Don't peek until you try!)
   ===================================

CHALLENGE 1:
    printf("Hello, World!\n");

CHALLENGE 2:
    int a = 10;
    int b = 20;
    printf("Sum: %d\n", a + b);

CHALLENGE 3:
    int arr[5] = {2, 4, 6, 8, 10};
    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

CHALLENGE 4:
    int *ptr = &x;
    printf("Value: %d\n", *ptr);

CHALLENGE 5:
    int *ptr = &num;
    *ptr = 100;
    printf("New value: %d\n", num);

CHALLENGE 6:
    int *ptr = numbers;
    printf("3rd element: %d\n", *(ptr + 2));

=================================== */