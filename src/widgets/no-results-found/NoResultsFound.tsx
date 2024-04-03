import { Card, Stack, CardMedia, CardContent, Typography } from '@mui/material';
import noSubscription from '../../assets/noSubscription.svg';

export const NoResultsFound = () => {
  return (
    <Card elevation={0}>
      <Stack flexDirection="column" alignItems="center" maxWidth="248px">
        <CardMedia
          component="img"
          image={noSubscription}
          sx={{
            width: '146px',
            height: '103px',
          }}
        />
        <CardContent>
          <Typography variant="h3" textAlign="center">
            Ничего не нашлось
          </Typography>
          <Typography variant="subtitle2" textAlign="center">
            Попробуйте изменить запрос
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};
