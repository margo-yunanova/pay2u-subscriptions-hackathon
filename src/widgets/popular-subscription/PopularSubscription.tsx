import { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { IMainSubscription } from '../../shared/utils/type';

export const PopularSubscription: FC<IMainSubscription> = ({ logo, name }) => {
  return (
    <IconButton aria-label={`Перейти на страницу подписки ${name}`}>
      <Card
        elevation={0}
        style={{
          width: '54px',
        }}
      >
        <CardMedia
          component="img"
          image={logo}
          height={'54px'}
          sx={{ objectFit: 'contain' }}
          alt={`Логотип ${name}`}
        ></CardMedia>
        <CardContent style={{ padding: '4px 0' }}>
          <Typography variant="body1" style={{ wordBreak: 'normal' }}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </IconButton>
  );
};
