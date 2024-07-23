export interface IAuthGateway {
    efetuarLogin(loginData: any, tipoUsuario: string): any;
}