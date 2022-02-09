import React, { FC, useCallback, useMemo, useState } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { useCreatePostMutation, useLoadPostsQuery } from '../../services/ForumAPI';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Post } from '../../components/Post/Post';
import { Title } from '../../components/ui/Title/Title';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Button } from '../../components/ui/Button/Button';
import { useAuth } from '../../hooks/use-auth';
import { Popup } from '../../components/ui/Popup/Popup';
import { Input } from '../../components/ui/Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PostSchema } from '../../utils/ValidateSchema';
import { PostCreationAttributes, PostCreationFN } from '../../../backend/models/Post';
import { Form } from '../../components/ui/Form/Form';
import { Textarea } from '../../components/ui/Textarea/Textarea';
import { MainLink } from '../../components/ui/Link/Link';

import './Forum.scss';

export const Forum: FC = () => {
  const { currentUser } = useAuth();
  const { data: posts = [], isLoading } = useLoadPostsQuery();
  const [createPost] = useCreatePostMutation();

  const postsInfo = useMemo(() => {
    if (isLoading) {
      return <Spinner />;
    }

    if (posts.length === 0) {
      return <Subtitle extendClass="m-2" text={TRANSLATION.Forum.noPosts} />;
    }

    return posts.map(({ id, ...props }) => (
      <Post key={id} className="forum__content-item" id={id} {...props} />
    ));
  }, [isLoading, posts]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPostCreationPopup = useCallback(() => {
    setIsPopupVisible(true);
  }, [currentUser]);

  const getDefaultPostCreationValues = useCallback(
    () => ({
      title: '',
      description: '',
      created_by: currentUser?.id,
    }),
    [currentUser]
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<PostCreationAttributes>({
    criteriaMode: 'all',
    resolver: yupResolver(PostSchema),
    defaultValues: getDefaultPostCreationValues(),
  });

  const onPostCreate = useCallback<PostCreationFN>(data => {
    createPost(data).then(() => {
      reset(getDefaultPostCreationValues());
    });
    setIsPopupVisible(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsPopupVisible(false);
  }, []);

  return (
    <section className="main forum">
      <div className="forum__head">
        <Title text={TRANSLATION.Forum.label} />
        <div className="forum__head-actions">
          <MainLink
            href="/"
            text={TRANSLATION.Forum.back}
            extendClass="ui-link--button w-auto !mx-0 mb-4"
          />
          <Button type="button" text={TRANSLATION.Forum.createPost} click={showPostCreationPopup} />
        </div>
      </div>
      <div className="forum__content">{postsInfo}</div>
      <Popup
        isShown={isPopupVisible}
        title={TRANSLATION.Forum.popupTitle}
        textButton={TRANSLATION.Forum.popupSend}
        onSubmit={handleSubmit(onPostCreate)}
        onClose={handleClose}>
        <Form extendClass="px-3" name="profileEdit" submit={handleSubmit(onPostCreate)}>
          <Input
            error={errors.title}
            register={register}
            name="title"
            label={TRANSLATION.Forum.popupTitleInput}
          />
          <Textarea
            error={errors.description}
            register={register}
            name="description"
            label={TRANSLATION.Forum.popupDescriptionInput}
          />
        </Form>
      </Popup>
    </section>
  );
};
