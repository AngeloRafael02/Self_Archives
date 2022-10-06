public class Others {
    public static void main(String[] args){
        //EXCEPTION HANDLING - Exceptions can be caught using the try-catch block
        try { 
            //try - this is where the actual code is placed
            int a[] = new int[2];
            System.out.println(a[5]);
        } catch (Exception e) { 
            //catch  - this is where the flow of the program goes when an error occurs. 
            // this is where the error are handles
            System.out.println(e);
        } finally{
            //finally -  a block that executes code and doesn't care if the try-catch work well or had an exception
            System.out.println("Finally black has been executed.")
        }
    }
}
