# conditionals

truth = True
fakeNews = False

# if(truth)
if truth:
    print("Truth was TRUE")
elif fakeNews:
    print("This should never be true")
else:
    print("Nothing is true anymore!")

x = 0
y = 1
z = 2

if x > y > z:
    print("X is greater than Y is greater than Z")
elif x == y == z:
    print("All values equal")
elif z >= y or y >= x:
    print("Z is greater than Y is greater than X")
else:
    print("ELSE REACHED MASS CHAOS")

# While example
correctAnswer = False
while correctAnswer == False:
    answer = input("What is 2 + 2 : ")
    if answer == "4":
        print("Correct!")
        correctAnswer = True
    else:
        print("Incorrect!")