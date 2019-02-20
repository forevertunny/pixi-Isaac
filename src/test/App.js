import * as PIXI from 'pixi.js'
import Isaac from '../Isaac';
// import bunnyUrl from '../assets/bunny.png'

export default class
{
  constructor(target)
  {
    this.target = target
    // this.number = number

    this.app = new PIXI.Application({ backgroundColor: 0x1099bb })
    this.target.appendChild(this.app.view)

    let uiStage = new Isaac.UI.Stage(100, 100);
    this.app.stage.addChild(uiStage);
    // this.bunnyTex = PIXI.Texture.fromImage(bunnyUrl)
  }

  // run ()
  // {
  //   for (let i = 0; i < this.number; i += 1)
  //   {
  //     let bunny = new PIXI.Sprite(this.bunnyTex)
  //     bunny.anchor.set(0.5)
  //     bunny.x = Math.floor(Math.random() * this.app.screen.width)
  //     bunny.y = Math.floor(Math.random() * this.app.screen.height)

  //     this.app.stage.addChild(bunny);
  //   }

  //   this.target.appendChild(this.app.view)
  // }
}
