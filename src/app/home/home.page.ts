import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {
  calculatorOutline,
  folderOpenOutline,
  personCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent
  ],
})
export class HomePage {
  calculatorIcon = calculatorOutline;
  folderIcon = folderOpenOutline;
  profileIcon = personCircleOutline;
  constructor(private router: Router) { }
  calculadora() {
    (document.activeElement as HTMLElement)?.blur();
    console.log("Navegando a calculadora");
    this.router.navigate(['/calculadora']);
  }
  guardados() {
    (document.activeElement as HTMLElement)?.blur();
    console.log("Navegando a guardados");
    this.router.navigate(['/guardados']);
  } 
  perfil(){
    (document.activeElement as HTMLElement)?.blur();
    console.log("Navegando a perfil");
    this.router.navigate(['/perfil']);
  }
}
