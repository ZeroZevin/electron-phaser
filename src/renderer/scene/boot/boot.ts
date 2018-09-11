import * as Phaser from 'Phaser'

import { game } from '@renderer/main'

import { UIButton } from '@renderer/UI/button'

export class BootScene extends Phaser.Scene {
  private _$UIEl: HTMLDivElement
  private _startBtn: UIButton
  private _continueBtn: UIButton
  private _settingBtn: UIButton
  private _exitBtn: UIButton

  constructor (config: string | Phaser.Scenes.Settings.Config) {
    super(config)
  }

  init (data: any) {
    this._$UIEl = document.createElement('div')
    this._$UIEl.classList.add('ui-container')

    this._startBtn = new UIButton({ text: '开始游戏', style: { top: '300px' } })
    this._startBtn.addEvent('click', this.onStart)

    this._continueBtn = new UIButton({ text: '继续游戏', style: { top: '350px' } })
    this._continueBtn.addEvent('click', this.onContinue)

    this._settingBtn = new UIButton({ text: '设置', style: { top: '400px' } })
    this._settingBtn.addEvent('click', this.onSetting)

    this._exitBtn = new UIButton({ text: '退出', style: { top: '450px' } })
    this._exitBtn.addEvent('click', this.onExit)

    this._$UIEl.appendChild(this._startBtn.$el)
    this._$UIEl.appendChild(this._continueBtn.$el)
    this._$UIEl.appendChild(this._settingBtn.$el)
    this._$UIEl.appendChild(this._exitBtn.$el)
    this._$UIEl.style.textAlign = 'center'
    this._$UIEl.style.opacity = '0'

    game.$UIEl.appendChild(this._$UIEl)

    this.cameras.main.fadeIn(1000, 0, 0, 0, (camera: Phaser.Cameras.Scene2D.Camera, value: number) => {
      this._$UIEl.style.opacity = value.toString()
    })
  }

  create () {
    console.log('BootScene create', this.game)
  }

  onStart () {
    console.log('onStart')
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
