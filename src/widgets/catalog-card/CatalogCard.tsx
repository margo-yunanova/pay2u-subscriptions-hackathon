import {
  CardActionArea,
  Card as CardBase,
  CardProps,
  Stack,
  styled,
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chip } from '../../shared/ui/chip';

export interface CatalogCardProps {
  title: string;
  cashback: string;
  logo: string;
  sum: string;
  type: string;
}

const StyledCatalogCard = styled(CardBase)<CardProps>(() => ({
  borderRadius: '10px',
}));

export const CatalogCard: FC<CatalogCardProps> = ({
  title,
  cashback,
  logo,
  sum,
}) => {
  const navigate = useNavigate();

  return (
    <StyledCatalogCard>
      <CardActionArea onClick={() => navigate(`/catalog/${title}`)}>
        <CardContent>
          <Stack flexDirection="row" gap="12px" alignItems="center">
            <CardMedia
              component="img"
              image={logo}
              alt={`Логотип ${title}`}
              sx={{
                width: '44px',
                height: '44px',
              }}
            />
            <Stack flexDirection="column" flexGrow={1}>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="body2">Подписка от {sum} ₽</Typography>
            </Stack>
            <Chip label={`${cashback}% кешбэк`} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </StyledCatalogCard>
  );
};
