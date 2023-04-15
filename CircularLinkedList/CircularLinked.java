public class CircularLinked {
    static class Node{
        int value;
        Node next;
        Node(int val){
            this.value=val;
        }
    }
    public static void main(String [] args){
        int [] arr={2,3,4,6,6,7,8};
        Node start;
        Node add;
        start=converttoCircularList(arr);
        printCircularList(start);
        add=addtoStart(1,start);
        printCircularList(add);
        Node addAfter;
        addAfter=addafter(4,5,start);
        printCircularList(add);

    }
    public static Node addafter(int val1,int val2,Node start){
        Node temp=start;
        while(temp.value!=val1){
            temp=temp.next;
        }
        Node l;
        l=temp.next;
        Node value2=new Node(val2);
        temp.next=value2;
        temp=temp.next;
        temp.next=l;
        return start;
    }
    public static void printCircularList(Node start){
        Node temp1=start;
        if(temp1==null){
            System.out.print("Nothing to print");
        }
        while(temp1.next!=start){
            System.out.print(temp1.value+" ");
            temp1=temp1.next;
        }
        System.out.println(temp1.value);
        System.out.println();
    }
    public static Node converttoCircularList(int [] arr){
        Node temp=null;
        Node start=temp;
        for(int i=0;i<arr.length;i++){
            int val=arr[i];
            if(i==0){
                temp=new Node(val);
                temp.next=start;
                start=temp;
            }
            else{
                temp.next=new Node(val);
                temp=temp.next;
                temp.next=start;
            }
        }
        return start;
    }
    public static Node addtoStart(int val,Node start){
         Node temp2=start;

         if(temp2==null){
             Node n=new Node(val);
             temp2=n;
             return start;
         }
         while(temp2.next!=start){
            temp2=temp2.next;
         }
         Node nn=new Node(val);
         nn.next=start;
         temp2.next=nn;
         start=nn;
         return start;
     }
 }