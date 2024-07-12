import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrl: './update-player.component.css'
})
export class UpdatePlayerComponent implements OnInit {

  player=new Player();
  playerId:number=0;
  constructor(private service:PlayerService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
   
    this.playerId=this.route.snapshot.params['playerId'];

    this.service.searchPlayer(this.playerId).subscribe((data)=>{

        this.player=data;
    })
  }


  onSubmit(){
    this.updatePlayer();
  }

  updatePlayer()
  {
    this.service.updatePlayer(this.player).subscribe((data)=>{

        this.goToList();
    })
  }

  goToList(){
    this.router.navigate(['list']);
  }
}
