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

export interface CatalogCardProps {
  name: string;
  cashback: number;
  logo: string;
  min_price: number;
}

const StyledCatalogCard = styled(CardBase)<CardProps>(() => ({
  borderRadius: '10px',
}));

export const CatalogCard: FC<CatalogCardProps> = ({
  name,
  cashback,
  logo,
  min_price,
}) => {
  const navigate = useNavigate();

  return (
    <StyledCatalogCard>
      <CardActionArea onClick={() => navigate(`/catalog/${name}`)}>
        <CardContent>
          <Stack flexDirection="row" gap="12px" alignItems="center">
            <CardMedia
              component="img"
              image={logo}
              alt={`Логотип ${name}`}
              sx={{
                width: '44px',
                height: '44px',
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
