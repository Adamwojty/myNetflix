import * as React from 'react';
import styled from "styled-components"
import Btn from "./Btn"
import { Device } from "../../../styles/constans/Device";
import  {Colors}  from "../../../styles/constans/Colors";


const BtnsSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 2px solid ${Colors.BLACK_OPACITY};
    border-left: 2px solid ${Colors.BLACK_OPACITY}; 
    @media ${Device.tablet} {
    width: 220px;
    }
    @media ${Device.LAPTOP} {
    width: 280px;
    border-right: 3px solid ${Colors.BLACK_OPACITY};
    border-left: 3px solid ${Colors.BLACK_OPACITY}; 
    }
`

const IconsSection: React.SFC = () => {
    return (  
        <BtnsSection>
            <Btn src="/img/navBarImg/teams.svg" value="teams"/>
            <Btn src="/img/navBarImg/cos.svg" value="cos"/>
            <Btn src="/img/navBarImg/filters.svg" value="filters"/>
            <Btn src="/img/navBarImg/allerts.svg" value="allerts"/>
        </BtnsSection>
    );
}
 
export default IconsSection;