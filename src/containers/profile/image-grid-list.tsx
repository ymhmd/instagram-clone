import React from 'react';
import {Loader} from '../../components/common';
import {ImageGridListComponent} from '../../components/profile/image-grid-list';
import {UserPostInfo} from '../../redux/posts';

type Props = {
  posts: UserPostInfo[] | undefined;
  isLoading: boolean;
};

export const ImageGridList = ({posts, isLoading}: Props) => {
  const handleOnClickImage = (id: string) => {
    console.log(`image ${id} clicked`);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <ImageGridListComponent
      imageListData={posts}
      onClickImage={handleOnClickImage}
    />
  );
};
