import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { Colors } from "../../common/styles/constans/Colors";
import {Device} from "../../common/styles/constans/Device";
import {addCategorie, removeCategorie} from "../reducer/filtersActions"
import {useDispatch} from "react-redux"
import {useFiltration} from "../hooks/useFiltration"

const Btn = styled.button<{isActive: boolean}>`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  border: none;
  outline: none;
  background-color: ${({isActive}) => isActive ? "black" : "white"};
  color: ${({isActive}) => isActive ? "white" : "black"};
  padding: 14px 8px;
  box-shadow: 0px 2px 8px 0px ${Colors.OPACITY_GRAY};
  border-radius: 7px;
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover{
    transform: scale(1.1)
  }
`;
const CategorieTxt = styled.p`
  font-size: ${FontSize.SMALL};
  @media ${Device.tablet}{
        font-size: ${FontSize.paragraphDesktop};
    }
`;
export interface CategorieBtnProps {
  categorie: string;
  id: number;
}

const CategorieBtn: React.SFC<CategorieBtnProps> = ({ categorie , id}) => {
  const {handleClick, isActive} = useFiltration(id)
  
  return (
    <Btn onClick={handleClick} isActive={isActive}>
      <CategorieTxt>{categorie}</CategorieTxt>
    </Btn>
  );
};

export default CategorieBtn;
