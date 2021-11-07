import React, {FC} from 'react';
import './Subtitle.scss';

interface SubtitleProps {
  extendClass?: string;
  text: string;
  theme?: 'dark' | 'light';
}

export const Subtitle: FC<SubtitleProps> = ({
                                              extendClass = '',
                                              text,
                                              theme = 'light',
                                            }: SubtitleProps) => {
  return (
    <h2
      className={
        'ui-subtitle text-center text-lg font-bold'
        + ` ui-subtitle--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
    >
      {text}
    </h2>
  );
};
