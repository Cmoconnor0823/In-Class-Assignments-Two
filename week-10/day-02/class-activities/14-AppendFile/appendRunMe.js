var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data){
    if (error){
        return console.log(error);
        // or you could do console.log(error);
        //then return;
    }
 console.log(data);

 var dataArr = data.split(",");
 console.log(dataArr);

 for(e in dataArr){
     console.log(dataArr[e]);
 }

//  or for (var 1 = 0; 1 <arr.legnth; i++){
//  console.log(arr[i])
// }

});