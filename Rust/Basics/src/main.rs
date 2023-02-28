
fn main() {
    println!("Hi Rust!");

    // This is a comment

    /*This is a 
    multiline comment */

    let a = 12; //variables are immutable by default
    let mut b = 16; // add "mut" to make it mutable
    const C:i32 = 20; // const cannot be modified by "mut", Variable must be CAPITALIZED and has types, can be declared in the global scope
    println!("{C}");
    println!("{} & {} ", a, b);
    b = 18;

    // OUTPUT SYNTAX:
    println!("{} & {} ", a, b);
    println!("{a} & {b}");
    // SHADOWING: Overshadowing variables by re-declaring variables with new values
    let d = 5;
    let d = d+1;
    {
        let d = d+2;
        println!("d value in inner Scope = {d}");
    }
    println!("Original value of d = {d}");

    // DATA TYPES - you can add types to make it safe
    let guess:u32 = "42".parse().expect("Not a number");
    println!("{guess}");        
    /*  TYPES
        Integer types in rust:
        LENGTH      SIGNED      UNSIGNED
        8-bit       i8          u8
        16-bit      i16         u16
        32-bit      i32         u32
        64-bit      i64         u64
        128-bit     i128        u128
        arch        isize       usize

        FLOAT
            32-bit  f32
            64-bit  f64
        BOOLEAN     bool
        CHARACTER   char
        TUPLE       tup
        ARRAY       [type;number]
     */
    // ARRAY
    let array1:[i32;5] = [1,2,3,4,5];
    println!("{:?}",array1);      
    println!("{}",array1[2]);      
    println!("{}",array1.len());
    for val in array1.iter(){
        println!("value is : {}",val);
    }
    let last = array1[array1.len()-1];
    println!("{}",last); 

    //FUNCTIONS
    //Syntax:
    fn say_hello(name:&str)->&str{ //function names must be snake case
        println!("Hello! {name}");
        return name; 
    }
    say_hello("Angelo");
    println!("{}",say_hello("Angelo"));
}
