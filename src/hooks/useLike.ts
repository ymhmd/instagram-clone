import React, { useState } from "react";

export const useLike = (initial: boolean, initialLikesCount: number) => {
  const [isLiked, setIsLiked] = useState<boolean>(initial);
  const [likesCount, setLikesCount] = useState<number>(initialLikesCount);

  const toggleLike = () => {
    setIsLiked(!isLiked);

    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  };

  return {
    isLiked,
    toggleLike,
    likesCount,
  };
};
