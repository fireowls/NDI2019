import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { Enemy } from '../models/enemy.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  player : Player;
  enemies : Enemy[];
  ctx : CanvasRenderingContext2D;
  dead : boolean = false;
  constructor() {
  }

  ngOnInit() {
    this.player = new Player(0,300-50,0);
    this.enemies = [];
    var canvas : any = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    setInterval(e => {
      if(!this.dead) this.update();
    }, 10);
    setInterval(e => {
      if(!this.dead) this.enemies.push(new Enemy(1100, 300-50, -5));
    }, 2000);
    canvas.addEventListener('keypress', e => {
      this.keyDown(e);
    }, true);
    canvas.addEventListener('keyup', e => {
      this.keyRelease(e);
    })
    canvas.focus();
    this.player.render(this.ctx);
  }

  keyDown(e){
    if(e.keyCode == 32){ //space
      if(!(this.player.y < 300-this.player.height)) this.player.vit = -5;
    }
  }

  keyRelease(e){
    if(e.keyCode == 32){ //space
      this.player.vit = 5;
    }
  }

  update(){
    this.player.y += this.player.vit;
    this.player.y = this.constrain(this.player.y, 0, 300-this.player.height);
    if(this.player.y == 0) this.player.vit = 5;
    this.enemies.forEach(e => {
      e.x += e.vit;
    });
    this.dead = this.isCollision();
    this.render();
    if(this.dead) this.gameover();
  }

  gameover(){
    this.ctx.font = '48px serif';
    this.ctx.fillText('Game Over', 400, 50);
  }

  constrain(value : number, min : number, max : number){
    if(value < min) return min;
    if(value > max) return max;
    return value;
  }

  isCollision(){
    for(let i = 0; i < this.enemies.length; i++){
      let p = this.player;
      let e = this.enemies[i];
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
    this.player.render(this.ctx);
    this.enemies.forEach(e => {
      e.render(this.ctx);
    });
  }

}
