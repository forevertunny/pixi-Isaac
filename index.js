//module.exports = require('./src/Isaac/index');

import * as _tools from "./src/Tools/index";
import * as _pixiui from "./src/PIXIUI/index";
import * as _color from "./src/Color/index";

var Isaac = {};
Isaac.UI = _pixiui;
Isaac.Tools = _tools;
Isaac.Color = _color;

export default Isaac;

