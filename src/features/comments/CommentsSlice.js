import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};

export const selectCommentById = (id) => {
  return COMMENTS.find((comment) => comment.id === parseInt(id));
};
