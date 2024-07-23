export interface IAuthUseCase {
    efetuarLogin(loginData: any, tipoUsuario:string): any;
}