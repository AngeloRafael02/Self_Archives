/* Java Other Notes
 * BY: Angelo Rafael Recio
 */ 

public class Others {
    static int divide(int a, int b) throws ArithmeticException{
        //throws = keyword that tells what exceptions are going to be thrown in the method
        if(b==0){
            throw new ArithmeticException("Division by Zero");
            //throw  - keyword used to manually generate exceptions from your methods
        } else{
            return a / b;
        }
    }
    public static void main(String[] args){
        //EXCEPTION HANDLING - Exceptions can be caught using the try-catch block
        // Exception types: checked(checked when compiling), unchecked(checked on runtime)
        try { 
            //try - this is where the actual code is placed
            int a[] = new int[2];
            
            System.out.println(divide(43,0));

        } catch (ExceptionInInitializerError e) { 
            //catch  - this is where the flow of the program goes when an error occurs. 
            // this is where the error are handles
            System.out.println(e);
        } catch (ArithmeticException AnotherE){
            //catch blocks can be repeated and nested depending on the exceptions
            System.out.println(AnotherE);
        } finally {
            //finally -  a block that executes code and doesn't care if the try-catch work well or had an exception
            System.out.println("Finally black has been executed.");
        }
    }
}
