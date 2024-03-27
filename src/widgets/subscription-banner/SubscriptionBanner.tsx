import { FC } from 'react';
import { Card, CardMedia } from '@mui/material';

interface SubscriptionBannerProps {
  image: string;
}

export const SubscriptionBanner: FC<SubscriptionBannerProps> = ({ image }) => {
  return (
    <Card
      style={{
        width: '90px',
        borderRadius: '12px',
      }}
    >
      <CardMedia component="img" image={image} height="160px"></CardMedia>
    </Card>
  );
};
