import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-miboton',
  standalone: true,
  imports: [],
  templateUrl: './miboton.component.html',
  styleUrl: './miboton.component.css'
})
export class MibotonComponent {
  @Input() texto: string = 'Botón';
  @Input() color: string = 'blue';
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    this.clickEvent.emit();
  }
}
