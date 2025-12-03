import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonItem, IonList, IonListHeader, IonCardHeader, IonCardTitle, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonList, IonItem, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent, IonListHeader, IonLabel]
})
export class ListarPage implements OnInit {

  constructor() { }

  produtos: any[] = [];

  // Evento load


  ionViewWillEnter(){
    this.loadProdutos();
  }

  loadProdutos() {
    const data = localStorage.getItem('produtos');
    this.produtos = data ? JSON.parse(data) : [];
  }

  ngOnInit() {
  }

}
