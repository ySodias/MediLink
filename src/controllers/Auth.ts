import { AuthGateway } from "@/gateways/AuthGateway";
import { IAuthController } from "@/interfaces/controllers/IAuthController";
import { IAuthGateway } from "@/interfaces/gateways/IAuthGateway";
import { IMedicoRepository } from "@/interfaces/repositories/IMedicoRepository";
import { IPacienteRepository } from "@/interfaces/repositories/IPacienteRepository";
import { IAuthUseCase } from "@/interfaces/useCases/IAuthUseCase";
import { AuthUseCase } from "@/useCases/AuthUseCase";
import { Response, Request } from "express";

export default class AuthController implements IAuthController {
    private authUseCase: IAuthUseCase;
    private authGateway: IAuthGateway;


    constructor(pacienteRepository: IPacienteRepository, medicoRepository: IMedicoRepository) {
        this.authGateway = new AuthGateway(pacienteRepository, medicoRepository);
        this.authUseCase = new AuthUseCase(this.authGateway);
    }

    async login(req: Request, res: Response) {

        const requestBody = req.body
        const { tipoUsuario } = req.params;

        if (!requestBody) {
            return res
                .status(400)
                .json({ message: "Error ao tentar efetuar login, body vazio" });
        }
        try {
            const response = await this.authUseCase.efetuarLogin(requestBody, tipoUsuario)
            return res
                .status(200)
                .json(response)
        } catch (error: any) {
            console.log(error)
        }
    }        
}