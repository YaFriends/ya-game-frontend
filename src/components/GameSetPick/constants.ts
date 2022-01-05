export type PICK_CHOOSE = {
  type: 'pick' | 'ban' | 'decider';
  icon: string;
};

export const PICK_CHOOSES: PICK_CHOOSE[] = [
  {
    type: 'pick',
    icon: '/static/img/pick/pick.jpg',
  },
  {
    type: 'ban',
    icon: '/static/img/pick/ban.jpg',
  },
  {
    type: 'decider',
    icon: '/static/img/pick/decider.jpg',
  },
];
