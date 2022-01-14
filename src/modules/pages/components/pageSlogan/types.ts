import { TRootState } from "@/store/types"
import { ActionContext } from "vuex";

export type TSloganType = 
  'main' | 
  'projects' | 
  'video' | 
  'galleries' | 
  'services' |
  'articles' |
  'contacts';

export type TSlogan = {
  _id?: string;
  type: TSloganType;
  mainText: string;
  subText?: string;
  buttonText?: string;
}

export type TSloganState = {
  slogans: Map<TSloganType, TSlogan>;
}

export type TSloganMutations<S = TSloganState> = {
  SET_SLOGAN(state: S, payload: TSlogan): void;
}

export type TSloganActions = {
  fetchSlogan(
    { commit }: ActionContext<TSloganState, TRootState>,
    type: TSloganType,
  ): void;
  updateSlogan(
    { commit }: ActionContext<TSloganState, TRootState>,
    slogan: TSlogan,
  ): void;
}

export type TSloganGetters = {
  sloganByType(
    { slogans }: TSloganState,
  ): (type: TSloganType) => TSlogan | undefined;
}
