import * as Phaser from 'Phaser'

import { BootUI } from './bootUI'

export class BootScene extends Phaser.Scene {
  private _UI: BootUI

  constructor (config: string | Phaser.Scenes.Settings.Config) {
    super(config)
  }

  init (data: any) {
    this.cameras.main.fadeIn(1000)

    this.cameras.main.once('camerafadeincomplete', () => {
      this._UI.event.on('start', this.onStart.bind(this))
      this._UI.event.on('continue', this.onContinue.bind(this))
      this._UI.event.on('setting', this.onSetting.bind(this))
      this._UI.event.on('exit', this.onExit.bind(this))
    })
  }

  preload () {
    this.load.spritesheet('button', 'assets/ui/flixel-button.png', {
      frameWidth: 80,
      frameHeight: 20,
    })
  }

  create () {
    console.log('BootScene create', this.game)
    this._UI = new BootUI(this)
  }

  update () {
    //
  }

  onStart () {
    console.log('onStart')
    this.cameras.main.fade(1000)

    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.game.scene.switch('bootScene', 'startScene')
    })
  }

  onContinue () {
    console.log('onContinue')
  }

  onSetting () {
    console.log('onSetting')
  }

  onExit () {
    console.log('onExit')
  }
}
