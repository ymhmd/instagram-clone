import React, {useState} from 'react';

export const useLike = (initial: boolean) => {
  const [isLiked, setIsLiked] = useState<boolean>(initial);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return {
    isLiked,
    toggleLike,
  };
};
