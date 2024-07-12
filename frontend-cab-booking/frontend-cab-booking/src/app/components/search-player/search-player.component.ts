import { Component } from '@angular/core';
import { Player } from '../../models/Player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrl: './search-player.component.css'
})
export class SearchPlayerComponent {

    player:Player=new Player();
  playerId:number=0;

    constructor(private route:ActivatedRoute,private service:PlayerService,private router:Router){}
    ngOnInit()
    {
      this.player=new Player();
      this.playerId=this.route.snapshot.params['playerId'];

      this.service.searchPlayer(this.playerId).subscribe((data)=>{

        console.log(data);
        this.player=data;
      })
    }

}
