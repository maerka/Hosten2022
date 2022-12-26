// See https://aka.ms/new-console-template for more information

// https://www.w3schools.com/cs/cs_variables.php

//IMPORTANT Entire program is called by the method learnBasics()
// learnBasics(); //Uncomment to run program
static void learnBasics()
{


    // PRINT AND INPUT
    /*Console.WriteLine("Hello, World!");

    Console.WriteLine("Press any key to proceed");
    Console.ReadKey();  

    string myInput = Console.ReadLine();
    Console.WriteLine("You wrote " + myInput);
    */

    // DATA TYPES
    // https://www.tutorialsteacher.com/csharp/numbers

    // IF ELSE
    int num1 = 60;
    int num2 = 32;
    Console.WriteLine("num1: " + num1 + "\nnum2: " + num2);
    if (num1 > num2)
    {
        Console.WriteLine(num1 + " is bigger than " + num2);
    }
    else if (num2 > num1)
    {
        Console.WriteLine(num2 + " is bigger than " + num1);
    }
    else
    {
        Console.WriteLine("They are equal: " + num1);
    }

    // SHORT IF ELSE
    // https://www.tutorialsteacher.com/csharp/csharp-ternary-operator
    int time = 20;
    string result = (time < 18) ? "Good day." : "Good evening.";
    Console.WriteLine(result);

    int num3 = num1 < num2 ? num1 : num2;
    Console.WriteLine("num3: writes: " + num3);

    string smallest = num1 < num2 ? "num 1 is smallest" : num2 < num1 ? "num 2 is smallest" : "They are equal";
    Console.WriteLine(smallest);


    // SWITCH
    int x = 10;
    switch (x)
    {
        case 5:
            Console.WriteLine("Value of x is 5");
            break;
        case 10:
            Console.WriteLine("Value of x is 10");
            break;
        case 15:
            Console.WriteLine("Value of x is 15");
            break;
        default:
            Console.WriteLine("Unknown value");
            break;
    }

    // FOR LOOP
    Console.WriteLine("\nLOOOOOPS");
    for (int i = 2; i <= 16; i += 2)
    {
        Console.WriteLine(i);
        // Console.WriteLine(3.4f);
        if (i == 8)
        {
            Console.WriteLine("i = 8");
            break;
        }
    }

    Console.WriteLine("\nFloat loop");
    for (float i = 2.0f; i <= 4; i += 0.2f)
    {
        Console.WriteLine(String.Format("{0:0.00}", i));
        Console.WriteLine(String.Format("{0:0.##}", i));
        // Man bør ikke sammenligne floats da de har avrundingsfeil. Kommer ikke inn i løkka
        // Console.WriteLine(3.4f);
        if (i == 3.4f)
        {
            Console.WriteLine("i = 3.4");
            break;
        }
    }

    // FOREACH
    string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
    foreach (string i in cars)
    {
        Console.WriteLine(i);
    }

    // WHILE LOOP
    //https://www.w3schools.com/cs/cs_arrays.php
    int j = 5;
    Console.WriteLine("\nwhile loop");
    while (j < 10)
    {
        Console.WriteLine(j);
        j++;
    }


    // ARRAYS
    Console.WriteLine("\nArrays");
    string[] car = { "Skoda", "Toyota" }; //Creates a new array and sets the values
    Console.WriteLine("Length of array:" + car.Length);

    car = new string[] { "Volvo", "BMW", "Ford", "Mazda" }; //Overwrite array. Must use new string because it is an object???
    Console.WriteLine("New values in the array are: " + car);
    Console.WriteLine("car[2]: " + car[2]); // writes out Ford


    for (int l = 0; l < car.Length; l++)
    {
        Console.WriteLine(car[l]);
    }


    string[] carLot = new string[5]; //Allocates a new array of size 5.
    foreach (string k in carLot)
    { // carLot is empty, thus it writes out nothing. 
        Console.WriteLine(k);
    }

    int[] numbers1D = { 1, 2, 3, 4, 5 };
    int[,] numbers2Da = { { 1, 2, 3, 4, 5 }, { 2, 4, 6, 8, 10 } };
    int[,] numbers2Db = { { 5, 10, 15, 20, 25 }, { 7, 14, 21, 28, 35 } };
    int[][] numbers2Dc = { numbers1D, numbers1D }; //  compiles with int[][]... but not with int[,]
    int[,] numbers2Dd = new int[2, 5] { { 1, 2, 3, 4, 5 }, { 2, 4, 6, 8, 10 } }; // compiles
                                                                                 //int[,] numbers2De = new int[2, 5] { numbers1D, numbers1D }; //does not work

    Console.WriteLine("numbers2Da[0, 4]: " + numbers2Da[0, 4]);
    Console.WriteLine("numbers2Da[1, 2]: " + numbers2Da[1, 2]);


    int[,,] numbers3Da = { { { 1, 2, 3, 4, 5 }, { 2, 4, 6, 8, 10 } }, { { 5, 10, 15, 20, 25 }, { 7, 14, 21, 28, 35 } } }; //compiles
    int[,,] numbers3Db = new int[2, 2, 5] { { { 1, 2, 3, 4, 5 }, { 2, 4, 6, 8, 10 } }, { { 5, 10, 15, 20, 25 }, { 7, 14, 21, 28, 35 } } }; //compiles
    int[][,] numbers3Dc = { numbers2Da, numbers2Db }; //compiles
    int[][,] numbers3Dd = new int[][,] { numbers2Da, numbers2Db }; //compiles

}


Car car1 = new Car("Mustang", 270);
Car car2 = new Car("Octavia", 170);


Console.WriteLine(car1.model);
Console.WriteLine(car1.fullThrottle());
car2.MaxSpeed = 320; //max speed is accessed by using properties
Console.WriteLine("Max speed of car 2 is "+car2.MaxSpeed);