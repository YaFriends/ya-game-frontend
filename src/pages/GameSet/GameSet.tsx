import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { MiniGamePreview } from '../../components/MiniGamePreview/MiniGamePreview';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import { GameSetController } from '../../controllers/GameSetController';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setGameSet } from '../../store/slices/GameSetSlice';

import './game-set.scss';

type PageParams = {
  id?: string;
};

export const GameSet: FC<Record<string, never>> = () => {
  const { id: setId }: PageParams = useParams();
  const [sessionLoading, setSessionLoading] = useState(true);

  const dispatch = useAppDispatch();
  const { gameSet } = useAppSelector(state => state.gameSet);
  useEffect(() => {
    GameSetController.loadSession(Number(setId)).then(session => {
      dispatch(setGameSet(session));
      setSessionLoading(false);
    });
  }, [setId]);

  if (sessionLoading) {
    return (
      <section className="game-set">
        <Title text={`Идет загрузка сессии: ${setId}`} />
      </section>
    );
  }

  const miniGamePreviews = gameSet?.miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="game-set__mini-game" />
  ));

  return (
    <section className="game-set">
      <Title text="Выбранные игры" extendClass="mb-6" />
      <div className="game-set__mini-games">{miniGamePreviews}</div>
      <Subtitle text="Загрузка..." />
    </section>
  );
};
