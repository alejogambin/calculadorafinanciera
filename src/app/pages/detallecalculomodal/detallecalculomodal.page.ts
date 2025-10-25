import { Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detallecalculomodal',
  templateUrl: './detallecalculomodal.page.html',
  styleUrls: ['./detallecalculomodal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallecalculomodalPage implements OnInit {
  ngOnInit() {
  }
  @Input() calculo: any;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

  actualizar() {
    const calculos = JSON.parse(localStorage.getItem('calculosGuardados') || '[]');
    const index = calculos.findIndex((c: any) => c.id === this.calculo.id);
    if (index !== -1) {
      calculos[index] = this.calculo;
      localStorage.setItem('calculosGuardados', JSON.stringify(calculos));
    }
    this.modalCtrl.dismiss(null, 'updated');
  }

  eliminar() {
    const calculos = JSON.parse(localStorage.getItem('calculosGuardados') || '[]');
    const filtrados = calculos.filter((c: any) => c.id !== this.calculo.id);
    localStorage.setItem('calculosGuardados', JSON.stringify(filtrados));
    this.modalCtrl.dismiss(null, 'deleted');
  }

}

