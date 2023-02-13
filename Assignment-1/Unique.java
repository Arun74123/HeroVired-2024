import java.util.*;
class Unique{
    public static void main(String [] args){
        Scanner sc=new Scanner(System.in);
        int n;
        n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }
        HashMap<Integer,Integer>hm=new HashMap<>();
        for(int i=0;i<n;i++){
            if(!hm.containsKey(a[i])){
                hm.put(a[i],1);
            }
            else{
                hm.put(a[i],hm.get(a[i])+1);
            }
        }
        for(Map.Entry m : hm.entrySet()){    
            System.out.print(m.getKey()+" ");
        }
    }
}
    