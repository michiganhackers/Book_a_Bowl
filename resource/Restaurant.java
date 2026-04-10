import java.util.ArrayList;

public class Restaurant{
String cuisine;
String name;
double distance;
int available;
double ratings;
double price;
double score;
String[] restrictions;
boolean family;
public Restaurant(String n, String c, double d, int a, double r, double p, String[] res, boolean f){
    name = n;
    cuisine = c;
    distance = d;
    available = a;
    ratings = r;
    price = p;
    restrictions = res;
    family = f;
}
public double getDistance(){
    return distance;
}
public int getAvailable(){
    return available;
}
public double getRatings(){
    return ratings;
}
public int getPrice(){
    return (int) price;
}
public String getCuisine(){
    return cuisine;
}
public String getName(){
    return name;
}
public void setScore(double s){
    score = s;
}
public double getScore(){
    return score;
}
public boolean getFamily() {return family;}

public double matchRes(String rest) {
    for (int i = 0; i < restrictions.length; i++){
        if (rest.equals(restrictions[i])){
            return 1.5;
        }
    }
    return 0;
}
//


}
