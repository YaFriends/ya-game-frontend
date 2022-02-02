import React, { FC } from 'react';

import './forum-post.scss';
import { Title } from '../../components/ui/Title/Title';
import { useLoadPostQuery } from '../../services/ForumAPI';
import { useParams } from 'react-router';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Text } from '../../components/ui/Text/Text';
import { Error404 } from '../Error404/Error404';
import { PostComment } from '../../components/PostComment/PostComment';
import { TRANSLATION } from '../../lang/ru/translation';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';

type PageParams = {
  id: string;
};

export const ForumPost: FC = () => {
  const { id }: PageParams = useParams();
  const { data: post, isLoading } = useLoadPostQuery(Number(id));

  if (isLoading) {
    return <Spinner />;
  }

  if (!post) {
    return <Error404 />;
  }

  const { title, description, comments } = post;

  return (
    <div className="forum-post">
      <div className="forum-post__head">
        <Title text={title} extendClass="!text-left mb-5" />
        <Text text={description} />
      </div>
      <div className="forum-post__actions"></div>
      <div className="forum-post__comments">
        <Subtitle text={TRANSLATION.Post.comments} extendClass="!text-left mb-3" />
        {comments.length ? (
          comments.map(({ id, ...props }) => <PostComment key={id} id={id} {...props} />)
        ) : (
          <Text text={TRANSLATION.Post.noComments} />
        )}
      </div>
    </div>
  );
};
