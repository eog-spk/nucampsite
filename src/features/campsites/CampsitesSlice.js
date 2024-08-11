import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = {
  campsites: CAMPSITES,
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsites;
};

export const selectRandomCampsite = () => {
  const randomIndex = Math.floor(Math.random() * CAMPSITES.length);
  return CAMPSITES[randomIndex];
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsites.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsites = (state) => {
  return state.campsites.campsites.find((campsite) => campsite.featured);
};
