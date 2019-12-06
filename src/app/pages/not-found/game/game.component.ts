import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { Enemy } from '../models/enemy.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  V1n8L4nc : Player;
  hugoACasserLeGit : Enemy[];
  ctx : CanvasRenderingContext2D;
  EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier : boolean = false;
  CeMatinMoiEtAymericOnAEteAAuchanDeguiseEtOnADitBonjourAuPereNoel : number = 0;
  bestScore : number = 0;
  constructor() {
  }

  ngOnInit() {
    this.V1n8L4nc = new Player(0,300-50,0);
    this.hugoACasserLeGit = [];
    var canvas : any = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    setInterval(e => {
      if(!this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier) this.update();
    }, 10);
    setInterval(e => {
      if(!this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier) this.hugoACasserLeGit.push(new Enemy(1100, 300-50, -5));
    }, 2000);
    canvas.addEventListener('keypress', e => {
      this.keyDown(e);
    }, true);
    canvas.addEventListener('keyup', e => {
      this.keyRelease(e);
    });
    canvas.addEventListener('click', e => {
      if(this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier) this.restart();
    });
    canvas.focus();
    this.V1n8L4nc.render(this.ctx);
  }

  keyDown(e){
    if(!(this.V1n8L4nc.y < 300-this.V1n8L4nc.height)) this.V1n8L4nc.vit = -5;
  }

  keyRelease(e){
      this.V1n8L4nc.vit = 5;
      if(this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier) this.restart();
  }

  update(){
    this.V1n8L4nc.y += this.V1n8L4nc.vit;
    this.V1n8L4nc.y = this.constrain(this.V1n8L4nc.y, 0, 300-this.V1n8L4nc.height);
    if(this.V1n8L4nc.y == 0) this.V1n8L4nc.vit = 5;
    for(let i = 0; i < this.hugoACasserLeGit.length; i++){
      let e = this.hugoACasserLeGit[i];
      e.x += e.vit;
      if(e.x + e.width < 0) this.hugoACasserLeGit.splice(i,1);
    }
    this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier = this.isCollision();
    this.render();
    if(this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier) this.gameover();
    this.CeMatinMoiEtAymericOnAEteAAuchanDeguiseEtOnADitBonjourAuPereNoel++;
  }

  gameover(){
    if(this.CeMatinMoiEtAymericOnAEteAAuchanDeguiseEtOnADitBonjourAuPereNoel > this.bestScore) this.bestScore = this.CeMatinMoiEtAymericOnAEteAAuchanDeguiseEtOnADitBonjourAuPereNoel;
    this.ctx.font = '24px serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('Perdu Rayman, pas de bras, pas de chocolat', 275, 50);
    this.ctx.font = '48px serif';
    this.ctx.fillText('Restart', 445, 200);
    this.ctx.font = '24px serif';
    this.ctx.fillText('Meilleur Score : ' + this.bestScore, 10, 70);
  }

  restart(){
    this.V1n8L4nc = new Player(0,300-50,0);
    this.hugoACasserLeGit = [];
    this.EnplusAymericEstDeguiseEnYoshiDepuisLeDebutDeLaNuitDeLInfoDoncFranchementSaFaitChier = false;
    this.CeMatinMoiEtAymericOnAEteAAuchanDeguiseEtOnADitBonjourAuPereNoel = 0;
  }

  constrain(value : number, min : number, max : number){
    if(value < min) return min;
    if(value > max) return max;
    return value;
  }

  isCollision(){
    for(let i = 0; i < this.hugoACasserLeGit.length; i++){
      let p = this.V1n8L4nc;
      let e = this.hugoACasserLeGit[i];
      if(p.x <= e.x + e.width &&
        p.x + p.width >= e.x &&
        p.y <= e.y + e.height &&
        p.height + p.y >= e.y) return true;
    }
    return false;
  }

  render(){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 1100, 300);
    this.V1n8L4nc.render(this.ctx);
    this.hugoACasserLeGit.forEach(e => {
      e.render(this.ctx);
    });
    this.ctx.fillStyle = 'white';
    this.ctx.font = '24px serif';
    this.ctx.fillText('Score : ' + this.CeMatinMoiEtAymericOnAEteAAuchanDeguiseEtOnADitBonjourAuPereNoel, 465, 100);
  }

}
