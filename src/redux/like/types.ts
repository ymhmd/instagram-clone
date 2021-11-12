export type PostLikePayload = {
  _id: string;
  userId: string;
  userHandle: string;
  userName: string;
  userProfilePictureUri?: string;
  postId: string;
  postUserId: string;
  create_date: Date;
};
