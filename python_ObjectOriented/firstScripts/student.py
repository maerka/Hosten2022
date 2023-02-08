# Based on tutorial: https://www.youtube.com/watch?v=GwGo-9kC8to
class Student():
    def __init__(self, name, sleep, hangover):
        self.name = name
        self.sleep = sleep
        self.hangover = hangover
        self.myRating = self.sleep * 2**-self.hangover #hangover is the highest promille during night
    alive = True
    fights = 0
             
    
    def __str__(self):
        #return f"{self.name} slept {self.sleep} hours and has a hangover of {self.hangover}.\nRating: {self.myRating}."
        return f'{self.name} has a rating of {self.myRating}. Alive? {self.alive}' 
        
    def fight(self, otherStudent):
        otherRating = otherStudent.sleep ** -otherStudent.hangover
        
        #Are both fit for fight?
        if self.alive and otherStudent.alive:
            print('The fight between', self.name, 'and', otherStudent.name, 'starts')
            self.fights +=1
            otherStudent.fights +=1
            
            #Says who wins the fight
            if self.myRating > otherRating:
                print(self.name, "won over", otherStudent.name)
                #return self
            elif self.myRating < otherRating:
                print(otherStudent.name, "won over", self.name)
                self.myRating -= otherStudent.myRating
                #return self
            else:
                print ('Both', self.name, 'and', otherStudent.name, 'killed each other')
        
            #adjust myRating of both fighters
            temp = self.myRating
            self.myRating -= otherStudent.myRating
            otherStudent.myRating -= temp

            # Are they dead or alive?
            if self.myRating < 0:
                print(self.name, 'just died')
                self.alive = False         
            if otherStudent.myRating < 0:
                print(otherStudent.name, 'just died')
                otherStudent.alive = False
        else:
            print('one of the students are dead and unable to fight...')      
        #return self
            
            