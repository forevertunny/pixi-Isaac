//module.exports = require('./src/Isaac/index');

import * as _tools from "./Tools";
import * as _pixiui from "./PIXIUI";
import * as _color from "./Color";

var Isaac = {};
Isaac.UI = _pixiui;
Isaac.Tools = _tools;
Isaac.Color = _color;

// export default Isaac;
module.exports = Isaac;