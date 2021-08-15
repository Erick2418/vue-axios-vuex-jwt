// State
export interface UsersState{
    users:User[]
}
export interface AuthState{
    authUsu: authUsuario,
    loginUsuario:authLogin,
}

// Models
export interface User{

    firstname: string,
    fecha: string, 
    correo: string,
    telefono: string,
    sueldo: string, 
}
export interface authUsuario{
    email: string,
    password:string,
}
export interface authLogin{
    id: string,
    email:string,
}








