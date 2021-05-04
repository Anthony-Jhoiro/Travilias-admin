import { Image } from "../types";

interface ImagesStoreState {
  images: Image[];
}

/**
 * Vuex store to manage images list
 */
export const imagesStore = {
  state: () => ({
    images: [],
  }),
  mutations: {
    addImages(state: ImagesStoreState, images: Image[]) {
      // Remove already used images
      images = images.filter(
        (p) => state.images.findIndex((i: Image) => i.id === p.id) === -1
      );

      // Add images to list
      state.images = [...state.images, ...images];
    },
    clearImages(state: ImagesStoreState) {
      state.images = [];
    },
    updateImage(state: ImagesStoreState, image: Image) {
      const index = state.images.findIndex((p) => p.id === image.id);

      if (index === -1) {
        state.images = [...state.images, image];
      } else {
        state.images = [
          ...state.images.slice(0, index),
          image,
          ...state.images.slice(index + 1),
        ];
      }
    },
  },
};
