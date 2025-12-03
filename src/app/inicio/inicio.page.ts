import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonLabel, IonItem, IonList, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonList, IonItem, IonLabel, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
