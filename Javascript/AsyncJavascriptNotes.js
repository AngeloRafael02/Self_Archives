    //Async Javascript Notes
    //By: Angelo Rafael Recio

    //javascript function are executed by the order they ar called, not the sequence they are defined
function madeFirst(){
    console.log("hi");
}
function madeSecond(){
    console.log("hello");
}
madeSecond();//madeFirst was "read" first but madeSeconds was called first
madeFirst();


    //JAVASCRIPT CALLBACKS: a call back is a function passed as an argument to another function.
let stocks = {
    Fruits: ["strawberry","grapes","bananas","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate", "peanuts"]
};
// 1st Function
let order = (fruit_name, call_production) =>{
    setTimeout(function(){
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
    // Order placed. Call production to start
        call_production();
    },2000)
    };
    // 2nd Function
    let production = () =>{
        setTimeout(()=>{
          console.log("production has started")
          setTimeout(()=>{
            console.log("The fruit has been chopped")
            setTimeout(()=>{
              console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
              setTimeout(()=>{
                console.log("start the machine")
                setTimeout(()=>{
                  console.log(`Ice cream placed on ${stocks.holder[1]}`)
                  setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} as toppings`)
                    setTimeout(()=>{
                      console.log("serve Ice cream")
                    },2000)
                  },3000)
                },2000)
              },1000)
            },1000)
          },2000)
        },0000)   
      };
    // Trigger 👇
//order(0, production);
    //THIS IS CALLED CALLBACK HELL, we dont want that
    //thats why we use PROMISES to escape callback Hell
    //Previous function but in Promises format: using same stocks variables
let is_shop_open = false;
let order1 = ( time, work ) => {
    return new Promise( ( resolve, reject )=>{
        if( is_shop_open ){
        setTimeout(() => {
            resolve(work() )
        }, time);
        }
        else{
            reject( console.log("Our shop is closed") )
        }
    })
    }
    //Function was called here -V
order1(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{return order(0000,()=>console.log('production has started'))})
.then(()=>{return order(2000,()=>console.log("Fruit has been chopped"))})
.then(()=>{return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))})
.then(()=>{return order(1000,()=>console.log("start the machine"))})
.then(()=>{return order(2000,()=>console.log(`ice cream placed on ${stocks.holder[1]}`))})
.then(()=>{return order(3000,()=>console.log(`${stocks.toppings[0]} as toppings`))})
.then(()=>{return order(2000,()=>console.log("Serve Ice Cream"))})
.catch(()=>{console.log("Customer left")}) //catch procs when the reject() function is proced
.finally(()=>{console.log("end of day\n")}) //finally is called after when either the resolve() or the reject() is called
    
    // ASYNC,AWAIT:
function time(ms) {

    return new Promise( (resolve, reject) => {

        if(is_shop_open){
            setTimeout(resolve,ms);
        }

        else{
            reject(console.log("Shop is closed"))
        }
    });
}
async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
    
        await time(0000)
        console.log("production has started")
    
        await time(2000)
        console.log("fruit has been chopped")
    
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    
        await time(1000)
        console.log("start the machine")
    
        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)
    
        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)
    
        await time(2000)
        console.log("Serve Ice Cream")
        }
    
        catch(error){
            console.log("customer left")
        }
    finally{
        console.log("Day ended, shop closed")
        }
    }
    
    // Trigger
//kitchen();

    //ASYNCHRONOUS 
setTimeout(function(){delayed("I'm Delayed");}, 3000); //use SetTimeout to delay a function or event for a certain amount of time
function delayed(value){
    console.log(value);
}

setInterval(time, 1000); // Use SetInterval to loop a certain event for a certain amount of time
function time(){
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
