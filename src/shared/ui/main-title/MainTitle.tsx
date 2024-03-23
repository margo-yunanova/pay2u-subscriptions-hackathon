import { Typography } from '@mui/material';
import { FC } from 'react';

interface MainTitleProps {
  title: string;
}

export const MainTitle: FC<MainTitleProps> = ({ title }) => {
  return (
    <Typography style={{ fontSize: '22px', lineHeight: '28px' }}>
      {title}
    </Typography>
  );
};
