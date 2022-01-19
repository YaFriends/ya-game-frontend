import { Rivals } from '../@types/MiniGame';

export const getRivals = (rivals: Rivals): string => rivals.map(({ login }) => login).join(' vs ');
