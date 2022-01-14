import { TRootState } from "@/store/types"
import { ActionContext } from "vuex";

export type TService = {
  _id?: string;
  title: string;
  intro: string;
  text?: string;
  type: string;
  image?: string;
  content?: string;
  button?: {
    text: string;
    callback?: () => void;
  };
}


export type TServicesState = {
  services: Map<string, TService>;
}

export type TServicesMutations<S = TServicesState> = {
  SET_SERVICES(state: S, payload: TService[]): void;
  // SET_SERVICE(state: S, payload: TService): void;
}

export type TServicesActions = {
  fetchServices(
    { commit }: ActionContext<TServicesState, TRootState>
  ): void;
  updateServices(
    { commit }: ActionContext<TServicesState, TRootState>,
    services: TService[],
  ): void;
  // updateService(
  //   { commit }: ActionContext<TServicesState, TRootState>,
  //   service: TService,
  // ): void;
}


export type TServicesGetters = {
  services(
    { services }: TServicesState
  ): TService[];
}