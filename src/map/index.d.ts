/**
 * 地图快类别
 * 表明当前土块所处状态
 */
declare enum TileType {
    /**
     * 处在战争迷雾中，未知状态
     */
    Unknow = 0,
    Terrain,
    Item
}

/**
 * 地形块
 * 此类定义最底层的地形块结构
 */
export class Terrain {
    /**
     * 地形高度
     */
    height: number;
    /**
     * 地形上的物体组，比如基岩类别[岩石、泥巴、草皮等等]，此变量可由 mod 直接决定
     */
    slots: any[];
    constructor(height = 0);
}

/**
 * 地图块
 * 此类定义人为放置在地图上的物体，包含最底层的 Terrain 块
 */
export class Tile {
    /**
     * 地图快类别
     */
    type: TileType;
    /**
     * 地形块
     */
    terrain: Terrain;
    /**
     * 获取默认的地图块
     */
    static get DefaultTile(): Tile;
}
/**
 * 地图类
 */
export class Map {
    /**
     * 地图名称
     */
    name: string;
    /**
     * 图块集合
     */
    _tiles: Tile[];
    constructor(name = "default map");
    /**
     * 获取特定位置的图块
     * @param x x 坐标
     * @param y y 坐标
     */
    getTile(x: number, y: number): Tile;
    /**
     * 添加图块到当前地图
     * @param x x 坐标
     * @param y y 坐标
     * @param tile 待添加图块
     */
    addTile(x: number, y: number, tile: Tile): void;
}
/**
 * 地图管理类
 */
export class MapManager {
    /**
     * 加载地图
     * @param path 地图文件路径
     */
    load(path: string): Map;
    /**
     * 创建地图
     * @param seed 随机种子
     */
    create(seed: number): Map;
    /**
     * 保存地图
     * @param map 地图实例 
     */
    save(map: Map): Boolean;
}