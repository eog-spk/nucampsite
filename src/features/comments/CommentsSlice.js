import { COMMENTS } from "../../app/shared/COMMENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsArray: COMMENTS,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.commentsArray.push(action.payload);
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};

export const selectCommentById = (id) => {
  return COMMENTS.find((comment) => comment.id === parseInt(id));
};
