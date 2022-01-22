import React, { Fragment, memo } from 'react';

import { MiniGamePreviewsProps } from '../../@types/GameSet';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';

type Props = MiniGamePreviewsProps;

export const MiniGamePreviews = memo(function MiniGamePreviews({ miniGames, className }: Props) {
  const previews = miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} name={name} id={id} icon={icon} classes={className} />
  ));
  return <Fragment>{previews}</Fragment>;
});
