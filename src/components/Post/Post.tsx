import React, { FC, useCallback, useMemo } from 'react';

import { Post as PostType } from '../../@types/ForumTypes';
import { Title } from '../ui/Title/Title';
import { Description } from '../ui/Description/Description';
import { TRANSLATION } from '../../lang/ru/translation';
import { useAuth } from '../../hooks/use-auth';
import { Icon } from '../Icon/Icon';
import { Like } from '../Icon/svgs/Like';
import { Button } from '../ui/Button/Button';
import { MainLink } from '../ui/Link/Link';
import { usePostActions } from '../../hooks/use-post-actions';

import './post.scss';

type PostProps = PostType & { className?: string };

export const Post: FC<PostProps> = props => {
  const { currentUser } = useAuth();
  const { likeText, deletePost, onLikeClick } = usePostActions(props);
  const { id, title, description, created_by, likes, className } = props;

  const isSelfPost = useMemo(() => {
    return created_by === currentUser?.id;
  }, [created_by, currentUser]);

  const onDeleteButtonClick = useCallback(() => {
    deletePost(id);
  }, [id]);

  return (
    <div className={`post ${className || ''}`}>
      <MainLink text="" extendClass="post__link" href={`/forum/${id}`} />
      <Title text={title} extendClass="post__title" />
      <Description text={description} extendClass="post__description" />
      <p className="post__likes" onClick={onLikeClick}>
        <span>{likes.length}</span>
        <Icon fill="red" width={16} height={16} viewBox="0 0 52 52">
          <Like />
        </Icon>
      </p>
      <div className="post__actions">
        <Button type="button" text={likeText} click={onLikeClick} />
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
