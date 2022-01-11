import React, { FC } from 'react';

import { MainLink } from '../../components/ui/Link/Link';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Text } from '../../components/ui/Text/Text';
import { Title } from '../../components/ui/Title/Title';
import './Main.scss';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';

export const Main: FC<Record<string, never>> = () => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <section className="main">
      <header className="main__header">
        <div className="main__link">
          <MainLink text={TRANSLATION.Main.linkToRegister} href="/register" theme={currentTheme} />
          <MainLink text={TRANSLATION.Main.linkToLogin} href="/login" theme={currentTheme} />
        </div>
      </header>
      <Title text={TRANSLATION.Main.label} extendClass="text-9xl" theme={currentTheme} />
      <Subtitle
        text={TRANSLATION.Main.gamesLabel}
        extendClass="text-4xl mt-8 mb-16"
        theme={currentTheme}
      />
      <div className="main__games">
        <div className="main__game">
          <img
            src="/static/img/games/circle_triangle_square/icon.jpg"
            alt="circle_triangle_square"
          />
          <div>
            <Subtitle text={TRANSLATION.Main.circle_triangle_square} theme={currentTheme} />
            <Text text={TRANSLATION.Main.circle_triangle_squareDesc} theme={currentTheme} />
          </div>
        </div>
        <div className="main__game">
          <div>
            <Subtitle text={TRANSLATION.Main.click_more} theme={currentTheme} />
            <Text text={TRANSLATION.Main.click_moreDesc} theme={currentTheme} />
          </div>
          <img src="/static/img/games/click_more/icon.jpg" alt="click_more" />
        </div>
        <div className="main__game">
          <img src="/static/img/games/tic_tac_toe/icon.jpg" alt="tic_tac_toe" />
          <div>
            <Subtitle text={TRANSLATION.Main.tic_tac_toe} theme={currentTheme} />
          </div>
        </div>
        <div className="main__game">
          <div>
            <Subtitle text={TRANSLATION.Main.field_battle} theme={currentTheme} />
            <Text text={TRANSLATION.Main.field_battleDesc} theme={currentTheme} />
          </div>
          <img src="/static/img/games/field_battle/icon.jpg" alt="field_battle" />
        </div>
        <div className="main__game">
          <img src="/static/img/games/bombermans/icon.jpg" alt="bombermans" />
          <div>
            <Subtitle text={TRANSLATION.Main.bombermans} theme={currentTheme} />
            <Text text={TRANSLATION.Main.bombermansDesc} theme={currentTheme} />
          </div>
        </div>
      </div>
      <Subtitle
        text={TRANSLATION.Main.team}
        extendClass="text-4xl mt-8 mb-16"
        theme={currentTheme}
      />
      <div className="main__team">
        <div className="main__team-card">
          <img src="/static/img/team/yura.webp" alt={TRANSLATION.Main.teamName1} />
          <Subtitle text={TRANSLATION.Main.teamName1} theme={currentTheme} />
        </div>
        <div className="main__team-card">
          <img src="/static/img/team/roman.webp" alt={TRANSLATION.Main.teamName2} />
          <Subtitle text={TRANSLATION.Main.teamName2} theme={currentTheme} />
        </div>
        <div className="main__team-card">
          <img src="/static/img/team/vigen.webp" alt={TRANSLATION.Main.teamName3} />
          <Subtitle text={TRANSLATION.Main.teamName3} theme={currentTheme} />
        </div>
        <div className="main__team-card">
          <img src="/static/img/team/sergey.webp" alt={TRANSLATION.Main.teamName4} />
          <Subtitle text={TRANSLATION.Main.teamName4} theme={currentTheme} />
        </div>
      </div>
    </section>
  );
};
