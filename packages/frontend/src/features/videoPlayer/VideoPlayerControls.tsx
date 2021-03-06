import * as React from "react";
import styled from "styled-components";

import Timer from "./Timer";
import MuteBtn from "./videoPlayerButtons/MuteBtn"
import PlayBtn from "./videoPlayerButtons/PlayBtn"
import FullscreenBtn from "./videoPlayerButtons/FullscreenBtn"
import MinimizeBtn from "./videoPlayerButtons/MinimizeBtn"
import { Device } from "../common/styles/constans/Device"

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  align-items: center;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  @media ${Device.TABLET}{
      margin-left: 12px;
  }
  @media ${Device.LAPTOP}{
      margin-left: 17px;
  }
`;
const RightPanel = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  @media ${Device.TABLET}{
    margin-right: 12px;
  }
  @media ${Device.LAPTOP}{
    margin-right: 17px;
  }
`;


const VideoPlayerControls: React.SFC = () => {

  return (
    <ControlsWrapper>
      <LeftPanel>
        <PlayBtn />
        <Timer />
      </LeftPanel>
      <RightPanel>
        <MuteBtn />
        <MinimizeBtn />
        <FullscreenBtn />
        <Timer duration="duration" />
      </RightPanel>
    </ControlsWrapper>
  );
};

export default VideoPlayerControls;
