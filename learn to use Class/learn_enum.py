# Enum going from c++ to python: https://stackoverflow.com/questions/36932/how-can-i-represent-an-enum-in-python
# https://realpython.com/python-enumerate/

# enum in programming languages: https://www.thoughtco.com/what-is-an-enum-958326

from enum import Enum


# https://www.geeksforgeeks.org/enum-in-python/
class Season(Enum):
    SPRING = 1
    SUMMER = 2
    AUTUMN = 3
    WINTER = 4

print('PART 1')
# printing enum member as string
print(Season.SPRING)
 
# printing name of enum member using "name" keyword
print(Season.SPRING.name)
 
# printing value of enum member using "value" keyword
print(Season.SPRING.value)
 
# printing the type of enum member using type()
print(type(Season.SPRING))
 
# printing enum member as repr
print(repr(Season.SPRING))
 
# printing all enum member using "list" keyword
print(list(Season))



print('PART 2 - ACCESS')
print("The enum member associated with value 2 is : ", Season(2).name)
print(str(Season(2).name))
print("The enum member associated with name AUTUMN is : ", Season['AUTUMN'].value)


