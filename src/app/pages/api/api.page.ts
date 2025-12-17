import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
interface Usuario {
  id_user: number; 
  rut: String;
  nombre: String;
  apellido: String;
  email: String; 
  password: String;
}
@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem,IonLabel]
})
export class ApiPage implements OnInit {
  usuarios: Usuario[] = [];
  cargando: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios(){
    this.cargando = true;
    const apiUrl = 'http://localhost:8080/usuario/json';//http://10.0.2.2:8080 para emulador android
    this.http.get<Usuario[]>(apiUrl).subscribe({
      next: (respuesta) =>{
        this.usuarios = respuesta;
        this.cargando = false;
        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (err)=> {
        console.error('Error al cargar usuarios:', err);
        this.cargando = false;
      }

    });
  }
}
