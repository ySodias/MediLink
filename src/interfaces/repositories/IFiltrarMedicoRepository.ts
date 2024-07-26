export interface IFiltrarMedicoRepository {
    getFiltrarMedicoByCrm(crm: string): Promise<any>;
    getFiltrarMedico(): Promise<any>;
}
