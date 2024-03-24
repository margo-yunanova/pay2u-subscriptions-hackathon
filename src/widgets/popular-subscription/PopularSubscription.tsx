import { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

export interface PopularSubscriptionProps {
  title?: string;
  image?: string;
}

export const PopularSubscription: FC<PopularSubscriptionProps> = ({
  image,
  title,
}) => {
  return (
    <IconButton>
      <Card
        elevation={0}
        style={{
          width: '44px',
        }}
      >
        <CardMedia component="img" image={image} height={'44px'}></CardMedia>
        <CardContent style={{ padding: '0px' }}>
          <Typography variant="body1" style={{ wordBreak: 'normal' }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </IconButton>
  );
};
