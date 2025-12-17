import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import {
  calculatorOutline,
  walletOutline,
  mailOutline,
  lockClosedOutline,
  keyOutline,
  logInOutline
} from 'ionicons/icons';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
interface Usuario {
  id_user: number;
  rut: String;
  nombre: String;
  apellido: String;
  email: String;
  password: String;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonText
  ]
})
export class LoginPage {
  errorMessage: string = '';
  // Iconos para el logo
  calculatorIcon = calculatorOutline;
  walletIcon = walletOutline;

  // Iconos para el formulario
  mailIcon = mailOutline;
  lockIcon = lockClosedOutline;
  loginIcon = logInOutline;

  // Iconos para recuperación de contraseña
  keyIcon = keyOutline;

  // Campos del formulario
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }
  usuarios: Usuario[] = [];

  ngOnInit() {
    this.cargarUsuarios();
  }
  async login() {
    //  validation
    this.errorMessage = '';
    (document.activeElement as HTMLElement)?.blur();
    if (!this.email || !this.password) {
      this.errorMessage = 'Email o password vacíos';
      return;
    }

    if (!this.usuarios || this.usuarios.length === 0) {
      try {
        await this.cargarUsuariosAsync();
      } catch {
        this.errorMessage = 'No se pudo conectar con el servidor';
        return;
      }
    }
    // 1) Buscar usuario por email
    const user = this.usuarios.find(
      u => (u.email || '').toLowerCase().trim() === this.email.toLowerCase().trim()
    );

    if (!user) {
      this.errorMessage = 'Usuario no encontrado';
      return;
    }

    // 2) Comparar password
    const stored = String(user.password || '');
    const typed = String(this.password);

    let ok = false;

    // Si parece bcrypt, usar compare
    const pareceBcrypt = stored.startsWith('$2a$') || stored.startsWith('$2b$') || stored.startsWith('$2y$');

    if (pareceBcrypt) {
      ok = await bcrypt.compare(typed, stored);
    }

    if (!ok) {
      this.errorMessage = 'Contraseña incorrecta';
      return;
    }

    // Login OK
    console.log('Login OK:', user.email);

    this.router.navigate(['/home']);
  }
  register() {
    console.log('Navigating to registro page');
    this.router.navigate(['/registro']);
  }
  cargarUsuarios() {

    const apiUrl = 'http://localhost:8080/usuario/json';//http://10.0.2.2:8080 para emulador android
    this.http.get<Usuario[]>(apiUrl).subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta;

        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);

      }

    });
  }
  cargarUsuariosAsync(): Promise<void> {
    const apiUrl = 'http://localhost:8080/usuario/json'; // emulador android

    return new Promise((resolve, reject) => {
      this.http.get<Usuario[]>(apiUrl).subscribe({
        next: (respuesta) => {
          this.usuarios = respuesta || [];
          console.log('Usuarios cargados:', this.usuarios.length);
          resolve();
        },
        error: (err) => {
          console.error('Error al cargar usuarios:', err);
          reject(err);
        }
      });
    });
  }
}
