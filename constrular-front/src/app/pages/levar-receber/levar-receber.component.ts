import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConsultarService } from '../../services/consultar.service';
import { IData } from '../../models/IData.interface';
import { LevarReceberCardsComponent } from "../../coponents/levar-receber-cards/levar-receber-cards.component";
import { ILevarReceber } from '../../models/ILevarReceber.interface';
import { IFormLevarReceber } from '../../models/IFormLevarReceber.interface';

@Component({
  selector: 'app-levar-receber',
  imports: [ReactiveFormsModule, LevarReceberCardsComponent],
  templateUrl: './levar-receber.component.html',
  styleUrl: './levar-receber.component.css'
})
export class LevarReceberComponent implements OnInit, OnChanges {

  formLevarReceber!: FormGroup;

  levarReceberLista: Array<ILevarReceber> = [];

  datas!: IData;

  situacoes = [
    { id: 'F', value:  'Fechada'},
    { id: 'P', value: 'Processada' },
    { id: 'C', value: 'Cancelada' },
  ];

  constructor(private fb: FormBuilder, private consultarService: ConsultarService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.formLevarReceber = this.fb.group({
      datas: this.fb.group({
        dataInicial: new FormControl(this.receberDataAtual(),),
        dataFinal: new FormControl(this.receberDataAtual(),),
      }), 
      situacao: new FormControl('F',),
    });    
  }
   enviarLevarReceber() {
    const dados:IFormLevarReceber = this.formLevarReceber.value;
    console.log(dados.datas);
    
    this.consultarService.enviarLevarReceber(dados).subscribe({
      next: (res)=>{
        this.levarReceberLista.push(res); 
        this.datas = {
          dataInicial: dados.datas.dataInicial,
          dataFinal: dados.datas.dataFinal,
        } as IData;
        console.log('Levar e receber enviado com sucesso!'); 
      },
      error: (error) => {
        console.error('Erro ao enviar Levar e Receber:', error);
      }
    });
    this.levarReceberLista = [];
    
  }

  cleanForm(){
    this.formLevarReceber.reset({
      dataInicial: this.receberDataAtual(),
      dataFinal: this.receberDataAtual(),
      situacao: 'F',
    });
  }
  receberDataAtual(): string {
    return new Date().toISOString().split('T')[0];;
  }

  get datasFormGroup(): FormGroup{
    return this.formLevarReceber.get('datas') as FormGroup;
  }

}