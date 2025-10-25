import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DetallecalculomodalPage } from '../detallecalculomodal/detallecalculomodal.page';
@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GuardadosPage implements OnInit {

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

}
