import java.util.*;
class Missing{
    public static void main(String [] args){
        Scanner sc=new Scanner(System.in);
        int n;
        n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }
        int j=1;
        for(int i=0;i<n;i++){
            if(a[i]==j){
                j++;
            }
            else{
                while((j)!=a[i]){
                    System.out.print((j)+" ");
                    j++;
                }
                j++;
            }
        }
    }
}