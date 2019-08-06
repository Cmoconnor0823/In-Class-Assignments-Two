* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  --a promise based orm for node js
	  java script executing sequalize code

	  aka how we programically interact with a database

  	- Answer: What advantages does it offer?
	  this allows us to write faster more readable code, sequalize is to mysql like jquery is to js

  	- Answer: How do I install it? How do I incorporate it into my app?
	  you install it by requiring it at the top of the script page  var Sequelize = require('sequelize');, and then You'll also have to manually install the driver for your database of choice:

		# One of the following:
		$ npm install --save pg pg-hstore # Postgres
		$ npm install --save mysql2
		$ npm install --save mariadb
		$ npm install --save sqlite3
		$ npm install --save tedious # Microsoft SQL Server


  	- Answer: What the heck is a Sequelize model? What role will it play? this represents a table in the database, instances of this class represent a database row, like sql or excel

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
module.exports = function(sequelize, DataTypes) {

   var independence = sequelize.define("independence", {
       text: { //TABLE ROW
          type: DataTypes.STRING, //EXPECTING A STRING {COLUMN STRUCTURE}

          AllowNull: false, //THIS COLUMN CANNOT BE EMPTY

          validate: { //VALIDATE INFO GOING INTO THE TABLE

            len: [1, 140] //NEEDS TO BE BETWEEN 1 AND 140 CHARACTERS
          } 
        },
        complete: { //TABLE ROW

          type: DataTypes.BOOLEAN, //EXPECTING A BOOLEAN {COLUMN STRUCTURE}

          defaultValue: false //THIS COLUMN WILL HAVE A DEFAULT VALUE OF FALSE
        }
      });
      return independence; //RETURN THE TABLE
    };
  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
