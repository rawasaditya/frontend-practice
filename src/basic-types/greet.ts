function greet(person:string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
let name:any = "Alice";
greet(name, new Date());