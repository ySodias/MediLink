export interface IAuthGateway {
    efetuarLogin(loginData: any, tipoUsuario: string): any;
    validarLogin(req: any, res: any): any;
}