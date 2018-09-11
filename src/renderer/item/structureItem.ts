
import { VisableItem } from './visableItem'

/**
 * 建筑结构物体，此类物体可见并具有一定强度，可遭受一定程度的外力
 */
export class StructureItem extends VisableItem {
  /**
   * 建筑所需时间，秒为单位，即默认需要10秒建成
   */
  buildTime: number = 10
  /**
   * 回收所需时间，秒为单位
   */
  recoveryTime: number = 5
  get description () {
    return ''
  }
  constructor () {
    super()
    this.sprite = null
  }
  update (time: number, delta: number) {
    let _ = 1
  }
  draw (time: number, delta: number) {
    let _ = 1
  }
}
