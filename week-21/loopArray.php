<?php
// <!-- In this activity, you'll expand upon the previous 
// exercise using loops and arrays.
// To get started, create a fresh PHP file.
// Write a line that echoes the first command-line argument 
// passed to your script. -->
echo " ";

// <!-- Create an associative array, and store your and your 
// partner's last names as the keys, and your first names and 
// age as the value. 
// Hint: What data structure do you use to store multiple 
// pieces of information in a specific order?
$assoc = [
    'Caitlin' => ["O'Connor", 28],
    'Eric' => ['Rosas', 31],
    'John' => ["Wells", 27]
];


// Loop through the array, and print the same information you 
// printed previously for both yourself and your partner:
foreach ($assoc as $person => $data){
    $fullName = $person . " " . $data[0];
    // "My name is {{ FULL NAME }}." Print whether it's long or short.
    echo "Hello, my name is $fullName \n";
    echo "I am " .$data[1]. " years old! \n" ; 
}


// "I am {{ AGE }} years old." Print the relevant "Sake!" 
// statement, depending on your age.

// Separate each iteration with a line of separators, 
// using str_repeat.\ -->

?>