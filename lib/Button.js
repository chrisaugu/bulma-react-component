"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// <Button 
//   border="none"
//   color="pink"
//   height = "200px"
//   onClick={() => console.log("You clicked on the pink circle!")}
//   radius = "50%"
//   width = "200px"
//   children = "I'm a pink circle!"
// />
const Button = ({ border, color, children, height, onClick, radius, width }) => {
    return (<button onClick={onClick} style={{
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width
        }}>
    {children}
    </button>);
};
exports.default = Button;
