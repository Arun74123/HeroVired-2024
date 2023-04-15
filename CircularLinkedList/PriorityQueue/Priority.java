import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.concurrent.PriorityBlockingQueue;
public class Priority {
    static class myComparator implements Comparator<Integer> {
        @Override
        public int compare(Integer o1,Integer o2){
            int val1=o1;
            int val2=o2;
            if(val1<=val2)return 1;
            return -1;
        }
    }
    public static void main(String[] args) {
        PriorityQueue<Integer> myQueue=new PriorityQueue<>(new myComparator());
        myQueue.add(10);
        myQueue.add(20);
        myQueue.add(30);
        myQueue.add(40);
        print(myQueue);
        //lowest element will have highest priority
        System.out.println(myQueue.poll());
        System.out.println(myQueue.size());
        PriorityBlockingQueue<String> Q=new PriorityBlockingQueue<>();
        Q.add("a");
        Q.add("ab");
        Q.add("b");
        Q.add("ad");
        printQ(Q);
        System.out.println(Q.poll());
    }
    public static void printQ(PriorityBlockingQueue<String>Q){
        for(String e:Q){
            System.out.println(e+" ");
        }
    }
    public static void print(PriorityQueue<Integer> Queue){
        if(Queue.size()==0){
            System.out.println("Nothing to print");
        }
        for(int e:Queue){
            System.out.println(e+" ");
        }
        System.out.println();
    }
}
