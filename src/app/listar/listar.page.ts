import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonItem, IonList, IonListHeader, IonCardHeader, IonCardTitle, IonLabel, ActionSheetController, AlertController, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonList, IonItem, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent, IonListHeader, IonLabel, IonIcon]
})
export class ListarPage implements OnInit {

  constructor(private actionsheetCtrl: ActionSheetController, private alert: AlertController) { }

  produtos: any[] = [];

  // Evento load


  ionViewWillEnter(){
    this.loadProdutos();
  }

  loadProdutos() {
    const data = localStorage.getItem('produtos');
    this.produtos = data ? JSON.parse(data) : [];
  }

  async editarProduto(produto: any, index: number) {
    const alertEdit = await this.alert.create({
      header: 'Editar Produto',
      inputs: [
        { name: 'nome', type: "text", placeholder: produto.nome },
        { name: 'quantidade', type: 'number', placeholder: produto.quantidade },
        { name: 'valor', type: 'number', placeholder: produto.valor },
        { name: 'unitario', type: 'number', placeholder: produto.unitario }
      ],
      buttons: [
        {
          text: 'Editar ' + produto.nome, handler: (produtos) => {
            
            // this.produtos[index] = 
          }
        },
        {
          text: 'Cancelar', role: 'cancel'
        }
      ]
        
    });
    alertEdit.present();
  }

  ngOnInit() {
  }

}
