import * as Phaser from 'Phaser'

export class PreloadScene extends Phaser.Scene {
  constructor (config: string | Phaser.Scenes.Settings.Config) {
    super(config)
  }

  init () {
    //
  }

  preload () {
    //
  }

  async create () {
    let title = this.add.text(window.innerWidth / 2, window.innerHeight / 2, 'Miss World', {
      font: '150px pixel',
      fill: '#ffffff',
    }).setOrigin(0.5, 0.5).setAlpha(0)

    let tip = this.add.text(window.innerWidth / 2, window.innerHeight - 100, 'press any key to start', {
      font: '16px pixel',
      fill: '#888888',
    }).setOrigin(0.5, 0.5).setAlpha(0)

    this.tweens.add({
      targets: title,
      props: {
        alphaTopLeft: {
          value: 1,
        },
        alphaTopRight: {
          value: 1,
        },
        alphaBottomLeft: {
          value: 0,
        },
        alphaBottomRight: {
          value: 0,
        },
      },
      ease: 'Sine.easeInOut',
      duration: 2000,
      yoyo: false,
      repeat: 0,
      onComplete: () => {
        this.input.keyboard.once('keydown', this.fadeToNext.bind(this))

        this.tweens.add({
          targets: tip,
          alpha: 1,
          ease: 'Sine.easeInOut',
          duration: 2000,
          yoyo: true,
          repeat: -1,
        })
      },
    })
  }

  update () {
    // console.log('PreloadScene', arguments)
  }

  fadeToNext () {
    // this.game.scene.start('bootScene', { name: 'zero' })
    // this.game.scene.getScene(this)
    // this.game.scene.stop('preloadScene')
    this.cameras.main.fade(1000)

    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.game.scene.switch('preloadScene', 'bootScene')
    })
    //
  }
}
