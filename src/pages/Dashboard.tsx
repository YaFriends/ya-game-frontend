import React, { FC } from 'react';

import { Menu } from '../components/Menu';

export const Dashboard: FC<Record<string, never>> = () => {
  return (
    <section>
      <Menu />
      Dashboard
    </section>
  );
};
