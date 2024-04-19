export type MasonryListProps = {
  data: Item[];
};

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

export type GradientPropsType = {
  [key: number]: { cx: string; cy: string; r: string; };
  default: { cx: string; cy: string; r: string; };
};

export type StopType = {
  offset: string;
  stopColor: string;
  stopOpacity: string;
};
