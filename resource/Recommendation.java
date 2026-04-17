import java.util.ArrayList;
import java.util.Collections;
public class Recommendation {

    //Can and will probably condense the amount of arguments in both generate and recommend
    public static ArrayList<Restaurant> recommend(ArrayList<Restaurant> restaurants,double location, double cuisine,
                                 double ratings, int available, double price, int preferred_price, 
                                 ArrayList<String> fav, ArrayList<String> res, boolean filRes, boolean filFamily){
        generate(restaurants,location,cuisine,ratings,available,price,preferred_price,fav,res,filRes,filFamily);
        sort(restaurants,0,restaurants.size()-1);
        Collections.reverse(restaurants);
        return restaurants;
    }
    private static void sort(ArrayList<Restaurant> list, int l, int r) {
        if (l < r){
            int m = l + (r - l) / 2;
            sort(list,l,m);
            sort(list,m+1,r);
            merge(list,l,m,r);
        }
    }

    private static void merge(ArrayList<Restaurant> list, int l, int m, int r){
        int s1 = m - l + 1;
        int s2 = r - m;
        ArrayList<Restaurant> l1 = new ArrayList<>();
        ArrayList<Restaurant> l2 = new ArrayList<>();

        for (int i = 0; i < s1;i++){
            l1.add(list.get(l + i));
        }
        for (int i = 0; i < s2;i++){
            l2.add(list.get(m + i + 1));
        }

        int a = 0;
        int b = 0;
        int c = l;
        while(a < s1 && b < s2){
            if (l1.get(a).getScore() <= l2.get(b).getScore()){

                list.set(c,l1.get(a));
                a++;
            } else {
                list.set(c,l2.get(b));
                b++;

            }
            c++;
        }
        while (a < s1){
            list.set(c,l1.get(a));
            a++;
            c++;
        }
        while (b < s2){
            list.set(c,l2.get(b));
            b++;
            c++;
        }
    }

    //Needs some balancing
    private static void generate(ArrayList<Restaurant> r, double loc, double cui,
                                double rat, double ava, double pri, int pre, ArrayList<String> fav, 
                                 ArrayList<String> res, boolean filterRestrictions, boolean familyFriendly){
        for (int i = 0;i<r.size();i++) {

            double prob = 0;
            if (filterRestrictions){
                for (int j = 0; j<res.size();j++){
                    prob += r.get(i).matchRes(res.get(j));
                }
            }
            prob += (loc) / (r.get(i).getDistance()*2.75);
            if (fav.contains(r.get(i).getCuisine())) {
                prob += cui*1.5;
            }
            if (r.get(i).getAvailable() == 1) {
                prob += ava*.4;
            }
            prob += (r.get(i).getRatings() / 5.0) * rat * 1.4;
            switch (Math.abs(pre - r.get(i).getPrice())){
                case 0:
                    prob += pri;
                    break;
                case 1:
                    prob += 0.85*pri;
                    break;
                default:
                    prob += 0.7*pri;
                    break;
            }
            if (familyFriendly && r.get(i).getFamily()){
                prob += 1.3;
            }
            r.get(i).setScore(prob);
        }
    }




}
