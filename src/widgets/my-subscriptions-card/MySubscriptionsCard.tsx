import { Card as CardBase, CardProps, styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import logo from '../../assets/ivi.png';

const StyledMySubscriptionsCard = styled(CardBase)<CardProps>(({ theme }) => ({
  width: '144px',
  borderRadius: '17px',
  position: 'relative',
}));

interface MySubscriptionsCardProps {
  title?: string;
  period?: string;
  dueDate?: string;
}

export const MySubscriptionsCard: FC<MySubscriptionsCardProps> = ({
  title = 'IVI',
  period = '3',
  dueDate = '11.06,2024',
}) => {
  const theme = useTheme();

  return (
    <StyledMySubscriptionsCard>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '38px 8px 12px',
        }}
      >
        <Typography>{title}</Typography>
        <Typography sx={{ fontSize: '12px' }}>
          Подписка на {period} месяца
        </Typography>
        <Typography
          sx={{ fontSize: '10px', color: theme.palette.text.greyDusk1 }}
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
        }}
      />
    </StyledMySubscriptionsCard>
  );
};
