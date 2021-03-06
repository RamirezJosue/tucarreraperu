import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class VocationalTestService {

  constructor(
    private http: HttpClient
  ) { }

  crearParticipante(participante :any) {
    return this.http.post(`${base_url}/usuarios`, participante);
  }

  cargarPreguntas() {
    return this.http.get(`${base_url}/preguntas`);
  };
  cargarTests(page: number) {
    return this.http.get(`${base_url}/preguntas/tests?page=${page}`);
  };

  // Crear nueva pregunta
  crearPregunta(pregunta: any) {
    // console.log(pregunta);
    // const formData: any = new FormData();
    // formData.append('pregunta', pregunta.pregunta);
    // formData.append('img', pregunta.img);
    return this.http.post(`${base_url}/preguntas`, pregunta);
  }


  actualizarPregunta(pregunta: any) {
    // console.log('servicio',pregunta);
    // const formData: any = new FormData();
    // formData.append('pregunta', pregunta.pregunta);
    // formData.append('img', pregunta.img);
    return this.http.put(`${base_url}/preguntas/${pregunta.id}`, pregunta);
  }

  borrarPregunta(id: string) {
    return this.http.delete(`${base_url}/preguntas/${id}`);
  }


  /**
   * CRUD respuesta
   */
  crearRespuesta(id: string, respuesta: any) {
    return this.http.put(`${base_url}/preguntas/respuesta/${id}`, respuesta);
  }

  actualizarRespuesta(respuesta: any) {
    return this.http.put(`${base_url}/preguntas/respuesta/${respuesta.pid}/${respuesta._id}`, respuesta);
  }

  borrarRespuesta(pid: string, rid: string) {
    return this.http.delete(`${base_url}/preguntas/respuesta/${pid}/${rid}`);
  }

  /**
   * Cargar carreras
   */

   cargarCarreras() {
     return this.http.get(`${base_url}/carreras`);
   }

}
