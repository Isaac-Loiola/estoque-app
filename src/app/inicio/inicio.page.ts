import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonLabel, IonItem, IonList, IonInput, IonButton, ToastController } from '@ionic/angular/standalone';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonList, IonItem, IonLabel, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle, ReactiveFormsModule]
})
export class InicioPage implements OnInit {

  constructor(private toast: ToastController) { }

  produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.minLength(2), Validators.required]),
    quantidade: new FormControl('', [Validators.min(1), Validators.required]),
    valor: new FormControl('', [Validators.min(1), Validators.required]),
    unitario: new FormControl('', [Validators.min(1) ,Validators.required])
  });

  // adicionar o produto
  // adicionar na array
  // serializar
   async addProduto(){
    if(this.produtoForm.invalid){
      await this.showToastFalse();
      return;
    }
      const novoProduto = this.produtoForm.value; 
  
      const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
      produtos.push(novoProduto);
  
      localStorage.setItem('produtos', JSON.stringify(produtos));
  
      this.produtoForm.reset();

      await this.showToastTrue();
    
  }

  async showToastTrue(){
    const toast = await this.toast.create({
      message: 'Produto cadastrado com sucesso!',
      duration: 3000,
      color: 'success'
    })

    toast.present();
  }

  async showToastFalse(){
    const toast = await this.toast.create({
      message: 'Formulário inválido!',
      duration: 3000,
      color: 'light'
    })

    toast.present();
  }

  ngOnInit() {
  }

}
