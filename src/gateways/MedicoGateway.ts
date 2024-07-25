import { IMedicoGateway } from "@/interfaces/gateways/IMedicoGateway";
import { IMedicoRepository } from "@/interfaces/repositories/IMedicoRepository";
import { Medico } from "@/models/usuario/Medico";

export class MedicoGateway implements IMedicoGateway {
    private medicoRepository: IMedicoRepository;
    constructor(medicoRepository: IMedicoRepository) {
        this.medicoRepository = medicoRepository
    }

    async buscaMedicoByCrm(crm: string): Promise<Medico> {
        const medico = await this.medicoRepository.getMedicoByCrm(crm)
        return medico
    }
}