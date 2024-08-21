export type ViewPort = "xs" | "md" | "xl";

export type TImage = {
  id: number;
  url: string;
  xs: string;
  md: string;
  xl: string;
};

export type FormState = {
  name: string;
  wish: string;
  accept: "Bận" | "Tham gia" | "Trả lời sau" | null;
};
