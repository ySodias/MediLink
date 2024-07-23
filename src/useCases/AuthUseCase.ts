import { IAuthGateway } from "@/interfaces/gateways/IAuthGateway";
import { IAuthUseCase } from "@/interfaces/useCases/IAuthUseCase";
import { UsuarioLogado } from "@/models/usuario/UsuarioLogado";



var jwt = require('jsonwebtoken');

export class AuthUseCase implements IAuthUseCase {
    private authGateway: IAuthGateway;

    constructor(authGateway: IAuthGateway) {
        this.authGateway = authGateway;
    }

    async efetuarLogin(loginData: any, tipoUsuario:string): Promise<UsuarioLogado> {
        try {
            const usuario = await this.authGateway.efetuarLogin(loginData, tipoUsuario)
            const expAt =  Math.floor(Date.now() / 1000) + (60 * 60)
            const dataExpAt = new Date(expAt * 1000)
            const token = jwt.sign({ 
                nome: usuario.Usuario.nome,
                exp: expAt
            }, process.env.PRIVATE_PEM);
            const usuarioResponse: UsuarioLogado = {
                nome: usuario.Usuario.nome,
                token: token,
                dataExpiracao: dataExpAt
            }
            return usuarioResponse;
        } catch (error) {
            // Lide com erros ou exceções, se necessário.
            throw error;
        }
    }
    async validarLogin(){}
}
