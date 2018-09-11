
/**
 * 物理刚体类别
 */
export enum PhysicsType {
  /**
   * 睡眠状态刚体，忽略所有物理计算
   */
  Sleep = 0,
  /**
   * 静态刚体，与其他物体相撞是不会动
   */
  Static,
  /**
   * 自由刚体，与其他物体相撞会改变其状态
   */
  Dynamic,
}
