import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonFab, IonIcon, IonFabButton, IonItem } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { arrowBackOutline, mapOutline,locationOutline } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';

interface GPSLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonFab, IonIcon, IonFabButton, IonItem]
  , providers: [ModalController]
})
export class PerfilPage implements OnInit {
  mapOutline = mapOutline;
  locationOutline = locationOutline;
  imagenCapturada: string | undefined;
  ubicacion: GPSLocation | undefined;
  obteniendoUbicacion: boolean = false;
  arrowBackOutline = arrowBackOutline;

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
  async obtenerUbicacion() {
    this.obteniendoUbicacion = true;
    try {
      //const permisos = await Geolocation.requestPermissions();
      //if (permisos.location === 'granted') {
        const posicion = await Geolocation.getCurrentPosition(
          {
            enableHighAccuracy: true,
            timeout: 10000,
          }
        );
        this.ubicacion = {
          latitude: posicion.coords.latitude,
          longitude: posicion.coords.longitude, 
          accuracy: posicion.coords.accuracy,
          timestamp: posicion.timestamp
        }
        console.log('ubicacion onbtenida:', this.ubicacion);
      /*}else{
        console.log('permisos de ubicacion denegados');
        alert('Permisos de ubicacion denegados');
      }*/
    } catch (e) {
      console.log('Error al obtener la ubicacion', e);
    }finally{
      this.obteniendoUbicacion = false;
    }
  }
  obtenerEnlaceMaps() : string{
    if(this.ubicacion){
      return `https://www.google.com/maps?q=${this.ubicacion.latitude},${this.ubicacion.longitude}`;
    }
    return '';
  }
  volver() {
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/home']);
  }
}
