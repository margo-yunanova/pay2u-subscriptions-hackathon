import { Card as CardBase, styled, CardProps } from '@mui/material';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
  const theme = useTheme();

  return (
    <StyledMainCard elevation={10}>
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
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{
              textAlign: 'left',
              fontWeight: '500',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="span"
            sx={{
              textAlign: 'left',
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: '79px', height: '70px' }}
          image={image}
          alt="Сердце"
        />
      </CardContent>
    </StyledMainCard>
  );
};
