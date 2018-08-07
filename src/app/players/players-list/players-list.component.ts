import { PlayerService } from './../player.service';
import { Player } from '../player.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})

export class PlayerListComponent implements OnInit, OnDestroy {
 players: Player[] = [];
 private playserSubscription: Subscription;

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
