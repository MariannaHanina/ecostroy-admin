import { TRootState } from "@/store/types"
import { ActionContext } from "vuex";

export type TVideoType = 'newVideo' | 'aboutTech' | 'review';

export type TVideo = {
  _id?: string;
  type: TVideoType;
  video: string;
  title: string;
  text: string;
}

export type TVideoState = {
  video: TVideo[];
}

export type TVideoMutations<S = TVideoState> = {
  SET_VIDEO(state: S, payload: TVideo[]): void;
}

export type TVideoActions = {
  fetchVideo(
    { commit }: ActionContext<TVideoState, TRootState>
  ): void;
  updateVideo(
    { commit }: ActionContext<TVideoState, TRootState>,
    video: TVideo[],
  ): void;
}

export type TVideoGetters = {
  videoByType(
    { video }: TVideoState
  ): (type: TVideoType) => TVideo[];
}