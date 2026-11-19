export interface User {
    firstName:string;
    middleName?:string;
    lastName: string
}

export function formatUserName (user: User): string{
    const firstName = user.firstName.trim();
    let middleName = user.middleName?.trim() || '';
    const lastName = user.lastName.trim();
    if( middleName

     ){
        return `${firstName} ${middleName[0]}. ${lastName}`
    }
    return `${firstName} ${lastName}`
}
