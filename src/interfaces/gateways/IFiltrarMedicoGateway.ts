export interface IFiltrarMedicoGateway {
    filtrarMedicoByCrm(crm: string): Promise<any>;
    filtrarMedico(): Promise<any>;
}
