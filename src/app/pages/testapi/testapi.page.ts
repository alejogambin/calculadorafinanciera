import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
/*
"title": "Overwatch 2",
"thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
"short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
"game_url": "https://www.freetogame.com/open/overwatch-2",
"genre": "Shooter",
"platform": "PC (Windows)",
"publisher": "Activision Blizzard",
"developer": "Blizzard Entertainment",
"freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
*/
interface apiResponse {
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  freetogame_profile_url: string;
}

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.page.html',
  styleUrls: ['./testapi.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonLabel]
})
export class TestapiPage implements OnInit {
  apiresponse: apiResponse[] = [];
  cargando: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.cargando = true;
    const apiUrl = 'https://www.freetogame.com/api/games';
    this.http.get<apiResponse[]>(apiUrl).subscribe({
      next: (respuesta) => {
        this.apiresponse = respuesta;
        this.cargando = false;
        console.log('datos cargados:', this.apiresponse);
      },
      error: (error) => {
        console.error('error al cargar los datos', error);
        this.cargando = false;
      }
    })
  }
}
