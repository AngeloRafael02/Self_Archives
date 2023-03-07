
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

    //CONTROL FLOWS
    let mut number = 69;
    // if statement
    if number > 60 && number < 70 {
        println!("Number is in the 60 range");
    } else if number > 70 {
        println!("Number is in the above 60 range");
    } else {
        println!("Number is in the above 60 range");
    }
    // loop
    let _loop_result = loop { //snakecase in declaring loop variable name
        number += 1 ;
        println!("{number}");
        if number == 75 {
            break number*2; // retunr value of loop variable
        }
    };
    println!("{_loop_result}");
    // Conditional Loops
    while number != 80 {
        println!("{number}");
        number += 1;
    }
    // loop through Collection
    let array2 = [1,2,3,4,5];  
    for element in array2 {
        println!("Value: {element}");
    }
    // loop through collection 2nd syntax
    for number in (1..4).rev() { //.rev() reverses the order of Collection
        println!("{number}!");
    }


    // OWNERSHIP NOTES
    let var1 = String::from("Hello");
    let var2 = var1; // to save memory, duplicate variables with the same exact value will only share the value instead of duplicating it 
        //var1 cannot be used anymore
        //for some reason this only happened in String Variables;
    println!("{}",var2);
        // tho you can use .clone() to use both variables though it may cost performance
    let var3 = String::from("Hi");
    let var4 = var3.clone();
    println!("{} , {}",var3,var4);
        // other Data Types except String has a "copy" trait. Therefore does not have to deal with some Ownership restrictions
        // Data Types that have a copy trait:
        // Integers, Booleans, Floats, Chars, Tuples with variables with copy traits
    let var5:i32 = 5;
    let var6:i32 = 6;
    println!("{} , {}",var5,var6);
        // Rust does let us return multiple values using a tuple
    let s1 = String::from("nice");
    let (s2,s2len) = returns_tuples(s1);
    println!("word:{}, length:{}",s2,s2len);

    //REFERENCING - when 
    let len = return_length(&var3); // & <- reference / borrow a value already owned
    println!("{}",len);
}

fn returns_tuples(s:String)->(String, usize){
    let length = s.len();
    (s, length)
}
fn return_length(s:&String)->usize{
    s.len()
}

