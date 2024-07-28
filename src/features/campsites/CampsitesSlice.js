import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  const randomIndex = Math.floor(Math.random() * CAMPSITES.length);
  return CAMPSITES[randomIndex];
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsites = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
