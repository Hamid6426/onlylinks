import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from "react-icons/bi";

export const ALIGN_OPTIONS = [
  { value: "left", Icon: BiAlignLeft },
  { value: "center", Icon: BiAlignMiddle },
  { value: "right", Icon: BiAlignRight },
];

export const ANIMATION_OPTIONS = [
  { value: "none", label: "none" },
  { value: "bounce", label: "bounce" },
  { value: "jello", label: "jello" },
  { value: "wobble", label: "wobble" },
  { value: "pulse", label: "pulse" },
  { value: "shake", label: "shake" },
  { value: "tada", label: "tada" },
];
