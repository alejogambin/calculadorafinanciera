import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import {
  calculatorOutline,
  walletOutline,
  logInOutline,
  mailOutline,
  lockClosedOutline,
  keyOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonInput,
    IonItem,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonText
  ]
})
export class LoginPage implements OnInit {
  
  // Iconos para el logo
  calculatorIcon = calculatorOutline;
  walletIcon = walletOutline;

  // Iconos para el formulario
  mailIcon = mailOutline;
  lockIcon = lockClosedOutline;
  loginIcon = logInOutline;

  // Iconos para recuperación de contraseña
  keyIcon = keyOutline;



  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/home']);
  }
}
