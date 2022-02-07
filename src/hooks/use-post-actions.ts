import { Post } from '../@types/ForumTypes';
import {
  useDeletePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
} from '../services/ForumAPI';
import { useAuth } from './use-auth';
import { useCallback, useMemo } from 'react';
import { TRANSLATION } from '../lang/ru/translation';

type UsePostActionParams = {
  alreadyLiked: boolean;
  likeText: string;
  deletePost: (any: any) => any;
  onLikeClick: () => void;
};

export const usePostActions = (post?: Post): UsePostActionParams => {
  const { currentUser } = useAuth();
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const { id, likes } = post || {};
  const alreadyLiked = useMemo(() => {
    return (
      Boolean(likes?.length) && Boolean(likes?.find(({ user_id }) => user_id === currentUser?.id))
    );
  }, [likes, currentUser]);

  const onLikeClick = useCallback(() => {
    if (!currentUser || !id) {
      return;
    }

    if (alreadyLiked) {
      unlikePost({ id, user_id: currentUser.id });
    } else {
      likePost({ id, user_id: currentUser.id });
    }
  }, [alreadyLiked, currentUser, id]);

  const likeText = useMemo(() => {
    if (alreadyLiked) {
      return TRANSLATION.Post.unlike;
    }

    return TRANSLATION.Post.like;
  }, [alreadyLiked]);

  return { alreadyLiked, deletePost, onLikeClick, likeText };
};
