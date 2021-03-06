import React, { FC, ChangeEvent, useEffect } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { useUpdateAvatarMutation } from '../../services/UserAPI';
import { authActions } from '../../store/slices/authSlice';
import './Profile.scss';

interface AvatarWithLoginProps {
  avatar?: string;
  login: string;
}

export const UserThumbnail: FC<AvatarWithLoginProps> = ({ avatar, login }) => {
  const [attemptUpdateAvatar, { data: updatedUser }] = useUpdateAvatarMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (updatedUser) {
      dispatch(authActions.setCurrentUser(updatedUser));
    }
  }, [updatedUser]);

  const handleSetImage = (e: ChangeEvent) => {
    e.preventDefault();
    const formData = new FormData();
    const target = e.target as HTMLInputElement;

    if (target) {
      const files: FileList[] = target.files as unknown as FileList[];
      const avatar = files[0];

      formData.append('avatar', avatar as unknown as string | Blob);
      attemptUpdateAvatar(formData);
    }
  };

  return (
    <label className="user-thumbnail" htmlFor="image-uploader">
      <div className="user-thumbnail__avatar">
        <img className="user-thumbnail__image" src={avatar} alt={login} />
        <span className="user-thumbnail__text">{TRANSLATION.Profile.userThumbnailHoverText}</span>
      </div>
      <input
        id="image-uploader"
        className="user-thumbnail__input"
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleSetImage}
      />
      <span className="user-thumbnail__login">{login}</span>
    </label>
  );
};
