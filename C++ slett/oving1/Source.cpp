#include <iostream>
using namespace std;

// oppg A)
int max(int a, int b) {
	if (a > b) {
		std::cout << "A is greater than B" << std::endl;
		return a;
	}
	else {
		std::cout << "B is greater than A " << std::endl;
		return b;
	}
}


// oppg C)
int fibonacci(int n) {
	int a = 0;
	int b = 1;
	std::cout << "Fibonacci numbers:" << std::endl;
	for (int x = 1; x < n + 1; x++) {
		std::cout << x <<" "<< b << std::endl;
		int temp = b;
		b += a;
		a = temp;
	}
	std::cout << "----" << std::endl;
	return b;
	}


//oppg D)
int squareNumberSim(int n) {
	int totalSum = 0;
	for (int i = 0; i < n; i++) {
		totalSum += i*i;
		std::cout << i*i << std::endl;
		}
	std::wcout << totalSum << std::endl;
	return totalSum;
	}

//oppg E)
void triangleNumbersBelow(int n) {
	int acc = 1;
	int num = 2;
	std::cout << "Triangle numbers below " << n << ":" << std::endl; //Hva gjør 'sep="" '?
	while (acc < n) {
	std::cout << acc << std::endl;
		acc += num;
		num += 1;
	}
	std::cout <<" "<< std::endl; // Hvorfor er denne tomme i python tilstede?
}


//oppg F)
bool isPrimeness(int n) {
	bool primeness = true;
	for (int j = 2; j < n; j++) {
		if (n%j == 0) {
			primeness = false;
				break;
		}
	}	
	return primeness;
	}


//oppg G)
void naivePrimeNumberSearch(int n) {
	for (int number = 2; number < n; number++) {
		if (isPrimeness(number)) {
			std::cout<< number << "is a prime" << std::endl;
		}
	}
}


//oppg H)
int findGreatestDivisor(int n) {
	for (int divisor = n - 1; divisor > 0; divisor--) {
		if (n%divisor == 0) {
			return divisor;
		}
	}
}

//main
int main() {
	//oppg A)
	std::cout << "Oppgave A):" << std::endl;
	std::cout << max(6, 8) << std::endl;
	//oppg C)
	std::cout << "Oppgave C):" << std::endl;
	std::cout << fibonacci(21)<< std::endl;
	//oppg D)
	std::cout << "Oppgave D):" << std::endl;
	squareNumberSim(5);
	//oppg E)
	std::cout << "Oppgave E):" << std::endl;
	triangleNumbersBelow(50);
	//oppg F)
	std::cout << "Oppgave F):" << std::endl;
	std::cout << isPrimeness(22) << std::endl;
	//oppg G)
	std::cout << "Oppgave G):" << std::endl;
	naivePrimeNumberSearch(23);
	//oppg H)
	std::cout << "Oppgave H):" << std::endl;
	std::cout << findGreatestDivisor(28) << std::endl;

	
}