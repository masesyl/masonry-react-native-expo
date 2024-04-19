export type Item = {
  key: string;
  content: string;
  heightType?: ItemHeightType;
  // could be more properties...
};

export type ItemHeightType = 'short' | 'tall';

export enum ItemHeight {
  short = 170,
  tall = 240,
}
