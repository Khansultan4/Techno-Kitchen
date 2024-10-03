import { IBuild, IRatings } from "./types";

export const initRating: IRatings = {
  id: 0,
  score: 0,
  BuildId: 0,
  UserId: 0,
  createdAt: '',
  updatedAt: '',
};

export const initBuild: IBuild = {
    id: 0,
    title: '',
    image: '',
    Ratings: [initRating],
    description: '',
    UserId: 0,
    createdAt: '',
    updatedAt: '',
  };
