import { Card as CardBase, CardProps, styled } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import heart from '../../assets/heart.svg';

const StyledMainCard = styled(CardBase)<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.brandDay5,
  borderRadius: '10px',
}));

interface MainCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export const MainCard: FC<MainCardProps> = ({
  title = 'Избранное',
  subtitle = 'Храните интересное здесь',
  image = heart,
}) => {
  return (
    <StyledMainCard elevation={4}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '26px',
          padding: '22px 16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'left',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'left',
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: '79px', height: '70px', objectFit: 'contain' }}
          image={image}
          alt="Сердце"
        />
      </CardContent>
    </StyledMainCard>
  );
};
