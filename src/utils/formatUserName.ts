interface User {
    firstName:string;
    middleName?:string;
    lastName: string
}

export function formatUserName (user: User): string{
    const firstName = user.firstName.trim();
    let middleName = user.middleName?.trim() || '';
    const lastName = user.lastName.trim();
    if( middleName ){
        return `${firstName} ${middleName[0]}. ${lastName}`
    }
    return `${firstName} ${lastName}`
}
console.log(formatUserName({ firstName: "Aditya", lastName: "Rawas" }));
// "Aditya Rawas"

console.log(formatUserName({ firstName: "Aditya", middleName: "Chandrakant", lastName: "Rawas" }));
// "Aditya C. Rawas"

console.log(formatUserName({ firstName: "  Aditya ", lastName: " Rawas  " }));
// "Aditya Rawas"

console.log(formatUserName({ firstName: "Aditya", middleName: "   ", lastName: "Rawas" }));
// "Aditya Rawas"