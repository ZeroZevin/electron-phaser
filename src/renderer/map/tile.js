
import { TileType } from '.';

export default class Tile {
    constructor() {
        this.type = TileType.Unknow;
        this.terrain = {};
    }
    static get DefaultTile() {
        return new Tile();
    }
}