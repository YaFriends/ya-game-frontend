import React, { FC, useCallback, useMemo } from 'react';

import { Post as PostType } from '../../@types/ForumTypes';
import { Title } from '../ui/Title/Title';
import { Description } from '../ui/Description/Description';
import { TRANSLATION } from '../../lang/ru/translation';
import { useAuth } from '../../hooks/use-auth';
import { Icon } from '../Icon/Icon';
import { Like } from '../Icon/svgs/Like';

import './post.scss';
import { Button } from '../ui/Button/Button';
import {
  useDeletePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
} from '../../services/ForumAPI';
import { MainLink } from '../ui/Link/Link';

type PostProps = PostType & { className?: string };

export const Post: FC<PostProps> = props => {
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const { currentUser } = useAuth();
  const { id, title, description, created_by, likes, className } = props;
  const alreadyLiked = useMemo(() => {
    return (
      Boolean(likes.length) && Boolean(likes.find(({ user_id }) => user_id === currentUser?.id))
    );
  }, [likes, currentUser]);

  const likeActionName = useMemo(() => {
    if (alreadyLiked) {
      return TRANSLATION.Post.unlike;
    }

    return TRANSLATION.Post.like;
  }, [alreadyLiked]);
  const isSelfPost = useMemo(() => {
    return created_by === currentUser?.id;
  }, [created_by, currentUser]);

  const onDeleteButtonClick = useCallback(() => {
    deletePost(id);
  }, [id]);

  const onLikeButtonClick = useCallback(() => {
    if (!currentUser) {
      return;
    }
    if (alreadyLiked) {
      unlikePost({ id, user_id: currentUser.id });
    } else {
      likePost({ id, user_id: currentUser.id });
    }
  }, [alreadyLiked, currentUser, isSelfPost, id]);

  return (
    <div className={`post ${className || ''}`}>
      <MainLink text="" extendClass="post__link" href={`/forum/${id}`} />
      <Title text={title} extendClass="post__title" />
      <Description text={description} extendClass="post__description" />
      <p className="post__likes" onClick={onLikeButtonClick}>
        {Boolean(likes.length) && <span>{likes.length}</span>}
        <Icon fill="red" width={16} height={16} viewBox="0 0 52 52">
          <Like />
        </Icon>
      </p>
      <div className="post__actions">
        <Button type="button" text={likeActionName} click={onLikeButtonClick} />
        {isSelfPost && (
          <Button
            type="button"
            typeAction="error"
            click={onDeleteButtonClick}
            text={TRANSLATION.Post.delete}
          />
        )}
      </div>
    </div>
  );
};
