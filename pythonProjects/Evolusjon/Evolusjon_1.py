# -*- coding: utf-8 -*-
"""
Created on Mon Nov 14 21:15:36 2022

@author: Erlend
"""

import random as r
import matplotlib.pyplot as plt
import numpy as np

#Funksjonen skaper n fugler med definerte egenskaper. Forbedring: Bør normalfordeles rundt en spesifikk farge. Ta inn fargen som argument
def skapFugler(n, gjennomsnitt, standardavvik):
    fugleKoloni = []
    for i in range(n):
        #Lager normalfordelte farger rundt 50 med 5 som standardavvik
        farge = round(r.normalvariate(gjennomsnitt, standardavvik))
        fugleKoloni.append(farge)
    return fugleKoloni


# Funksjonen tar en liste med tall og lager et histogram basert på passende verdier. Brukes til å vise hvor mange fugler det er i hver koloni. 
def visHistogram(liste, aar):
    #Her bestemmes intervallene for histogram. Med mindre annet blir spesifisert settes de til 10 intervaller basert innholdet i lista. 
    antallBins = 10    
    # minste = 20
    minste = int(min(liste))
    # storste = 90
    storste = int(max(liste))
    intervall = int(round((storste-minste) / antallBins))
    
    # To likegode alternativer. Ser ikke forskjellen. Husk å oppdatere plt.xticks
    # xakse1 = range(minste, storste+intervall*2, intervall)
    xakse2 = np.arange(minste,storste+intervall,intervall)
    
    # Selve plottingen
    plt.hist(liste, bins = xakse2, edgecolor="grey")
    plt.xlabel('Farge')
    plt.ylabel('Antall')
    plt.xticks(xakse2)
    plt.title(f'Antall fugler med gitt farge år {aar}')
    plt.show()
    
    # print(minste, storste)


# Dette er hvoeddelen av programmet. Dette er selve "logikken / forutsetningene" for evolusjonen. Tar inn en koloni med fugler og bestemmer hvilke fugler som får avkom og hvilke som ikke får det. 
def evolusjonslogikk(koloni, bakgrunnsfarge):
    nyGenerasjon =[]
    
    for i in range(len(koloni)):
        sjanse = r.randint(0, 100) #Tilfeldig tall mellom 0 og 100. Dette er sannsynligheter. 
        
        #Hvis bakgrunnsfarge +-2
        if koloni[i] > bakgrunnsfarge-2 and koloni[i] < bakgrunnsfarge+2:
            #60% sjanse for å overleve. Da blir det ny unge
            if sjanse <60:
                nyGenerasjon.append(koloni[i]) #Fuglens "mor"
                nyGenerasjon.append(koloni[i]) #Fuglens "unge"
        #Hvis bakgrunnsfarge +-10
        # elif koloni[i] > bakgrunnsfarge-5 and koloni[i] < bakgrunnsfarge+5:
        #     #30% sjanse for å overleve. Da blir det ny unge
        #     if sjanse < 50:
        #         nyGenerasjon.append(koloni[i]) #Fuglens "mor"
        #         nyGenerasjon.append(koloni[i]) #Fuglens "unge"
        # #Alle andre farger
        else:
            #20% sjanse for å overleve
            if sjanse <35:
                nyGenerasjon.append(koloni[i]) #Fuglens "mor"
                nyGenerasjon.append(koloni[i]) #Fuglens "unge"
    return nyGenerasjon
                

# Funksjonen viser hvor mange fugler det er i en koloni (2D-array). 
# Hvis alleGenerasjoner = 0 printes bare siste generasjon. 
# Hvis alleGenersjoner = 1 printes oversikt over alle generasjoner
def visStorrelseKoloni(koloni, alleGenerasjoner):
    if alleGenerasjoner:
        print('Størrelse på koloni:')
        aar = 1
        for gen in koloni:
            print(f'År {aar}: {len(gen)}')
            aar +=1
    else: 
        # print(f'Størrelse på generasjon {len(koloni)}: {len(koloni[-1])}')
        print('Generasjon', len(koloni))
        print('Størrelse: ',len(koloni[-1]),'\n')
        


# *** --- *** SELVE PROGRAMMET *** --- ***


bakgrunnsfarge = 70 
antallGenerasjoner = 20
gen1 = skapFugler(1000, 50, 10) # skapFugler(antallFugler, gjennomsnitt, stnd.avvik)


#Lager første generasjon
alleGenerasjoner = [gen1]   # Her "lagres" hver generasjon
visHistogram(gen1, 1) 
# print('Generasjon 1')
# print(gen1)
 
 
for aar in range(2,antallGenerasjoner+1):
    # input(f'Enter for generasjon {aar}') #Stopper programmet for å kunne studere diagrammet
    visStorrelseKoloni(alleGenerasjoner, 0)
    nyGenerasjon = evolusjonslogikk(alleGenerasjoner[-1],bakgrunnsfarge) # Kjører evolusjonslogikk og returnerer neste generasjon. 
    alleGenerasjoner.append(nyGenerasjon)
    # print(nyGenerasjon)
    visHistogram(nyGenerasjon, aar)



visHistogram(nyGenerasjon, aar)
visStorrelseKoloni(alleGenerasjoner, 0)




# *** --- *** TEST AV FUNKSJONER *** --- ***

def testSkapFugler(antall,printe):
   
    TestKoloni = skapFugler(antall)
    if printe:
        print('Lista inneholder:')
        for i in TestKoloni:
            print(i)
    print('I denne kolonien er det',antall, 'fugler')
    print(f'Største verdi er {max(TestKoloni)}')
    print(f'Laveste verdi er {min(TestKoloni)}')
    return TestKoloni

def testVisHistorgram(antall, printe):
    testKoloni = testSkapFugler(antall, printe)
    visHistogram(testKoloni)
    
def testPrintListe(liste):
    print('Skriver liste')
    for i in liste:
        print(i)
        
def fibonacci():
    gen1 = 1
    gen2 = 1
    alle = [gen1,gen2]
    # visHistogram(gen1)
    for år in range(10):
        # input(f'Generasjon {år+2}')
        ny = alle[-1]+alle[-2]
        alle.append(ny)
        # alleGenerasjon.append(nyGenerasjon)
        # visHistogram(nyGenerasjon)
    print(alle)



# testSkapFugler(100,0) #(antall fugler,printealt?)
# testVisHistorgram(1000,0) #(antall fugler,printealt?)
