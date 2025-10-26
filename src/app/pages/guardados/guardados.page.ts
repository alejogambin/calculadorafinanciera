import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent,IonFabButton, IonList,IonIcon,IonCardHeader,IonCardTitle,IonCardSubtitle,IonItem,IonCard,IonFab,IonLabel} from '@ionic/angular/standalone';
import { arrowBackOutline } from 'ionicons/icons';
import { DetallecalculomodalPage } from '../detallecalculomodal/detallecalculomodal.page';
@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule,IonFab, FormsModule,IonCard,IonCardTitle,IonList,IonFabButton,IonCardHeader,IonCardSubtitle,IonItem,IonLabel,IonIcon],
  providers: [ModalController]
})
export class GuardadosPage implements OnInit {
arrowBackOutline= arrowBackOutline;
  ngOnInit() {
  }
  calculos: any[] = [];

  constructor(private modalCtrl: ModalController, private router: Router) {}

  ionViewWillEnter() {
    this.cargarCalculos();
  }

  cargarCalculos() {
    this.calculos = JSON.parse(localStorage.getItem('calculosGuardados') || '[]');
  }

  async abrirDetalle(item: any) {
    const modal = await this.modalCtrl.create({
      component: DetallecalculomodalPage,
      componentProps: { calculo: item }
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (role === 'updated' || role === 'deleted') {
      this.cargarCalculos(); // refrescar lista
    }
  }
  volver(){
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/home']);
  }

}
