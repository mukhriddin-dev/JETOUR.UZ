import {create} from "zustand";

type Store = {
    play:boolean;
    setPlay: () => void;
};

const usePlayStore = create<Store>()((set) => ({
    play: false,
    setPlay: () => set((state) => ({play:!state.play})),
})); 


export default usePlayStore;

