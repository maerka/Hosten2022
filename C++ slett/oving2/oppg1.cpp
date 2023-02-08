#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

//************ OPPGAVE 1 ************

//oppg A)
void inputAndPrintInteger() {
	int tall = 0;
	cout << "Skriv inn et tall:" << endl;
	cin >> tall;
	cout << "Du skrev: " << tall << endl;
}

//oppg B)
int inputInteger() {
	int tall = 0;
	cout << "Skriv inn et tall:" << endl;
	cin >> tall;
	return tall;
}

// oppg C)
void inputIntegersAndPrintSum() {
	int tall1 = inputInteger();
	int tall2 = inputInteger();
	int sum = tall1 + tall2;
	cout <<"Summen av tallene: "<< sum << endl;


}

// oppg E)
bool isOdd(int tall) {
	if (tall % 2 == 0) {
		return false;
	}
	else {
		return true;
	}
}

//oppg F)
void printHumanReadableTime(int sekunder) {
	/* Deler først inn i timer. Finner så resten av timene ved %. Resten av timene deles 
	inn i minutter. Minuttene deles inn i sekunder. */

	int timer = sekunder / 3600; 
	int restTimer = sekunder % 3600;
	int minutter = restTimer / 60;
	int restMinutter = restTimer % 60;


	cout << "Sekunder inn: " << sekunder << endl;
	cout << "timer: " << timer << endl;
	cout << "minutter: " << minutter << endl;
	cout << "sekunder: " << restMinutter << endl;
}


//************ OPPGAVE 2 og 3 ************

//oppg 2A)
void inputIntegersUsingLoopAndPrintSum() {
	cout << "Skriv inn antall tall som skal summeres. Skriv 0 hvis du \nikke vil angi paa forhand antall ledd eller vil avslutte:" << endl;
	int antall;
	cin >> antall;
	int sum = 0;

	if (antall != 0) { //Her er det gitt hvor mange ledd som kommer. Da er forløkke best.
		for (int i = 0; i < antall; i++) {
			int nyttTall = inputInteger(); //funksjonen lar bruker taste inn et tall.
			sum += nyttTall;
			}
		}

	else{
		int nyttTall = 1; //Sjekker om skal gå inn i løkke
			while (nyttTall != 0) {
				nyttTall = inputInteger(); //funksjonen lar bruker taste inn et tall.
				sum += nyttTall;
				}
		/*Her er det IKKE gitt hvor mange ledd som kommer.
		Da er whileløkke best fordi man i utgangspunktet kan holde på i uendeligheten.*/
		}
	cout << sum << endl;
	}

//oppg 2C) 
double inputDouble() {
	double tall;
	cout << "Skriv inn et desimaltall:" << endl;
	cin >> tall;
	return tall;
	}

// oppg 2D)
void konertereValuta() {
	cout << "Skriv inn hvor mange NOK" << endl;
	double NOK = inputDouble();
	while (NOK < 0) {
		NOK = inputDouble();
		}
	double euro = NOK / 9.64;
	cout << NOK << " norske kroner = " <<fixed<<std::setprecision(2)<< euro << "euro." << endl;
	}	
/* oppg 2E) Om man bruker inputInteger så får man tilbake et heltall. Vi skal i oppgD jobbe med desimaltall.
Men kan man ikke bare konvertere til desimaltall? */


// oppg 3B)
void gangetabell() {
	//Angir bredde og høyde
	cout << "Skriv inn hoyde :" << endl;
	int hoyde = inputInteger();
	cout << "Skriv inn bredde:" << endl;
	int bredde = inputInteger(); 

	//Skriver selve gangetabell
	for (int i = 1; i < bredde + 1; i++) {
		for (int j = 1; j < hoyde + 1; j++) {
			int rekkeElement = i*j;
			cout << rekkeElement << "\t";
			}
		cout << endl;
		}
	}



//************ OPPGAVE 4 ************
// oppg 4A)
double discriminant(double a, double b, double c) {
	return pow(b, 2) - 4 * a*c;
	}


//oppg 4B)
void printRealRoots(double a, double b, double c) {
	double diskriminant = discriminant(a, b, c);

	if (diskriminant > 0) {
		double losning1 = (-b + sqrt(diskriminant)) / (2 * a);
		double losning2 = (-b - sqrt(diskriminant)) / (2 * a);
		cout << "Likningen har to losninger: \nx1 = " << losning1 << "og x2 = " << losning2 << endl;
		//return (losning1, losning2);
		}
	else if (diskriminant == 0) {
		double losning1 = (-b + sqrt(diskriminant)) / (2 * a);
		cout << "Likningen har en losning: x = " << losning1 << endl;
		//return losning1;
		}
	else {
		cout << "Likningen har ingen reellse losninger" << endl;
		//return 0;
		}
	}


// oppg 4C)
void solveQuadricEquation() {
	cout << "Skriv inn 3 desimaltall a,b og c:" << endl;
	double tall1 = inputDouble();
	double tall2 = inputDouble();
	double tall3 = inputDouble();
	printRealRoots(tall1, tall2, tall3);
	}



//************ OPPGAVE 5 ************
// oppg A)
void calculateLoanPayments() {
	//Angir først lånebeløp og rente
	cout << "Skriv inn laanebelop:";
	int laan;
	cin >> laan;
	cout << "Skriv inn rente i prosent:";
	double renteProsent;
	cin >> renteProsent;
	double rente = renteProsent / 100;
	int antallAar = 10;
	double avdrag = laan / antallAar;

	//Regner så ut gjenstående = restbeløp og total innbetaling
	cout << "Aar \tInnbetaling \tGjenstaaende laan" << endl;
	double restlaan = laan;
		for (int i = 1; i < antallAar +1; i++) {
			double renteBetaling = restlaan * rente; //Rente å betale regnet ut fra gjenstående beløp
			restlaan -= avdrag; //Nedbetaling av selve lånet
			double innbetaling = avdrag + renteBetaling; //total innbetaling
			cout << i << "\t" << innbetaling << "\t\t" << restlaan << endl;
	}
	


}



//************ MAIN ************
void main() {
	//**************OPPG 1*****************
	bool finished = false;
	char c = ' ';
	while (!finished) {
		cout << "***OPPGAVE 1*** \nSkriv a for oppg a, b for oppg b osv., q for avslutte." << endl;
		cin >> c;
		switch (c) {
		case 'a':
			inputAndPrintInteger();
			break;
		case 'b': {
			int tall = inputInteger();
			cout << "Du skrev: " << tall << endl;
		}
				  break;
		case 'c':
			inputIntegersAndPrintSum();
			break;
		case 'd':
			/*Bruker inputInteger fordi den returnerer en verdi.
			Den andre printer bare og tallene man taster inn kan ikke brukes*/
		case 'e':
			cout << isOdd(2) << endl;
			break;
		case 'f':
			printHumanReadableTime(4000);
			break;

		case 'q':
			finished = true;
			break;
		default:
			cout << "***ugyldig valg***\n";


			}
		}
	//***************OPPG 2****************

	bool ferdig = false;
	char valg = ' ';
	while (!ferdig) {
		cout << "***OPPGAVE 2*** \nVelg funksjon:\n0) Avslutt \n1) Summer to tall \n2) Summer flere tall" << endl;
		cout << "3) Konverter NOK til EURO \n4) Gangetabell \nVelg 1,2,3 eller 0"  << endl;
		cin >> valg;
		switch (valg) {
		case '1':
			inputIntegersAndPrintSum();
			break;
		case '2':
			inputIntegersUsingLoopAndPrintSum();
			break;
		case '3':
			konertereValuta();
			break;
		case '4':
			gangetabell();
			break;
		case '0':
			ferdig = true;
			break;
		default:
			cout << "***ugyldig valg***\n"<<endl;
		}
	}

	//***************OPPG 4 og 5 ****************
	cout << "***OPPGAVE 4***" << endl;
	solveQuadricEquation();
	cout << "***OPPGAVE 5***"<<endl;
	calculateLoanPayments();
}