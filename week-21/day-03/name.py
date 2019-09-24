firstName = input("What is your first name?")
lastName = input("What is your last name?")

print("You entered your name as: ", firstName, lastName)

confirm = input("Does this look correct? ")
if confirm == "yes":
    print("Welcome", firstName, lastName)
else:
    print("Sorry try again!")
