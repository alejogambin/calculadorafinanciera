import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard , IonButton, IonCardHeader,IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HomePage {
  constructor() {}
}
