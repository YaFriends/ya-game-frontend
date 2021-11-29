import React, { memo } from 'react';

export type MiniGamePreviewProps = {
  id: number;
  name: string;
  icon: string;
  classes?: string;
};

export const MiniGamePreview = memo(function MiniGamePreview({
  id,
  icon,
  name,
  classes,
}: MiniGamePreviewProps) {
  return (
    <div key={id} className={classes}>
      <img src={icon} alt={name} />
    </div>
  );
});
