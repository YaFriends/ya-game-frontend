import { FC } from 'react';

export type Route = {
  name: string,
  path: string,
  component: FC,
  exact?: boolean,
}
