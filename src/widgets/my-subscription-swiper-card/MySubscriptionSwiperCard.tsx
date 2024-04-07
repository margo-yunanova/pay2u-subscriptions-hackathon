import { Card as CardBase, CardProps, styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { IMySubscription } from '../../shared/utils/type';
import { tariffInfo } from '../../shared/utils/constants';

const StyledMySubscriptionSwiperCard = styled(CardBase)<CardProps>(() => ({
  width: '160px',
  borderRadius: '17px',
  position: 'relative',
}));

export const MySubscriptionSwiperCard: FC<IMySubscription> = ({
  name,
  tariff,
  due_date,
  logo,
}) => {
  const theme = useTheme();

  const date = new Date(due_date).toLocaleDateString('ru');

  return (
    <StyledMySubscriptionSwiperCard elevation={4}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '38px 8px 12px',
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1" letterSpacing={0}>
          Подписка на {tariffInfo[tariff.period].period}
        </Typography>
        <Typography
          sx={{
            fontSize: '10px',
            color: theme.palette.text.greyDusk1,
            fontWeight: '300',
          }}
        >
          Активна до: {date}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={logo}
        alt={`Логотип ${name}`}
        sx={{
          width: '65px',
          height: '65px',
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          objectFit: 'contain',
        }}
      />
    </StyledMySubscriptionSwiperCard>
  );
};
