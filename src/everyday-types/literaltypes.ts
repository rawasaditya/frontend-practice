const contantString = "constant"
let changingString = "changeable"
console.log(typeof contantString)

let x: "specific" | "another" = "specific"

// x= "sdf" Error: Type '"sdf"' is not assignable to type '"specific" | "another"'.
