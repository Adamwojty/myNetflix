import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"

import { refsStore } from "./refs.store"
import { breakPoint } from "../../../utils/breakPoint";
import Player from "./VideoPlayer"
import Interface from "./interface"
import { getMovieState } from "../../actions/ReduxActions"
import { SmallInterface } from "./SmallModeInterface"
import { VideoPlayer } from "./VideoPlayer"
import { device } from "../../../constans/device"


const VideoPlayerContainer = styled.div<{ minimized: boolean, small: string | undefined }>`
  display: ${props => !props.small || props.small && props.minimized ? "block" : "none"};
  position: ${props => props.minimized && props.small ? "fixed" : "relative"};
  right: ${props => props.minimized && props.small ? "0" : "0"};
  bottom: ${props => props.minimized && props.small ? "0" : "0"};
  max-width: ${props => props.minimized && props.small ? "200px" : ""};
  overflow: hidden;
  background-color: #222;
  &:hover ${VideoPlayer}{
    filter: ${props => props.minimized && props.small ? "brightness(0.5)" : ""};
  }
  &:hover ${SmallInterface} {
      visibility: visible;
      opacity: 1;
  }
  &:hover {
    .interfaceWrapper {
        transform: ${props => !props.small ? "translateY(0)" : ''};
    }
  }
  @media ${device.TABLET} {
    min-width: ${props => props.minimized && props.small ? "400px" : ""}; 
    }
    @media ${device.LAPTOP} {
    min-width: ${props => props.minimized && props.small ? "600px" : ""}; 
    }

 
`;
interface VideoPlayerComponentProps {
  small?: string;
}

const VideoPlayerComponent: React.SFC<VideoPlayerComponentProps> = (props) => {
  const isMinimized: boolean = useSelector(state => getMovieState(state).isMinimized)
  const videoContainerRef: any = useRef();
  if (props.small) {
    refsStore.RefsSmall[1] = videoContainerRef
  } else {
    refsStore.Refs[1] = videoContainerRef;
  }


  return (
    <VideoPlayerContainer
      small={props.small}
      ref={videoContainerRef}
      minimized={isMinimized}
    >
      <Player small={props.small} />
      <Interface small={props.small} />
    </VideoPlayerContainer >
  );
};

export default VideoPlayerComponent;
