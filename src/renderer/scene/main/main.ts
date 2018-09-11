import * as Phaser from 'Phaser'

export class MainScene extends Phaser.Scene {
  constructor (config: Phaser.Scenes.Settings.Config) {
    super(config)
  }

  init () {
    console.log('init')
  }

  preload () {
    console.log('preload')
  }

  create () {
    console.log('create')
  }
}
