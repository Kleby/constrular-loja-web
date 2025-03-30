import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ILevarReceber } from '../../models/ILevarReceber.interface';
import { IData } from '../../models/IData.interface';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-levar-receber-cards',
  imports: [CardComponent],
  templateUrl: './levar-receber-cards.component.html',
  styleUrl: './levar-receber-cards.component.css'
})
export class LevarReceberCardsComponent implements OnInit, OnChanges {

  @Input({required: true}) inputlevarReceber: Array<ILevarReceber> = [];
  @Input() datas: IData = {dataInicial: '', dataFinal: ''};

  listaLevarReceber: Array<ILevarReceber> = [];

  @Output() abrirModal:EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    try {
      console.log("Alteração nos inputs realizada com sucesso! ", changes)
    } catch (e) {
      console.error('Erro ao alterar os inputs:', e);
      throw new Error('Method not implemented.');
    }
  }

  ngOnInit(): void {
    this.listaLevarReceber = this.inputlevarReceber.flat().map(lr =>({
      ...lr,
      VEN_SITUACAO: this.AdicionarNomeEmSituacao(lr.VEN_SITUACAO)
    }));  
    this.datas.dataInicial = this.datas.dataInicial.replace(/(\d{4})-(\d{2})-(\d{2})/ , "$3/$2/$1")
    
  }

  abrirModalEmit() {
    this.abrirModal.emit(true);
    
  }

  fecharModalEmit(){
    this.abrirModal.emit(false);
  }

  AdicionarNomeEmSituacao(s: any){
     switch(s){
       case 'P': return 'Processada';
         case 'F': return 'Fechada';
         case 'C': return 'Cancelada';
         default: return '';   
  }  
}
}