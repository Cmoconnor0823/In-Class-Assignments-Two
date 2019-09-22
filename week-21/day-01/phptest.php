<?php
$firstName = "Caitlin";
$lastName = "O'Connor";
// without the quotes the error is a non- numberic value is encountered
$fullName = "$firstName $lastName";
$birthYear = 1991;
$currentYear = 2019;
// calculate age since its numbers there is no need for quotes
$age = $currentYear - $birthYear;
// echo works like console.log in JS
// \n breaks to a new line
echo "Hello my name is $fullName \n";
echo "My age is $age";
echo "<h1> $firstName </h1>";
echo "<p> $lastName </p>";


?>
<h3 style="color:purple">And this is how you can add normal html to a php file</h3>