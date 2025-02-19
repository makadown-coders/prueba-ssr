import { SimpleMedicamento } from "./simple-medicamento.interface";

export interface MedicamentoApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: SimpleMedicamento[];
  }