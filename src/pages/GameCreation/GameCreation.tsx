import React, { FC, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './GameCreation.scss';
import { MainLink } from '../../components/ui/Link/Link';
import { Select, OptionProps, SelectedChangeType } from '../../components/ui/Select/Select';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

import { InvitationLink } from './InvitationLink';

const numberOfGames: OptionProps[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3', disabled: true },
];

export const GameCreation: FC<Record<string, never>> = () => {
  const [gameCount, setGameCount] = useState<OptionProps>(numberOfGames[0]);
  const { path, url } = useRouteMatch();

  const changeGameCount: SelectedChangeType = count => setGameCount(count);

  return (
    <section className="game-creation">
      <Switch>
        <Route path={path} exact>
          <div className="game-creation__header">
            <MainLink text={TRANSLATION.GameCreation.BackLink} href="/" />
            <Title text={TRANSLATION.GameCreation.CreateSession} />
          </div>
          <div className="game-creation__select">
            <Select
              label={TRANSLATION.GameCreation.SelectLabel}
              options={numberOfGames}
              selected={gameCount}
              onSelectedChange={changeGameCount}
              placeholder={TRANSLATION.GameCreation.SelectPlaceholder}
            />
          </div>
          <MainLink
            text={TRANSLATION.GameCreation.ButtonText}
            extendClass="ui-link--button-success"
            href={`${url}/link`}
          />
        </Route>
        <Route path={`${path}/link`}>
          <InvitationLink />
        </Route>
      </Switch>
    </section>
  );
};
