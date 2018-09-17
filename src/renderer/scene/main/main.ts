import * as Phaser from 'Phaser'

import { MainUI } from './mainUI'

export class MainScene extends Phaser.Scene {
  private _UI: MainUI

  constructor (config: Phaser.Scenes.Settings.Config) {
    super(config)
  }

  init (data: any) {
    console.log('init')
    this.cameras.main.fadeIn(1000)
  }

  preload () {
    console.log('preload')
    this.load.spritesheet('itemBorder', 'assets/ui/flixel-item-border.png', {
      frameWidth: 20,
      frameHeight: 20,
    })
  }

  create () {
    console.log('create')
    this._UI = new MainUI(this)
  }
}
