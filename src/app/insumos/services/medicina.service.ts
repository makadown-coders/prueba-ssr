import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs'; 
import { MedicamentoApiResponse, SimpleMedicamento } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicinaService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  // Create behavior subject to store the simpleMedicamentos array
  private _simpleMedicamentos$ = new BehaviorSubject<SimpleMedicamento[]>([]);
  public simpleMedicamentos$ = this._simpleMedicamentos$.asObservable();
  

  constructor() { }

  public loadPage(page: number): Observable<SimpleMedicamento[]> {
    if(page > 0){
      --page;
    }

    page = Math.max(0, page);

    return this.http.get<MedicamentoApiResponse>(`${this.baseUrl}/medicamentos?offset=${page*20}&limit=20`)
             .pipe(
                map(response => {
                  const simpleMedicamentos: SimpleMedicamento[] = response.results.map(medicamento => ({
                    id: medicamento.id,
                    categoria: medicamento.categoria,
                    tomo: medicamento.tomo,
                    grupoTerapeutico: medicamento.grupoTerapeutico,
                    nombreGenerico: medicamento.nombreGenerico,
                    clave: medicamento.clave,
                    formula: medicamento.formula,
                    formaFarmaceutica: medicamento.formaFarmaceutica,
                    presentacionEnvase: medicamento.presentacionEnvase,
                    indicaciones: medicamento.indicaciones,
                    viaAdministracionDosis: medicamento.viaAdministracionDosis,
                    generalidades: medicamento.generalidades,
                    riesgoEmbarazo: medicamento.riesgoEmbarazo,
                    reaccionesAdversas: medicamento.reaccionesAdversas,
                    contraindicacionesPrecauciones: medicamento.contraindicacionesPrecauciones,
                    interacciones: medicamento.interacciones
                  }));
                  this._simpleMedicamentos$.next(simpleMedicamentos);
                  return simpleMedicamentos;
                }),
                
             );
  }

  public loadMedicamento(id: number): Observable<SimpleMedicamento> {
    return this.http.get<SimpleMedicamento>(`${this.baseUrl}/medicamentos/${id}`);
  }

}
