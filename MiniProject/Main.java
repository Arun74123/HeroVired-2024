import java.util.*;
import java.io.*;
public class Main {
    public class MyThread extends Thread{
        String role1="cook";
        String role2="customer";
        int numberofCustomers=100,capacity=50;
        @Override
        public void run(){
            
        }
    }
    public static void main(String[] args) {
        /* "Creating a Restaurant Simulation Application where we have two roles customer and cook.
     When all cooks are busy , the next order should wait util there are some machines free and when
     the number of customers is equal to the capacity,the next customer should wait until there is someone 
     finishing his meal and leaving." 
     */ 
    Thread customer=new Thread();
    customer.start();
    Thread cook=new Thread();
    cook.start();      
    }
}
