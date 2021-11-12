export type UserState = {
  isLoading: boolean;
  error: boolean;
  info: UserInfo;
};

export type UserPayload = {
  handle: string;
  name: string;
  id: string;
  profilePictureId?: string;
  profilePictureUri?: string;
  numberOfPosts: number;
  numberOfFollowers: number;
  numberOfFollowing: number;
  about?: string;
};

export type UserInfo = {
  handle: string;
  name: string;
  id: string;
  profilePictureId?: string;
  profilePictureUri?: string;
  numberOfPosts?: number;
  numberOfFollowers?: number;
  numberOfFollowing?: number;
  about?: string;
};

export type UserIdPayload = {
  id: string;
};
