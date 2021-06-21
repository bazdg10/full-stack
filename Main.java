
class H1 {

    public void method() throws Exception {
        System.out.println("hackerearth");
    }
    

}

class H2 extends H1 {
    //public void run() {
    //    System.out.println("Hi");
    //}

    public void method() throws Exception {
        System.out.println("helloWrld");
    }
}

public class Main{
	public static void main(String[] args) {
        H2 h = new H2();
        try {
            h.method();
        } catch (Exception e) {
            System.out.println("Hello");
        } finally {
            System.out.println("hi");
        }
        
	}
}

