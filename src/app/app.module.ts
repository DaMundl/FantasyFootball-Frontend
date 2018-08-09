import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayersCreateComponent } from './players/players-create/players-create.component';
import { HeaderComponent} from './header/header.component';
import { PlayerListComponent } from './players/players-list/players-list.component';
import { PlayerService } from './players/player.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatTableModule,
} from '@angular/material';


@NgModule({
  declarations: [AppComponent, PlayersCreateComponent, HeaderComponent, PlayerListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
