import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent  implements OnInit{

  
  constructor(    

  ){ 

    //this.inicio= new Inicio('','','','','')// Se dejan vacios para luego rellenarlos con el formulario

    //Peticione AJAX Y HTTP
   //this.userId=1;

  }
  ngOnInit(): void {
  

      
  }


  onSubmit(form :any){
   
  }
  // Buscar por el Id
 
}
