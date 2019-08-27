# Insert Animals

"Sure being a coder is fun and all, but you know what’s better? Being a coder at a zoo. Using MongoDB, you're going to make a zoo database."

## Instructions

Startup mongod and the mongo shell and switch to a new db named zoo.

Insert into a collection named animals:
One entry for each of your five favorite animals.

Each entry should have
1. A field of numLegs with an integer of the number of legs that animal has.
2. A field of class with that animal's class (mammal, reptile, etc).
3. A field of weight with an integer of the weight of the animal in pounds (any reasonable weight, really).
4. A field of name, with the animal's name.
5. A field of whatIWouldReallyCallIt with the name of what you would call the animal if you got to name it.

Example:

{
  "name": "Panda",
  "numLegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Desiigner"
}
```
use zoodb

show dbs

db.createCollection(animals)

db.animals.insert({"name": "Panda", "numLegs": 4, "class": "mammal", "weight": 254, "whatIWouldCallIt": "Desiigner"})

db.animals.insert({"name": "Cougar", "numLegs": 4, "class": "mammal", "weight": 120, "whatIWouldCallIt": "Desert_Cat"})

db.animals.insert({"name": "Gila_Monster", "numLegs": 4, "class": "lizard", "weight": 5, "whatIWouldCallIt": "Halloween_Lizard"})

db.animals.insert({"name": "DiamondBack_RattleSnake", "numLegs": 0, "class": "snake", "weight": 1, "whatIWouldCallIt": "Noisy_Snaake"})

db.animals.insert({"name": "Great_Dane", "numLegs": 4, "class": "mammal", "weight": 75, "whatIWouldCallIt": "Aurora"})

db.animals.find().pretty()