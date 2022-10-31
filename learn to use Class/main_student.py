from student import Student

def studentFights():
    print('THE DAY AFTER YESTERDAY')

    Troll = Student('Troll', 4,0)
    Orc = Student('Orc', 6,1)
    TrollJeger = Student('Trolljegeren', 2,2)
    
    #Before fights
    print(Troll)
    print(TrollJeger)
    print(Orc)
    print('\n')
    
    #Fight 1
    print('Fight 1')
    Troll.fight(TrollJeger)
    print(Troll)
    print(TrollJeger)
    print('\n')
    
    #Fight 2
    print('Fight 2')
    Orc.fight(TrollJeger)
    print(Troll)
    print(TrollJeger)
    print(Orc)
    print('\n')
    
    
    #Fight 3
    print('Fight 3')
    Orc.fight(Troll)
    print(Troll)
    print(TrollJeger)
    print(Orc)
    print('\n')
    
    
    print(Troll.name, 'fought', Troll.fights, 'time(s).')
    print(TrollJeger.name, 'fought', TrollJeger.fights,'time(s).')
    print(Orc.name, 'fought', Orc.fights, 'time(s).')
    
studentFights()