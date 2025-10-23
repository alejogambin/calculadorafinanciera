import { Component } from '@angular/core';
import { IonIcon,IonTabBar,IonTabButton,IonTabs,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {folderOpenOutline,calculatorOutline } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon,IonTabBar,IonTabButton,IonTabs,IonHeader, IonToolbar, IonTitle, IonContent, IonCard , IonButton, IonCardHeader,IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HomePage {
  constructor() {
    addIcons({folderOpenOutline,calculatorOutline});
  }
}
