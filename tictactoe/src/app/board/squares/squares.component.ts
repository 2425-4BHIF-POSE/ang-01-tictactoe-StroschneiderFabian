import {
  Component,
  Input,
  Output,
  EventEmitter,
  InputSignal,
  input,
  Signal,
  viewChild,
  signal,
  output, OutputEmitterRef
} from '@angular/core';
import {BoardComponent} from '../board.component';

@Component({
  selector: 'app-squares',
  standalone: true,
  imports: [],
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.scss'
})
export class SquaresComponent {
   // public readonly value: InputSignal<Player | null> = input.required();
  @Input() value: 'X' | 'O' | null = null;
  public readonly onClicked: OutputEmitterRef<void> = output();

  protected handleClicked(): void {
    if (!this.value) {
      this.onClicked.emit();
    }
  }
}

enum Player {
  X = 'X',
  O = 'O'
}
