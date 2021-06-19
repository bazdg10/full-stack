import java.util.Scanner;

public class Main 
{	
	private static void calc ( int x ) {
    
    int count = 0;
    int lsb = -1;
    int msb = -1;
    int cur = 0;
    while(x!=0) {
    	if (x%2==1) {
        	count++;
            msb = cur;
       		if (lsb==-1) {
            lsb = cur;
            }
        }
      cur++;
      x /= 2;
    }  
    System.out.print(count + "#" + lsb + "#" + msb );
    }

    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
       	int n = sc.nextInt();
      	calc(n);
    }
}