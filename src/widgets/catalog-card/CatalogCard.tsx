import {
  CardActionArea,
  Card as CardBase,
  CardProps,
  Chip,
  Stack,
  styled,
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMainSubscription } from '../../shared/utils/type';

const StyledCatalogCard = styled(CardBase)<CardProps>(() => ({
  borderRadius: '10px',
}));

export const CatalogCard: FC<
  Omit<
    IMainSubscription,
    'description' | 'categories' | 'popular_rate' | 'is_favorite'
  >
> = ({ id, name, cashback, logo, min_price }) => {
  const navigate = useNavigate();

  return (
    <StyledCatalogCard>
      <CardActionArea onClick={() => navigate(`/catalog/${id}`)}>
        <CardContent>
          <Stack flexDirection="row" gap="12px" alignItems="center">
            <CardMedia
              component="img"
              image={logo}
              alt={`Логотип ${name}`}
              sx={{
                width: '44px',
                height: '44px',
                objectFit: 'contain',
              }}
            />
            <Stack flexDirection="column" flexGrow={1}>
              <Typography variant="h3">{name}</Typography>
              <Typography variant="body2">Подписка от {min_price} ₽</Typography>
            </Stack>
            <Chip variant="cashback" label={`${cashback}% кешбэк`} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </StyledCatalogCard>
  );
};
