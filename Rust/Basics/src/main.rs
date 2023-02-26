
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
    // SHADOWING: Overshadowing variables by redeclaring variables with new values
    let d = 5;
    let d = d+1;
    {
        let d = d+2;
        println!("d value in inner Scope = {d}");
    }
    println!("Original value of d = {d}");
}
