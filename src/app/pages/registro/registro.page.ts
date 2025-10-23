import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonContent,
  IonNote,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
 imports: [
    CommonModule, 
    IonNote,
    ReactiveFormsModule,
    FormsModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonFooter,
    IonGrid,
    IonRow,
    IonCol
  ],
})
export class RegistroPage implements OnInit {
  name: string = '';
  email: String='';
  password: string = '';
  age: number | null = null;
  form: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder,private router: Router, ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(1)]],
    });
   }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      // Aquí puedes emitir, guardar o enviar los datos
      console.log('Datos enviados:', data);
    }
  }

  onCancel() {
    console.log('registro cancelado');
    this.router.navigate(['/login']);
  }

  get f() {
    return this.form.controls;
  }
  ngOnInit() {
  }
  
}
