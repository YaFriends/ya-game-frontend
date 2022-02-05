import React, { FC, useMemo } from 'react';
import { cloneDeep } from 'lodash';

import { Title } from '../../components/ui/Title/Title';
import { useLoadPostQuery } from '../../services/ForumAPI';
import { useParams } from 'react-router';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Text } from '../../components/ui/Text/Text';
import { Error404 } from '../Error404/Error404';
import { PostComment } from '../../components/PostComment/PostComment';
import { TRANSLATION } from '../../lang/ru/translation';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { usePostActions } from '../../hooks/use-post-actions';
import { Button } from '../../components/ui/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import { Like } from '../../components/Icon/svgs/Like';
import { Comment } from '../../components/Icon/svgs/Comment';
import { PostAddComment } from '../../components/PostAddComment/PostAddComment';

import './forum-post.scss';
import { MainLink } from '../../components/ui/Link/Link';

type PageParams = {
  id: string;
};

export const ForumPost: FC = () => {
  const { id: postId }: PageParams = useParams();
  const { data: post, isLoading } = useLoadPostQuery(Number(postId));
  const { likeText, onLikeClick } = usePostActions(post);

  let { comments } = post || {};

  const rootComments = useMemo(() => {
    if (!comments) {
      return [];
    }

    const cloneComments = cloneDeep(comments);

    cloneComments.forEach(comment => {
      if (comment.parentId) {
        const rootComment = cloneComments.find(({ id }) => id === comment.parentId);
        if (rootComment) {
          if (!rootComment.children) {
            rootComment.children = [];
          }
          rootComment.children.push(comment);
        }
      }
    });

    return cloneComments.filter(({ parentId }) => parentId === null);
  }, [comments]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!post) {
    return <Error404 />;
  }

  const { id, title, description, likes } = post;

  return (
    <div className="forum-post">
      <div className="forum-post__block">
        <MainLink
          href="/forum"
          text={TRANSLATION.Post.back}
          extendClass="ui-link--button w-auto !mx-0 mb-4"
        />
        <div className="forum-post__block-line forum-post__block-line--between">
          <Title text={title} extendClass="!text-left mb-5" />
          <div className="forum-post__info">
            <button
              className="forum-post__info-item forum-post__info-item--clickable"
              onClick={onLikeClick}>
              <Icon fill="red" width={16} height={16} viewBox="0 0 52 52">
                <Like />
              </Icon>
              <span>{likes.length}</span>
            </button>
            <p className="forum-post__info-item" onClick={onLikeClick}>
              <Icon fill="black" width={16} height={16} viewBox="0 0 24 24">
                <Comment />
              </Icon>
              <span>{comments?.length || 0}</span>
            </p>
          </div>
        </div>
        <Text text={description} />
      </div>
      <div className="forum-post__block">
        <Button
          type="button"
          text={likeText}
          click={onLikeClick}
          extendClass="w-auto px-3 mx-0 mr-2"
        />
      </div>
      <div className="forum-post__block">
        <div className="forum-post__add-comment">
          <Subtitle text={TRANSLATION.Post.addComment} extendClass="!text-left mb-3" />
          <PostAddComment postId={id} />
        </div>
        <Subtitle text={TRANSLATION.Post.comments} extendClass="!text-left mb-3" />
        {rootComments.length ? (
          rootComments.map(comment => (
            <PostComment key={comment.id} comment={comment} post_id={id} />
          ))
        ) : (
          <Text text={TRANSLATION.Post.noComments} />
        )}
      </div>
    </div>
  );
};
