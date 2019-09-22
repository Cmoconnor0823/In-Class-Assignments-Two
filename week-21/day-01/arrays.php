<?php
$arr = [1,2,3,4,5,6];

$assoc = [
    'Name' => 'Caitlin',
    'Age' => '28'
];

echo "First element is $arr[0]\n";
// concat with .     .
echo "Hello, my name is " . $assoc["Name"] . " \n";
echo "I am " . $assoc['Age'] . " years old \n";
?>