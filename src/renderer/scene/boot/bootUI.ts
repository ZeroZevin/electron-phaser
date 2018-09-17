import { BootScene } from './boot'

export class BootUI {
  public readonly event: Phaser.Events.EventEmitter

  constructor (private scene: BootScene) {
    this.init()
    this.event = new Phaser.Events.EventEmitter()
  }

  init () {
    let gameWidth = this.scene.sys.game.config.width as number
    let gameHeight = this.scene.sys.game.config.height as number

    this.makeButton('开始游戏', gameWidth / 2, gameHeight / 2 - 75)
    this.makeButton('继续游戏', gameWidth / 2, gameHeight / 2 - 25)
    this.makeButton('设置', gameWidth / 2, gameHeight / 2 + 25)
    this.makeButton('退出游戏', gameWidth / 2, gameHeight / 2 + 75)

    this.scene.input.on('gameobjectover', (pointer: any, button: any) => {
      this.setButtonFrame(button, 0)
    })
    this.scene.input.on('gameobjectout', (pointer: any, button: any) => {
      this.setButtonFrame(button, 1)
    })
    this.scene.input.on('gameobjectdown', (pointer: any, button: any) => {
      this.setButtonFrame(button, 2)

      switch (button.name) {
        case '开始游戏':
          this.event.emit('start')
          break
        case '继续游戏':
          this.event.emit('continue')
          break
        case '设置':
          this.event.emit('setting')
          break
        case '退出游戏':
          this.event.emit('exit')
          break
      }
    })
    this.scene.input.on('gameobjectup', (pointer: any, button: any) => {
      this.setButtonFrame(button, 0)
    })
  }

  makeButton (name: string, x: number, y: number) {
    this.scene.add
      .image(x, y, 'button', 1)
      .setInteractive()
      .setScale(2, 2).name = name

    this.scene.add
      .text(x, y, name, {
        font: '16px pixel',
        fill: '#000000',
      })
      .setOrigin(0.5, 0.5)
  }

  setButtonFrame (button: any, frame: any) {
    button.frame = button.scene.textures.getFrame('button', frame)
  }
}
