"use client"

import { ReactNode } from "react"
import { useGlobalState } from "@/context/globalProvider"
import styled from "styled-components"

interface ButtonProps {
 icon?: ReactNode
 label?: string
 background?: string
 padding?: string
 radius?: string
 fontWeight?: string
 fontSize?: string
 border?: string
 color?: string
 click?: () => void
 type?: "submit" | "button" | "reset" | undefined
}

const Button = ({
 icon,
 label,
 background,
 padding,
 radius,
 fontWeight,
 fontSize,
 border,
 color,
 click,
 type
}: ButtonProps) => {
 const { theme } = useGlobalState()

 return (
  <Btn
   type={type}
   theme={theme}
   onClick={click}
   style={{
    background: background,
    padding: padding || ".5rem 1rem",
    borderRadius: radius || ".5rem",
    fontWeight: fontWeight || "500",
    fontSize: fontSize,
    border: border || "none",
    color: color || theme.colorGrey0
   }}
  >
   {icon && icon}
   {label}
  </Btn>
 )
}

export default Button

const Btn = styled.button`
 position: relative;
 display: flex;
 align-items: center;
 color: ${(props) => props.theme.colorGrey2};
 z-index: 5;
 cursor: pointer;
 transition: all 0.55s ease-in-out;

 i {
   margin-right: 1rem;
   color: ${(props) => props.theme.colorGrey2};
   font-size: 1.5rem;
   transition: all 0.55s ease-in-out;
 }

 &:hover {
   color: ${(props) => props.theme.colorGrey0};

   i {
     color: ${(props) => props.theme.colorGrey0};
   }
 }
`