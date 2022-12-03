import styled from "styled-components";

interface ButtonPaymentModeProps {
    actived: boolean
    width?:number
    height?:number;
    uppercase:boolean
}

export const ButtonPaymentMode = styled.button<ButtonPaymentModeProps>`
  display:flex ;
  align-items:center;
  justify-content:space-around;
  /* gap:.4rem; */

  width:${props => props.width ? props.width+'px' : 179+'px'} ;
  height:${props => props.height ? props.height+'px' : 51+'px'} ;
  background-color:${props => props.theme['gray-400']};

  font-size:0.75rem;
  color:${props => props.theme['gray-700']};
  Line height:1.2rem;
  font-weight:400;
  text-transform:${props => props.uppercase ? 'uppercase' : 'lowercase'};

  border:0;
  border-radius:5px;
  cursor:pointer;
  transition:color .9s ease-in;

  &:hover{
    background-color:${props => props.theme['gray-500']};
  }

  ${props => props.actived && `&:focus{
    background-color:${props.theme['purple-300']};
  }`}
  
`