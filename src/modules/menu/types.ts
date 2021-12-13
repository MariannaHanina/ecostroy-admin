import { TRootState } from "@/store/types"
import { ActionContext } from "vuex";

export type TMenuItem = {
  id: string;
  title: string;
  path: string;
  items?: Array<TMenuItem>;
}

export type TMenuState = {
  menu: TMenuItem[];
}

export type TMenuMutations<S = TMenuState> = {
  SET_MENU(state: S, payload: TMenuItem[]): void;
}

export type TMenuActions = {
  fetchMenu(
    { commit }: ActionContext<TMenuState, TRootState>,
  ): void;
}