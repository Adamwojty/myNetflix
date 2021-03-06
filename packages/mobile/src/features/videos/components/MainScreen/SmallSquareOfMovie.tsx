import React from 'react';
import styled from 'styled-components/native';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';

const Wrapper = styled.TouchableOpacity({
    marginTop: 10,
    marginLeft: 10,
    height: 110,
    width: 173,
    borderColor: Color.LIGHTGREYXX,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: Color.WHITE,
    shadowColor: Color.WHITEX,
    shadowOffset: {
        width: 1,
        height: 2,
    },
    shadowOpacity: "1",
    shadowRadius: 1,
    elevation: "2"
});

const ImageButton = styled.Image`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 172px;
    height: 92px;
`;

const ButtonSquare = styled.TouchableOpacity({

  });

  const TextWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 17px;
  `;
  const TextButton = styled(MyText)`
    font-size: ${FontSize.SMALLXS};
    font-weight: ${FontWeight.SEMIBOLD};
    text-align: left;
    color: ${Color.BLACK};
    margin-left: 4px;
`;

interface SmallSquareOfMovieProps {
    navigation: any,
    text: string,
    image: string,
    goto: any,
  }

export default class SmallSquareOfMovie extends React.Component<SmallSquareOfMovieProps> {
    navi = (navigation) => {
        this.props.navigation.navigate(this.props.goto)
        }

    render(){
        return(
            <Wrapper onPress={this.navi}> 
                <ButtonSquare onPress={this.navi}>  
                <ImageButton source={{uri: this.props.image}}/>
                </ButtonSquare>
                <TextWrapper>
                <TextButton>{this.props.text}</TextButton>
                </TextWrapper>
            </Wrapper>
        );
    }
}