import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable(

)
export class PeticionesService{

    //buscamos el Url de la pagina
    public urlApi:String="";
    
  
    //Se crea el constructor y se inyecta el servicio Http

    constructor(

        private _http:HttpClient
        
    ){
        this.urlApi="http://localhost:8080"


    }

    // creamos un metodo
    getUser():Observable<any>{       
        
       var request= "/listarClientes"
       var url=this.urlApi+request
       return this._http.get(url)

    }

    getCliente(id:String):Observable<any>{

        var reques="/buscarCliente/"+id
        var url=this.urlApi+reques
        return this._http.get(url)
    }



}