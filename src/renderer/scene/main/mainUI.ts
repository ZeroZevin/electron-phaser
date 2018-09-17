import { MainScene } from './main'

export class MainUI {
  public readonly event: Phaser.Events.EventEmitter
  private itemBorderNumber: number
  private itemBorderSize: number
  private itemBar: Phaser.GameObjects.Container
  private itemBorderMargin: number

  constructor (private scene: MainScene) {
    this.event = new Phaser.Events.EventEmitter()
    this.itemBorderNumber = 9
    this.itemBorderSize = 60
    this.itemBar = this.scene.add.container(0, 0)
    this.itemBorderMargin = 10

    this.init()
  }

  init () {
    let gameWidth = this.scene.sys.game.config.width as number
    let gameHeight = this.scene.sys.game.config.height as number

    this.itemBar.setPosition(gameWidth / 2, gameHeight - 100)

    for (let i = 0; i < this.itemBorderNumber; i++) {
      let itemBorder = this.makeItemBorder(
        Math.ceil(i - this.itemBorderNumber / 2) *
          (this.itemBorderSize + this.itemBorderMargin),
        0,
        this.itemBorderSize,
        this.itemBorderSize,
      )

      this.itemBar.add(itemBorder)
    }

    this.scene.input.on('gameobjectover', (pointer: any, button: any) => {
      this.setItemBorderFrame(button, 1)
    })
    this.scene.input.on('gameobjectout', (pointer: any, button: any) => {
      this.setItemBorderFrame(button, 0)
    })
  }

  makeItemBorder (x: number, y: number, width: number, height: number) {
    let itemBorder = this.scene.add
      .image(x, y, 'itemBorder', 0)
      .setInteractive()

    itemBorder.setScale(width / itemBorder.width, height / itemBorder.height)

    return itemBorder
  }

  setItemBorderFrame (button: any, frame: any) {
    button.frame = button.scene.textures.getFrame('itemBorder', frame)
  }
}
