import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  
  controle = true;

  msg: string = "Passaro";
  img: string = "https://img.olhardigital.com.br/wp-content/uploads/2021/11/uber-ss.jpg";
  



  
  pessoa = {
    nome: "Mario Abreu",
    idade: 56
  };

  
  pessoaCaixa = [
    {nome:  "Maria Silva", idade: 23, altura: 1.70},
    {nome: "Leo dos Anjos", idade: 56, altura: 1.80},
    {nome: "Gabi Alves", idade: 17, altura: 1.60}
  ];

  
  
  clicou(){
   

    this.controle ? this.msg = "Agora sou 99" : this.msg = "Agora eu sou uber";
    this.controle ? this.img = "https://www.infomoney.com.br/wp-content/uploads/2023/01/864871DB-4C89-4964-B8C7-6DDE04FF1932.png?resize=916%2C515&quality=50&strip=all" : this.img = "https://img.olhardigital.com.br/wp-content/uploads/2021/11/uber-ss.jpg";

    return this.controle = !this.controle;

  }

  
}
