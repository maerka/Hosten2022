# Based on the tutorial: https://www.w3schools.com/python/python_classes.asp

# EXAMPLE 1
class myClass:
    a=5
c1 = myClass()
print(c1.a)
print(c1) #without __str__(self)

# EXAMPLE 2
class Person():
    # 1) parameters/variables for the class
    # "self" could alse have another name like kråkefot. But a word must be there
    def __init__(self,name,age):
        self.name = name
        self.age = age
    
    # 2) when the class is printet
    def __str__(self):
        return f"{self.name} is {self.age} years old"   #version 1
        #return f"{self.name}{self.age}"   #version 2
        #return f"{self.name}({self.age})" #version 3

    # 3) functions of the class
    def jump(self,a):
        height = 2*a
        print(p1.name,'just jumped',height,'meters')

#tests for (1)
p1 = Person('John', 36)
print(p1.name)
print(p1.age)

#test for (2)
print('print of p1:')
print(p1)

#tests for (3)
p1.jump(1)

#modify properties
p1.age = 37
print(p1)

# create more persons
p2 = Person('Torunn', 27)
p3 = Person('Julenissen',99)


#list of persons
myList = [p1, p2, p3]
print(myList[1])

#delete person
del p2
#print(p2)

print(myList[1])