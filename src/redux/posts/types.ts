export type PostState = {
  userPosts: UserPost;
  homePosts: HomePost;
};

type UserPost = {
  isLoading: boolean;
  error: boolean;
  userPostInfo: UserPostInfo[] | undefined;
};

type HomePost = {
  isLoading: boolean;
  error: boolean;
  homePostInfo: HomePostInfo[] | undefined;
};

export type UserPostInfo = {
  _id: string;
  userId: string;
  imageUri: string;
  imageId: string;
  caption?: string;
  createdAt: Date;
};

export type HomePostInfo = {
  _id: string;
  userId: string;
  userImageUri: string;
  handle: string;
  imageUri: string;
  numberOfLikes: number;
  numberOfComments: number;
  create_date: Date;
  caption?: string;
  likedByMe: boolean;
};

export type UserPostPayload = {
  _id: string;
  userId: string;
  imageUri: string;
  imageId: string;
  caption?: string;
  createdAt: Date;
};

export type HomePostPayload = {
  _id: string;
  userImageUri: string;
  userId: string;
  handle: string;
  imageUri: string;
  imageId: string;
  create_date: Date;
  caption?: string;
  numberOfLikes: number;
  likedByMe: boolean;
  numberOfComments: number; //NO
};
