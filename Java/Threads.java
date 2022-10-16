    /* Java Thread Notes
    * BY: Angelo Rafael Recio
    */ 

    //Java is a multi-threading language. multiple components can be run.
    // 1ST WAY - to create Thread Class, just a class inherit it
class Loader extends Thread{
    public void run(){
        System.out.println("Hello, from class with inherited Thread");
    }
}
    // 2ND WAY - Implement a runnable interface
class Loader2 implements Runnable{
    public void run(){
        System.out.println("Hello, from class with implemented Runnable Interface");
    }
}

class Threads{
    public static void main(String[] args) {
        Loader t = new Loader();
        t.start();

        Thread s = new Thread(new Loader2());
        s.start();
    }
}