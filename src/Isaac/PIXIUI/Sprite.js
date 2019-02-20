import * as PIXI from "pixi.js";
import { UIBase } from './UIBase';

/**
 * An UI sprite object
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} The texture for the sprite
 */
function Sprite (t)
{
    this.sprite = new PIXI.Sprite(t);
    UIBase.call(this, this.sprite.width, this.sprite.height);
    this.container.addChild(this.sprite);
}

Sprite.prototype = Object.create(UIBase.prototype);
Sprite.prototype.constructor = Sprite;
export { Sprite };


Sprite.fromFrame = function (frameId)
{
    return new Sprite(new PIXI.Texture.fromFrame(frameId));
};

Sprite.fromImage = function (imageUrl)
{
    return new Sprite(new PIXI.Texture.fromImage(imageUrl));
};

/**
 * Updates the text
 *
 * @private
 */
Sprite.prototype.update = function ()
{
    if (this.tint !== null)
        this.sprite.tint = this.tint;

    if (this.blendMode !== null)
        this.sprite.blendMode = this.blendMode;

    this.sprite.width = this._width;
    this.sprite.height = this._height;
};

Object.defineProperties(Sprite.prototype, {
    texture: {
        get: function ()
        {
            return this.sprite.texture;
        },
        set: function (val)
        {
            this.width = val.width;
            this.height = val.height
            this.sprite.texture = val;
            this.updatesettings(true);
        }
    }
});