import {Component, signal, WritableSignal, Signal, viewChild} from '@angular/core';
import {NgClass} from '@angular/common';
import {SquaresComponent} from './squares/squares.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgClass,
    SquaresComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  protected board: WritableSignal<(Player | null)[]> = signal(Array(9).fill(null));
  protected currentPlayer: Player = Player.X;

  protected makeMove(index: number): void {
    if (!this.board()[index]) {
      this.board()[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    }
  }
}

enum Player {
  X = 'X',
  O = 'O'
}
