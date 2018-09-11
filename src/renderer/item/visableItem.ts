import { BaseItem } from './baseItem'

/**
 * 可见物体基类，所有在地图中可见需要渲染的物体都继承此类
 */
export abstract class VisableItem extends BaseItem {
  /**
   * 可见物体的绘制对象(精灵)
   */
  sprite: Phaser.Loader.FileTypes.SpriteSheetFileConfig
  /**
   * 物体缩略图地址/base64
   */
  thumbnail: string = ''
  /**
   * 动画集, 每个动画都有一个名称和Phaser.Animations.Animation对象
   */
  animations: {[key: string]: Phaser.Animations.Animation}
  /**
   * 可见
   */
  get visiable () {
    return true
  }
  /**
   * 绘图函数 [baseiem 不应该实现绘图函数，只有可见物体才应该实现]
   * @param time 当前地图时间
   * @param delta 本次调用时间差
   */
  abstract draw (time: number, delta: number, graphics: Phaser.GameObjects.Graphics): void
}
