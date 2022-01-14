import { computed, ComputedRef } from "vue";
import { useStore } from 'vuex';
import { TSlogan, TSloganType } from "../types";

interface IUseSlogan {
  fetchSlogan(): Promise<void>;
  slogan: ComputedRef<TSlogan>,
  setSlogan(slogan: TSlogan): Promise<void>,
}

export function useSlogan(type: TSloganType): IUseSlogan {
  const store = useStore();
  const fetchSlogan = async () => await store.dispatch('slogan/fetchSlogan', type);
  const slogan = computed(() => store.getters['slogan/sloganByType'](type) || {});
  const setSlogan = async (slogan: TSlogan) => await store.dispatch('slogan/updateSlogan', slogan);

  return {
    fetchSlogan,
    slogan,
    setSlogan,
  };
}