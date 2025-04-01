import { Component, Input } from '@angular/core';
import { ILevarReceber } from '../../models/ILevarReceber.interface';
import { ValueIsNullPipe } from '../../pipes/value-is-null.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [ValueIsNullPipe, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() inputCardContent: ILevarReceber | null = null;
}
