import { Player } from './player.model';
import { Subject} from 'rxjs';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 private players: Player [] = [];
 private updatedPlayers = new Subject<Player[]>();

  uri = 'http://localhost:8080';

 constructor (private httpClient: HttpClient) {

 }
  getPlayer() {
    this.httpClient.get(`${this.uri}/api/Player`);
    return [...this.players];
  }

  getPlayersUpdateListener() {
    return this.updatedPlayers.asObservable();
  }

  addPlayer(name: string, position: string, avgPoints: number) {
    const player: Player = {name: name, position: position, avgPoints: avgPoints};
    this.players.push(player);
    this.updatedPlayers.next([...this.players]);
    console.log('created player ' + player.name);
    return this.httpClient.post(`${this.uri}/api/Player`, player);

  }
}
