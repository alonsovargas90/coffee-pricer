import { Price, Size, Creamer } from "@types"

export const SIZE_PRICES: Readonly<Record<Size, Price>> = {
  small: 1.0,
  medium: 1.5,
  large: 2.0,
};

export const CREAMER_PRICES: Readonly<Record<Creamer, Price>> = {
  none: 0,
  dairy: 0.25,
  'non-dairy': 0.5,
};