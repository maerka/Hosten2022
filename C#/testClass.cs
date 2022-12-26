using System;
// The class
class Car
{
    // Class members
    public string model;// field - gives access outside of class
    int maxSpeed;       // field - private is default
    int year = 1990;
    public int fullThrottle() { //declare method
        Console.WriteLine("The car is running at " + maxSpeed + " km/h");
        return maxSpeed;
    }

    //Constructor
    public Car(string model2, int maxSpeed2)
    {
        model = model2;
        maxSpeed = maxSpeed2;
    }

    // Properties - give access to private variables
    public int MaxSpeed
    {
        get { return maxSpeed; }
        set { maxSpeed = value; }
    }
}



/* ACCESS MODIFIER
public 
    The code is accessible for all classes
private 
    The code is only accessible within the same class
protected 
    The code is accessible within the same class, or in a class that is inherited from that class. You will learn more about inheritance in a later chapter
internal 
    The code is only accessible within its own assembly, but not from another assembly. You will learn more about this in a later chapter
*/
