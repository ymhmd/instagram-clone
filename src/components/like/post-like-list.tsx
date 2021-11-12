import React from 'react';
import {View} from 'react-native';
import {PostLikePayload} from '../../redux/like';

import {PostLikeListItemComponent} from './post-like-list-item';

type Props = {
  likes: PostLikePayload[];
  onClickLike: (id: string) => void;
};

export const PostLikeListComponent = ({likes, onClickLike}: Props) => {
  return (
    <View>
      {likes.map(like => (
        <PostLikeListItemComponent
          key={like._id}
          userId={like.userId}
          userHandle={like.userHandle}
          userName={like.userName}
          userImageUri={like.userProfilePictureUri}
          onClickLike={onClickLike}
        />
      ))}
    </View>
  );
};
