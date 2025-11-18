import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonFab, IonIcon, IonFabButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { arrowBackOutline } from 'ionicons/icons';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonFab, IonIcon, IonFabButton]
  ,providers: [ModalController]
})
export class PerfilPage implements OnInit {
  imagenCapturada: string | undefined;
  arrowBackOutline= arrowBackOutline;
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }
  async tomarFoto() {
    try {
      const foto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera

      })
      this.imagenCapturada = foto.dataUrl;
      console.log('foto tomada con exito', foto);
      console.log('imagen en dataurl:', this.imagenCapturada);
    } catch (error) {
      console.log('Error al tomar la foto', error);
    }

  }
  volver() {
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/home']);
  }
}
