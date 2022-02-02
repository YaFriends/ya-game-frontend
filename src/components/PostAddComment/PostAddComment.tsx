import React, { FC, useCallback, useState } from 'react';

import { Form } from '../ui/Form/Form';
import { Textarea } from '../ui/Textarea/Textarea';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { PostSchema } from '../../utils/ValidateSchema';
import { useCommentPostMutation } from '../../services/ForumAPI';
import { useAuth } from '../../hooks/use-auth';
import { Icon } from '../Icon/Icon';
import { Send } from '../Icon/svgs/Send';

import './post-add-comment.scss';

type FormData = {
  message: string;
};

type PostAddCommentProps = {
  postId: number;
  parentId?: number;
};

export const PostAddComment: FC<PostAddCommentProps> = props => {
  const { currentUser } = useAuth();
  const [commentPost] = useCommentPostMutation();
  const [messageFilled, setMessageFilled] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: 'all',
    resolver: yupResolver(PostSchema),
    defaultValues: {
      message: '',
    },
  });

  const { postId, parentId } = props;

  const onSubmit = useCallback(
    (data: FormData) => {
      if (!currentUser) {
        return;
      }

      commentPost({
        content: data.message,
        postId,
        parentId,
        userId: currentUser.id,
      });

      reset({ message: '' });
    },
    [postId, parentId, currentUser]
  );

  const handleTextAreaInput = useCallback(() => {
    setMessageFilled(Boolean(getValues('message').length));
  }, [postId, parentId]);

  return (
    <div className="post-add-comment">
      <Form name="send-comment" submit={handleSubmit(onSubmit)}>
        <Textarea
          error={errors.message}
          register={register}
          name="message"
          onInput={handleTextAreaInput}
          extendClass="mb-0!"
        />
        {messageFilled && (
          <button>
            <Icon fill="white" width={25} height={25} viewBox="0 0 493 493">
              <Send />
            </Icon>
          </button>
        )}
      </Form>
    </div>
  );
};
