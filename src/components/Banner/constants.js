import { ErrorIcon, SuccessIcon, AlertIcon, InfoIcon } from "../Icons";

export const variants = ["error", "success", "alert", "info", "custom"];
export const variantsIcons = {
  [variants[0]]: ErrorIcon,
  [variants[1]]: SuccessIcon,
  [variants[2]]: AlertIcon,
  [variants[3]]: InfoIcon,
  [variants[4]]: InfoIcon
};
