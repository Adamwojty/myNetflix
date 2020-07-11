import React from "react";
import styled from "styled-components";
import {useSelector, RootStateOrAny} from "react-redux"

import { Device } from "../../common/styles/constans/Device";
import VideoDescription from "../components/singleVideoComponents/VideoDescription";
import Quiz from "../components/singleVideoComponents/Quiz";
import VideoPlayerComponent from "../../videoPlayer/VideoPlayerComponent";
import Aside from "../../common/components/layout/Aside";
import VideoTabs from "../../common/components/layout/videoTabs/VideoTabs";
import Header from "../../common/components/layout/header/Header";
import { Sizes } from "../../common/styles/constans/Sizes";

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  @media ${Device.LAPTOP_L} {
    flex-direction: row;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${Sizes.BANNER_MOBILE};
  position: relative;
  width: 100%;
  @media ${Device.LAPTOP} {
    margin-top: 0;
    width: calc(100% - 446px);
  }
`;

const SingleMovieView: React.FC = () => {
  const activeVideoTab = useSelector((state: RootStateOrAny) => state.videoTabs.activeTab) 

  return (
    <>
      <Header/>
      <Main>
        <VideoPlayerComponent />
        <VideoTabs />
       {activeVideoTab == "Description" && 
       <VideoInfo>
          <VideoDescription />
          <Quiz />
        </VideoInfo>}
      </Main>
      <Aside tabs={true}/>
    </>
  );
};
export default SingleMovieView;
