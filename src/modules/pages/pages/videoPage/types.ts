import { TRootState } from "@/store/types"
import { TTextMedia } from "@/types";
import { ActionContext } from "vuex";

export type TVideoType = 'newVideo' | 'aboutTech' | 'review';

export type TVideo = Pick<TTextMedia, '_id' | 'title' | 'text' | 'video'> 
  & { 
    type: TVideoType 
  };

export type TVideoState = {
  video: TVideo[];
}

export type TVideoMutations<S = TVideoState> = {
  SET_VIDEO(state: S, payload: TVideo[]): void;
  SET_ONE_VIDEO(state: S, payload: TVideo): void;
}

export type TVideoActions = {
  fetchVideo(
    { commit }: ActionContext<TVideoState, TRootState>
  ): void;
  updateOneVideo(
    { commit }: ActionContext<TVideoState, TRootState>,
    video: TVideo,
  ): void;
}

export type TVideoGetters = {
  videoByType(
    { video }: TVideoState
  ): (type: TVideoType) => TVideo[];
}