export interface ISidepanel {
  title: string;
  component: string;
  mode?: string;
  place: string;
  width?: number | string;
  data?: {};

  [key: string]: any;
}

export type ISidepanelOpen = (arg: ISidepanel) => void;
