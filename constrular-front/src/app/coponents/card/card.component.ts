import { Component, Input } from '@angular/core';
import { ILevarReceber } from '../../models/ILevarReceber.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() inputCardContent: ILevarReceber | null = null;
}
