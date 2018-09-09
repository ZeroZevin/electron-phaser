export class UIButton {
  private _$el: HTMLButtonElement

  get $el () {
    return this._$el
  }

  constructor (config: object) {
    this.init(config)
  }

  init (config: any) {
    this._$el = document.createElement('button')

    this._$el.classList.add('btn')
    this._$el.innerHTML = config.text

    if (config.style) {
      for (let key in config.style) {
        this.setProperty(key, config.style[key])
      }
    }
  }

  addEvent (key: string, cb: EventListenerOrEventListenerObject) {
    this._$el.addEventListener(key, cb)
  }

  removeEvent (key: string, cb: EventListenerOrEventListenerObject) {
    this._$el.removeEventListener(key, cb)
  }

  setProperty (key: string, value: string) {
    this._$el.style.setProperty(key, value)
  }
}
