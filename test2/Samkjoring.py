# -*- coding: utf-8 -*-
"""
Created on Tue Nov  1 21:19:23 2022

@author: Erlend

The intention of this script is to set up a meeting and find out which participants have a free seat in their car. The script consists of three classes: Car, Person and Meeting. 

Each person owns a car (or not) with a certain number of free seats. When the Meeting is created, the persons are added to the meeting as participants. If they have a free seat, that be written in the meeting info. 
"""



from enum import Enum

# ------****------ class Car ------ **** ------
class Car:
    def __init__(self, freeSeats, brand):
        self.freeSeats = freeSeats
        self.brand = brand
    
    def __str__(self):
        return f'Free seats: {self.freeSeats} in {self.brand}'
    
    #Check if there is a free seat
    def hasFreeSeats(self):
        if self.freeSeats >0:
            return True
        else:
            return False
        
    #Reserve a number of seats. Return false if there are not enough seats
    def reserveFreeSeat(self, numSeats):
        if self.freeSeats >= numSeats:
            self.freeSeats -= numSeats
            return True
        else:
            return False
        


# ------ **** ------ class Person ------ **** ------
class Person:
    #DELETE COMMENTThe *car makes it possible to construct a Person without a the no argument for car. the variable then becomes a tuple. This is more difficult to handle
    #If person has no car, use 0 as argument
    def __init__(self, name, email, age, car):
        self.name = name
        self.age = age
        self.email = email
        self.car = car

    #Returning class as an string (Overloading print)
    def __str__(self):
        return self.name
        #return(f'Name: {self.name}\nEmail: {self.email}')
    
    #Overloading >,< operators. Read more here: https://www.geeksforgeeks.org/operator-overloading-in-python/
    def __gt__(self, other):
        #Compares the first letter of each person. 
        if self.getName()[0] > other.getName()[0]:
            return True
        else:
            return False
    
    #Overloading == operator
    def __eq__(self, other):
        #Compares the first letter of each person. 
        if self.getName()[0] == other.getName()[0]:
            return True
        else:
            return False
 
    #Returns the name of the person
    def getName(self):
        return self.name
    
    #Returns the email of the person 
    def getEmail(self):
        return self.email
    
    def setEmail(self, newMail):
        self.email = newMail
    
    #Returns the email of the person. Returns empty tuple () if person does not have a car
    def getCar(self):
        return self.car
    
    def hasAvailableSeats(self):
        # Check if car-variable is empty. Returns False in that case
        if not self.car:
            return False
        else:
            #hasFreeSeats return True if there are free seats and False if not
            return self.car.hasFreeSeats()

# ------ **** ------ enum Campus ------ **** ------
class Campus(Enum):
    TRH = 1
    GJO = 2
    AAL = 3
    
    def __str__(self):
        return self.name
    
    
# ------ **** ------ class Meeting ------ ***** ------
class Meeting:
    def __init__(self, day, startTime, endTime, location, subject, leader):
        self.day = day
        self.startTime = startTime
        self.endTime =endTime
        self.location = location
        self.subject = subject
        self.leader = leader
        self.participants = []
        
    def __str__(self):
        #return self.day
        return(f'MEETING \nSubject: {self.subject} \nDay: {self.day} \nStart time: {self.startTime} \nEnd time: {self.endTime} \nLocation: {self.location} \nLeader: {self.leader} \nParticipants: {self.getParticipants()}\nParticipants with available seats:{self.findCoDrivers()}')
    
    #Get functions for all the variables. 
    def getDay(self):
        return self.day
    def getStartTime(self):
        return self.startTime
    def getEndTime(self):
        return self.endTime
    def getLocation(self):
        return self.location
    def getSubject(self):
        return self.subject
    def getLeader(self):
        return self.leader
    def getParticipants(self):
        nameList =[]
        for i in self.participants:
            nameList.append(i.getName())
        return nameList
            #return self.participants
    
    
    #Add participants in alphabetic order
    def addParticipant(self, newPerson):
        for i in range(len(self.participants)):
            #Iterates through participantss and insert newPerson in alphabetic order.      
            if newPerson < self.participants[i]:
                self.participants.insert(i, newPerson)
                return 1
        #end of loop. newPerson must be the latter. 
        self.participants.append(newPerson)
        return 2 
    
    #Returns a list of participants with available seats
    def findCoDrivers(self):
        driverList = []
        for person in self.participants:
            #Iterates through all participants
            if person.hasAvailableSeats():
                #Add name of persons with available seats
                driverList.append(person.getName())
        return driverList
    

    
# ------ ***** ------ TEST OF ALL CLASSES AND FUNCTIONS ----- ***** -----   
    
# ***** Test of class Car ***** 
# print('TEST OF CLASS CAR')   
car1 = Car(8, 'Caravelle')
car2 = Car(0, 'Model 3')
print(car1)
# print(car1.reserveFreeSeat(8))
# print(car1)
# print(car2.hasFreeSeats())




# ***** Test of class Person *****
print('\nTEST OF CLASS PERSON')  
person1 = Person('Erlend', 'T@gmail.com',28, car1)
#If person does not own a car, use 0 as argument
person2 = Person('Torunn', 'T@gmail.com',26,0)
person3 = Person('Per', 'P@gmail.com',126,car2)
person4 = Person('Paal', 'p@gmail.com', 128, car1)

# print('Get car() returns', person1.getCar())
# print(person1.hasAvailableSeats())
# print(person1>person2) #__gt__
# print(person1==person2) #__eq__
print(person1) #__str__




# ***** Test of class Meeting *****
print('\nTEST OF CLASS MEETING')  
meeting1 = Meeting('Wednesday', 12, 14,  Campus.GJO , "Permacrisis", person1)
# print(meeting1)

meeting1.addParticipant(person2)
meeting1.addParticipant(person3)
meeting1.addParticipant(person4)
print(meeting1)
# print(meeting1.findCoDrivers())

