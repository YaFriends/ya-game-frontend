import React, { FC, useCallback, useMemo, useState } from 'react';
import { PostComment as PostCommentType } from '../../@types/ForumTypes';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../constants';
import { PostAddComment } from '../PostAddComment/PostAddComment';
import { Button } from '../ui/Button/Button';
import { TRANSLATION } from '../../lang/ru/translation';

import './post-comment.scss';
import { Text } from '../ui/Text/Text';

type PostCommentProps = {
  comment: PostCommentType;
  post_id: number;
};

export const PostComment: FC<PostCommentProps> = props => {
  const [isCommentOpen, setIsCommentOpened] = useState(false);
  const { comment, post_id } = props;
  const onCommentClick = useCallback(() => {
    setIsCommentOpened(true);
  }, [post_id, comment]);

  const renderComments = useMemo(() => {
    if (!comment.children) {
      return null;
    }

    return comment.children.map(child => (
      <PostComment key={child.id} comment={child} post_id={post_id} />
    ));
  }, [comment]);

  return (
    <div className="post-comment">
      <div className="post-comment__body">
        <div className="post-comment__author">
          <div className="post-comment__author-avatar">
            <img src={DEFAULT_PROFILE_IMAGE_PATH} alt="test" />
          </div>
          <Text text="TEST_NAME" extendClass="post-comment__author-name" />
        </div>
        <Text text={comment.content} extendClass="post-comment__content" />
      </div>
      {!isCommentOpen && (
        <div className="post-comment__actions">
          <Button
            type="button"
            click={onCommentClick}
            text={TRANSLATION.Post.reply}
            extendClass="w-auto !mx-0 px-3"
          />
        </div>
      )}
      {isCommentOpen && (
        <PostAddComment
          postId={post_id}
          parentId={comment.id}
          onSend={() => setIsCommentOpened(false)}
        />
      )}
      {renderComments && <div className="post-comment__children">{renderComments}</div>}
    </div>
  );
};
