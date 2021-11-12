import React, {useEffect, useState} from 'react';
import {getPostLikes} from '../../api/posts';
import {PostLikeListComponent} from '../../components/like';
import {PostLikePayload} from '../../redux/like';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useNavigate} from '../../hooks/useNavigate';

export const PostLikeListScreen = () => {
  const [likes, setLikes] = useState<PostLikePayload[]>([]);

  const route = useRoute();
  const {postId} = route.params;

  const {navigateToVisitingProfile} = useNavigate();

  const handlePostLikes = async () => {
    const postLikes = await getPostLikes(postId);

    setLikes(postLikes);
  };

  const handleOnClickLike = (userId: string) => {
    navigateToVisitingProfile(userId);
  };

  useEffect(() => {
    handlePostLikes();
  }, []);

  return (
    <PostLikeListComponent likes={likes} onClickLike={handleOnClickLike} />
  );
};
