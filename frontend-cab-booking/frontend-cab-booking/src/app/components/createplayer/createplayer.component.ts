import { Component } from '@angular/core';
import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrl: './createplayer.component.css'
})
export class CreateplayerComponent {

  constructor(private service:PlayerService){}
    submitted=false;

    player=new Player();

    onSubmit()
    {
      this.submitted=true;
      this.save();
    }

    save(){

        this.service.createPlayer(this.player).subscribe();
    }
}
