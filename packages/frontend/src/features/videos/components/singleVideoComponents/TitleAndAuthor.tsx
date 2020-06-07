import * as React from 'react';
import styled from "styled-components"

import {FontSize} from "../../../common/styles/constans/FontSize"
import {fontWeight} from "../../../common/styles/constans/fontWeight"
import {Device} from "../../../common/styles/constans/Device"

const Title = styled.h2`
    width: 100%;
    text-align: left;
    font-size: ${FontSize.SMALL};
    margin-bottom: 8px;
    font-weight:  ${fontWeight.BOLD};
    @media ${Device.TABLET} {
        font-size: ${FontSize.BIG};
        margin-bottom: 4px;
    }
`

const Author = styled.h4`
    text-align: left;
    font-size: ${FontSize.VERY_SMALL};
    @media ${Device.TABLET} {
        font-size: ${FontSize.XXMEDIUM};
    }
`

interface TitleAndAuthorProps {
    title: string;
    author: string;
}
 
const TitleAndAuthor: React.SFC<TitleAndAuthorProps> = ({title, author}) => {
    return ( 
        <>
            <Title>{title}</Title>
            <Author>{author}</Author>
        </>
     );
}
 
export default TitleAndAuthor;