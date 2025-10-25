import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { arrowBackOutline } from 'ionicons/icons';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    IonIcon,
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonButton
  ]
})
export class CalculadoraPage implements OnInit {
  arrowBackOutline = arrowBackOutline;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  tipoCalculo: string | null = null;

  // Préstamo
  montoPrestamo: number | null = null;
  interesPrestamo: number | null = null;
  plazoPrestamo: number | null = null;

  resultado: string | null = null;

  calcular() {
    if (this.tipoCalculo === 'prestamo' && this.montoPrestamo && this.interesPrestamo && this.plazoPrestamo) {
      const tasaMensual = this.interesPrestamo / 100 / 12;
      const cuota = (this.montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -this.plazoPrestamo));
      const total = cuota * this.plazoPrestamo;
      this.resultado = `Cuota mensual: $${cuota.toFixed(2)}\nTotal a pagar: $${total.toFixed(2)}`;
    } else {
      this.resultado = 'Por favor completa todos los campos necesarios.';
    }
  }
  volver() {
    this.router.navigate(['/home']);
  }
  guardarCalculo() {
    if (this.resultado) {
      const registro = {
        tipo: this.tipoCalculo,
        fecha: new Date().toISOString(),
        resultado: this.resultado
      };

      const guardados = JSON.parse(localStorage.getItem('calculosGuardados') || '[]');
      guardados.push(registro);
      localStorage.setItem('calculosGuardados', JSON.stringify(guardados));

      console.log('✅ Cálculo guardado:', registro);
    }
  }
  guardarCalculoEnguardados() {
    if (this.resultado) {
      const registro = {
        id: crypto.randomUUID(), // genera un ID único
        tipo: this.tipoCalculo,
        fecha: new Date().toISOString(),
        datos: {
          monto: this.montoPrestamo,
          interes: this.interesPrestamo,
          plazo: this.plazoPrestamo
        },
        resultado: this.resultado
      };

      const guardados = JSON.parse(localStorage.getItem('calculosGuardados') || '[]');
      guardados.push(registro);
      localStorage.setItem('calculosGuardados', JSON.stringify(guardados));
    }
  }
}

