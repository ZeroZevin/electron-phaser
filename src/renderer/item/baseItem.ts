import { PhysicsType } from './physics'

/**
 * 物体基类，定义物体共有属性和方法
 */
export abstract class BaseItem {
  /**
   * 物体名称
   */
  name: string = ''
  /**
   * 物体最大生命值,所有物体都有生命值，包括逻辑物体也应该有类似属性，比如持续时间等
   */
  life: number = 100
  /**
   * 物体当前健康值，当前健康值最大为 life 值，当健康值为负时，物体死亡/被毁/消失
   */
  health: number = 100
  /**
   * 物体强度，strength 即物体抗击打能力，被击中后物体的实际损伤是 damage/strength
   */
  strength = 1.0
  /**
   * 地图中的x坐标
   */
  x: number = 0
  /**
   * 地图中的y坐标
   */
  y: number = 0
  /**
   * 宽度
   */
  width: number = 0
  /**
   * 高度
   */
  height: number = 0
  /**
   * 物体在图块中的顺序，数值越小越往下，即数值大的在渲染是会遮盖数值小的
   */
  order: number = 1000
  /**
   * 是否为可交互物体，不可交互的物体渲染消耗会比较小
   */
  interactivity: Boolean = false
  /**
   * 是否计算碰撞
   */
  collides: Boolean = false
  /**
   * 物体物理质量
   */
  mass: number = 100
  /**
   * 物理刚体类别：静态刚体或者自由刚体
   */
  physicsType: PhysicsType = PhysicsType.Dynamic
  /**
   * 物体描述信息
   */
  abstract get description (): string
  /**
   * 判断物体是否可见，不可见物体渲染消耗比较小
   */
  abstract get visiable (): Boolean
  /**
   * 判断物体是否死亡/毁坏
   */
  get dead (): Boolean {
    return this.health < 0
  }
  /**
   * 对物体施加伤害
   */
  damage (value: number) {
    this.health -= value / this.strength
  }
  /**
   * 更新函数，在本函数内不应该执行图形相关操作，只可以更新逻辑数据内容
   * @param time 当前地图时间
   * @param delta 本次调用时间差
   */
  abstract update (time: number, delta: number): void
}
