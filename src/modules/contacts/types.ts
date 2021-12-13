import { TRootState } from "@/store/types"
import { ActionContext } from "vuex";

export type TContacts = {
  address: string;
  phones: string[];
  email: string;
}

export type TContactsState = {
  contacts: TContacts;
}

export type TContactsMutations<S = TContactsState> = {
  SET_CONTACTS(state: S, payload: TContacts): void;
}

export type TContactsActions = {
  fetchContacts(
    { commit }: ActionContext<TContactsState, TRootState>,
  ): void;
}