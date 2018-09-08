import { BaseItem } from './baseItem'

export abstract class VisableItem extends BaseItem {
  /**
   * 可见物体的绘制对象(精灵)
   */
  sprite: any
}
