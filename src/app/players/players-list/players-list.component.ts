import { PlayerService } from './../player.service';
import { Player } from '../player.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';


const testData: Player [] = [{
  name: 'Tom Brady', position: 'QB', avgPoints: 3.2},
  {name: 'Darren Sproles', position: 'RB', avgPoints: 5.5}
 ];

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})

export class PlayerListComponent implements OnInit, OnDestroy {
 players: Player[] = [];
 private playserSubscription: Subscription;

  displayColums: string [] = ['name', 'position', 'avgPoints'];
  playerBase: Player[] = this.players;

 constructor (public playerService: PlayerService) { }

 ngOnInit () {
    this.players = this.playerService.getPlayer();
    this.playserSubscription = this.playerService.getPlayersUpdateListener().subscribe((players: Player[]) => {
      this.players = players;
    });
 }

 ngOnDestroy() {
   this.playserSubscription.unsubscribe();
 }
}
