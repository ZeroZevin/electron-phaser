/**
 * 物体基类，定义物体共有属性和方法
 */
export abstract class BaseItem {
  /**
   * 地图中的x坐标
   */
  x: number = 0
  /**
   * 地图中的y坐标
   */
  y: number = 0
  /**
   * 物体名称
   */
  name: string = ''
  /**
   * 物体在图块中的顺序，数值越小越往下，即数值大的在渲染是会遮盖数值小的
   */
  order: number = 0
  /**
   * 是否为可交互物体，不可交互的物体渲染消耗会比较小
   */
  interactivity: Boolean = false
  /**
   * 是否可见，不可见物体渲染消耗比较小
   */
  visability: Boolean = true
  abstract get description (): string
  /**
   * 更新函数，在本函数内不应该执行图形相关操作，只可以更新逻辑数据内容
   * @param time 当前地图时间
   * @param delta 本次调用时间差
   */
  abstract update (time: number, delta: number): void
  /**
   * 绘图函数 [baseiem 不应该实现绘图函数，只有可见物体才应该实现]
   * @param time 当前地图时间
   * @param delta 本次调用时间差
   */
  abstract draw? (time: number, delta: number): void
}
