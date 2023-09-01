import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from 'src/app/service/peticiones.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [PeticionesService]
})
export class ClientComponent implements OnInit {
  public usuarioBusqueda: any[] = []; // Cambiado a una matriz de usuarios
  public lista: boolean = false;
  public listaCliente:boolean=false;
  public id: string = '';
  public usuario: any;

  constructor(
    private _service: PeticionesService,
    private _activeR: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  capturarNombre(id:String) {
    this.encontrarCliente(this.id);
  }

  listarClientes() {
    this.lista = true;
    this._service.getUser().subscribe(
      (res) => {
        this.usuario = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  abrirCliente(){
  this.listaCliente=true;
  }



  encontrarCliente(id: string) {

  
    this._service.getCliente(id).subscribe(
      (res) => {
        this.usuarioBusqueda = [res]; // Cambiado a un array con un solo elemento
        console.log(this.usuarioBusqueda);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // todos
  salirListaClientes() {
    this.lista = false;
  }
  //uno
  salirListaCliente(){
    this.listaCliente=false;
  }
}
