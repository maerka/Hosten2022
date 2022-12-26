# https://www.youtube.com/watch?v=AY9MnQ4x3zk
# https://docs.spyder-ide.org/5/faq.html#using-packages-installer

import pygame
from sys import exit
from random import randint

def detectCrash (rec1, rec2):
    #Works only for rectangles
    crash_x =0
    crash_y =0
   
    #Defines smallest width (x-direction)
    if rec1.w <= rec2.w:
        short_x = rec1
        long_x = rec2
    else:
        short_x = rec2
        long_x = rec1     
        
        
    #Is smallest width inside longest?        
    if short_x.left >= long_x.left and short_x.left <= long_x.right:
        crash_x = 1
    elif short_x.right >= long_x.left and short_x.right <= long_x.right:
        crash_x = 1



    #Defines smallest width (y-direction)
    if rec1.h <= rec2.h:
        short_y = rec1
        long_y = rec2
    else:
        short_y = rec2
        long_y = rec1
        
    #Is smallest height inside longest?            
    if short_y.bottom >= long_y.top and short_y.bottom <= long_y.bottom:
        crash_y = 1
    elif short_y.top >= long_y.top and short_y.top <= long_y.bottom:
        crash_y = 1 
    
    #Returns 1 if intersection both in x-and y-direction
    if crash_x and crash_y: return 1
    else: return 0
        
    
def reinAutoJump(jump):  
    #jump = 0, not jumping
    #jump = 1: upwards
    #jump = 2: downwards
    velY =1
    if jump == 0 and reindeer1_rect.left - santa_rect.right < 220 and reindeer1_rect.left - santa_rect.right >=0 : # condition for jumping
        jump =1
    
    if jump == 1:
        reindeer1_rect.bottom -= velY
        if reindeer1_rect.bottom <= 235:
            jump = 2
    
    elif jump == 2:
        reindeer1_rect.bottom += velY
        if reindeer1_rect.bottom >= 310:
            jump = 0
    
    if reindeer1_rect.right < 0:
        reindeer1_rect.left = 860
    return jump

def display_score(game_state, score):        
    if game_state == 1:
        score = pygame.time.get_ticks() - start_time
        # score = (5350)
    
    score_surf = font.render(f'{int(score/100)}', True, (64,64,64))
    score_rect = score_surf.get_rect(center = (700,50))
    screen.blit(score_surf,score_rect)
    return score

def obstacle_movement(obs_list):
    if obs_list:
        for obs_rect in obs_list:
            obs_rect.x += 2
            screen.blit(santa_surf, obs_rect)
            obs_list = [obs for obs in obs_list if obs.x < 900]
        return obs_list
    else: return []

#def gravity(rec): # not used
    # if rec.bottom <= 310:
        # rec.bottom += 1


                    

def reinCrash():
    if detectCrash(reindeer1_rect, santa_rect):
        return pygame.transform.rotate(reindeer1_surface, -130)
    else: return 0    
    
# Game logics
pygame.init()
screen = pygame.display.set_mode((860,400))
pygame.display.set_caption('Rudolf')
clock = pygame.time.Clock()
game_state = 0 # 0= new game? 1= game running 2= animation for game over 
start_time = 0
score = 0


#TEST of function DETECT CRASH
surf1_s = pygame.Surface((50,50))
surf1_s.fill('Red')
surf1_r = surf1_s.get_rect(bottomleft = (400,100))
surf2_s = pygame.Surface((50,50))
surf2_s.fill('Brown')
surf2_r = surf2_s.get_rect(bottomleft = (430,130))
detectCrash(surf1_r, surf2_r)




# Colors: https://matplotlib.org/2.0.2/examples/color/named_colors.html
background = pygame.image.load('graphics/bakgrunn.png').convert_alpha() #(860x343) 
ground_brown = pygame.Surface((860,70))
ground_brown.fill('sandybrown')
ground_green = pygame.Surface((860,20))
ground_green.fill('olivedrab')


#Text
font = pygame.font.Font(None, 50) #font of text -> (font type, font size) font type can be imported from file
text_surface = font.render('God jul!',True,'red') #(text, antialiasing - smootening, color)
menu_start_text = font.render('Start game', True, 'Red')
menu_start = menu_start_text.get_rect(midbottom = (430, 180))
menu_quit_text = font.render('Quit', True, 'red')
menu_quit = menu_quit_text.get_rect(midbottom = (430, 230))

#Santa
santa_surf = pygame.image.load(('graphics/santa2.png')).convert_alpha() #convert makes png easier to handle
santa_rect = santa_surf.get_rect(bottomleft = (200, 310))

obstacle_rect_list = []


#Reindeer
reindeer1_surface = pygame.image.load('graphics/reindeer4.png').convert_alpha()
reindeer1_rect = reindeer1_surface.get_rect(bottomleft = (700, 310))
rein_gravity = 0

#Timer
obstacle_timer = pygame.USEREVENT + 1
pygame.time.set_timer(obstacle_timer, 2000)



keys = pygame.key.get_pressed()
while True:
    
    # KEYS AND GAME LOGIC
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

        # Game_state = 1 (running)
        if game_state == 1:
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                if reindeer1_rect.bottom >= 310:
                    print('jump!')
                    rein_gravity = -4
            if event.type == obstacle_timer:
                obstacle_rect_list.append(santa_surf.get_rect(bottomleft = (randint(-900,-700), 310)))
        
        # Game_state = 0 (menu)
        elif game_state == 0:
            # Start from keyboard
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    reindeer1_surface = pygame.image.load('graphics/reindeer4.png').convert_alpha()
                    reindeer1_rect = reindeer1_surface.get_rect(bottomleft = (700, 310))
                    santa_rect = santa_surf.get_rect(bottomleft = (200, 310))
                    game_state =1
                    start_time = pygame.time.get_ticks()
                elif event.key == pygame.K_ESCAPE:
                    pygame.quit()
                    exit()
                # elif event.type == pygame.KEYUP:
                    # print('key up')       
            # Start with by clicking with mouse                    
            if event.type == pygame.MOUSEBUTTONDOWN:
                if menu_start.collidepoint(pygame.mouse.get_pos()): #if mouse position inside rectangle "start game" 
                    reindeer1_surface = pygame.image.load('graphics/reindeer4.png').convert_alpha()
                    reindeer1_rect = reindeer1_surface.get_rect(bottomleft = (700, 310))
                    santa_rect = santa_surf.get_rect(bottomleft = (200, 310))
                    game_state =1
                    start_time = pygame.time.get_ticks()
                elif menu_quit.collidepoint(pygame.mouse.get_pos()):
                    pygame.quit()
                    exit()     
            #if event.type == pygame.MOUSEBUTTONDOWN:
            #    print('Mouse is moving')                    
                
    #UPDATE ANIMATION            
    #1= game is running 2= game over animation
    if game_state == 1 or game_state == 2:
        #Background and ground
        screen.blit(background,(0,0))
        screen.blit(ground_brown,(0,330))
        screen.blit(text_surface,(200,50))
        
        screen.blit(ground_green,(0,310))
        screen.blit(reindeer1_surface, reindeer1_rect)
        
        screen.blit(santa_surf,santa_rect)
        score = display_score(game_state, score)
        
        
        #Draw
        #pygame.draw.rect(reindeer1_surface, 'Pink', reindeer1_rect)
        #pygame.draw.rect(screen, '#c0e8ec', reindeer1_rect)
        #pygame.draw.line(screen, 'Gold', (20,20),pygame.mouse.get_pos(), 10)
        #pygame.draw.ellipse(screen,'brown',pygame.Rect(500,390,10,20)) #(x-pos, y-pos, length, height) 
        
    else: #if game_state == 0: (menu) 
        screen.blit(background,(0,0))
        screen.blit(ground_brown,(0,330))
        screen.blit(menu_start_text, menu_start)
        screen.blit(menu_quit_text, menu_quit)
    # #test surfaces
    # screen.blit(surf1_s,surf1_r)
    # screen.blit(surf2_s,surf2_r)
    
    
    # GAME IS RUNNING
    if game_state == 1:
        # Reindeer horizontal movement    
        reindeer1_rect.left -= 3
        if reindeer1_rect.right < 0:
            reindeer1_rect.left = 860
            
        # Reindeer vertial movement
        rein_gravity +=0.1
        reindeer1_rect.bottom += rein_gravity
        if reindeer1_rect.bottom > 310: 
            reindeer1_rect.bottom = 310
        
        # Santa movement
        if santa_rect.left>860:
            santa_rect.right = -5  
        santa_rect.left +=2       
        
        #obstactle movement
        obstacle_rect_list = obstacle_movement(obstacle_rect_list)
        
        
        if detectCrash(reindeer1_rect, santa_rect):
            game_state = 2
            animation_count = 0
            rein_gravity = -6
            obstacle_rect_list = [] #Removes all fake santas
            
    # Start animation for game over
    if game_state == 2:
        rec_center = reindeer1_rect.center #Center to rotate properly
        reindeer1_surface = pygame.transform.rotozoom(reindeer1_surface, -10, 1.03) #rotate and enlarge
        reindeer1_rect = reindeer1_surface.get_rect(center = rec_center) #get new rectangle
        rein_gravity +=1 
        reindeer1_rect.top += rein_gravity #"jumping"
        animation_count +=1 #defined under detectCrash()

        if animation_count == 25:
            game_state = 0
    
    
    pygame.display.update()
    clock.tick(60)
        


         