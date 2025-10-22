import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
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

  constructor(private router:Router) { }

  login(){
    console.log('login() called', { email: this.email, password: this.password });
    // simulate validation
    if(!this.email || !this.password){
      console.warn('Email o password vacíos');
      return;
    }
    this.router.navigate(['/home']).then(result => console.log('navigate result:', result)).catch(err => console.error('navigate error:', err));
  }
}
