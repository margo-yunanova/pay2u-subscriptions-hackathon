import { Card as CardBase, CardProps, styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { TariffCardProps } from '../tariff-card/TariffCard';

const StyledMySubscriptionSwiperCard = styled(CardBase)<CardProps>(() => ({
  width: '160px',
  borderRadius: '17px',
  position: 'relative',
}));

export interface MySubscriptionSwiperCardProps {
  id: number;
  name: string;
  logo: string;
  cashback: number;
  tariff: TariffCardProps;
  pay_status: true;
  dueDate: string;
}

export const MySubscriptionSwiperCard: FC<MySubscriptionSwiperCardProps> = ({
  name,
  tariff,
  dueDate,
  logo,
}) => {
  const theme = useTheme();

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
          {/* TODO поставить месяц в правильный падеж */}
          Подписка на {tariff.period} месяца
        </Typography>
        <Typography
          sx={{
            fontSize: '10px',
            color: theme.palette.text.greyDusk1,
            fontWeight: '300',
          }}
        >
          Активна до: {dueDate}
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
        }}
      />
    </StyledMySubscriptionSwiperCard>
  );
};
