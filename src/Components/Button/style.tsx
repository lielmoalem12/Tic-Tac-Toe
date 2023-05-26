import styled from "styled-components";
import { colors } from "../../utils/colorPallete";

export const ButtonContainer = styled.button`
  background-color: ${colors.button};
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  /* font-size: 15px; */
  font-weight: 700;
  letter-spacing: 0.8px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 6px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  /* width: 100%; */
  &:after {
    background-clip: padding-box;
    background-color: ${colors.buttonShade};
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:main,
  &:focus {
    user-select: auto;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }
`;

/* <button class="button-19" role="button">Button 19</button> */
