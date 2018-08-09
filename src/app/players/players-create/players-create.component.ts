import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.css']
})

export class PlayersCreateComponent {

  playerPostitions: string[] = [
    'QB', 'RB', 'WR', 'CB', 'LB', 'S'
  ];

  nameInput: string;
  positionInput: string;
  avgPointsInput: number;

  constructor(public playersService: PlayerService) { }

  onPlayerAdd(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.playersService.addPlayer(this.nameInput, this.positionInput, this.avgPointsInput);
    form.resetForm();
  }

}
