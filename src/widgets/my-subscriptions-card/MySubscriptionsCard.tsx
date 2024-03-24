import { Card as CardBase, CardProps, styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import image from '../../assets/ivi.png';

const StyledMySubscriptionsCard = styled(CardBase)<CardProps>(() => ({
  width: '160px',
  borderRadius: '17px',
  position: 'relative',
}));

export interface MySubscriptionsCardProps {
  title?: string;
  period?: string;
  dueDate?: string;
  logo?: string;
}

export const MySubscriptionsCard: FC<MySubscriptionsCardProps> = ({
  title = 'IVI',
  period = '3',
  dueDate = '11.06.2024',
  logo = image,
}) => {
  const theme = useTheme();

  return (
    <StyledMySubscriptionsCard elevation={4}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '38px 8px 12px',
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1" letterSpacing={0}>
          Подписка на {period} месяца
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
        alt={`Логотип ${title}`}
        sx={{
          width: '65px',
          height: '65px',
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          zIndex: '-1',
        }}
      />
    </StyledMySubscriptionsCard>
  );
};
