const names = ["Alice", "Bob", "Charlie"];

names.forEach(function(s){
    console.log(s.toLocaleLowerCase())
});

type Point = { x: number; y: number }

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

printCoord({ x: 3, y: 7 });          // ✅
// printCoord({ x: 3 });                // ❌ Property 'y' is missing
// printCoord({ x: "3", y: 7 });        // ❌ Type 'string' is not assignable to type 'number'
// printCoord({ x: 3, y: 7, z: 1 });    // ❌ Object literal may only specify known properties


// OPTIONAL

function name(first:string, last?:string){
    console.log(`${first} ${last}`)
}

name("Aditya")
name("Aditya", "Rawas")


function printName(obj: {first:string; last?:string}){
    console.log(`${obj.first} ${obj.last}`)
}

printName({first:"Aditya"})
printName({first:"Aditya", last: "Rawas"})

function printId(id:
    | number 
    | string) {
    console.log(id)
}

printId(234)
printId("234")


// Narrowing

function id(id: number | string){
    if( typeof id === 'string'){
        console.log(id.toLowerCase())
    }else{
        console.log(id)
    }
}

id(234)
id("234")

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}


// TO BE CONTINUED