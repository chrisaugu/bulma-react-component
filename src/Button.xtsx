import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}


// <Button 
//   border="none"
//   color="pink"
//   height = "200px"
//   onClick={() => console.log("You clicked on the pink circle!")}
//   radius = "50%"
//   width = "200px"
//   children = "I'm a pink circle!"
// />

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;
