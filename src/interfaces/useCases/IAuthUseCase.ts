export interface IAuthUseCase {
    efetuarLogin(loginData: any, tipoUsuario:string): any;
    validarLogin(req: any, res: any): any;
}