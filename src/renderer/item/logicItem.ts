import { BaseItem } from './baseItem'

/**
 * 逻辑物体基类，所有在地图中存在并对游戏世界产生作用，但无需渲染的物体都继承此类
 */
export abstract class LogicItem extends BaseItem {
  /**
   * 不可见
   */
  get visiable () {
    return false
  }
}
