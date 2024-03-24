export type { Palette } from '@mui/material/styles';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

declare module '@mui/material/styles' {
  interface TypeBackground {
    brandDay1?: Color;
    brandDay2?: Color;
    brandDayDark?: Color;
    brandDay5: Color;
    accent?: Color;
  }

  interface TypeText {
    baseWhite?: Color;
    baseBlue?: Color;
    brandDay1?: Color;
    brandDay2?: Color;
    brandDayDark?: Color;
    accentDeepDark?: Color;
    greyDusk2?: Color;
    greyDusk1?: Color;
  }

  interface TypographyVariants {
    link: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    link?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}
