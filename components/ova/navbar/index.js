"use strict";

import animation from './animation';

const navbar = () => {
   return (<object id="ovaNavBar" onLoad={animation} type="image/svg+xml" data="/image/ovas/template/ovaNavBar.svg"></object>);
}

export default navbar;