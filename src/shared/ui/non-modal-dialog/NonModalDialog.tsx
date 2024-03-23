import {
  Fade,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { FC, useState } from 'react';
import { CloseSm } from 'react-coolicons';
import { Button } from '../button';

interface NonModalDialogProps {
  title?: string;
  description?: string;
}

export const NonModalDialog: FC<NonModalDialogProps> = ({
  title = 'Уже есть подписки? ',
  description = 'Добавьте их и получайте кешбэк до 30% с каждой оплаты в приложении ',
}) => {
  const [bannerOpen, setBannerOpen] = useState(true);
  const theme = useTheme();
  const closeBanner = () => {
    setBannerOpen(false);
  };

  return (
    <TrapFocus open disableAutoFocus disableEnforceFocus>
      <Fade appear={false} in={bannerOpen}>
        <Paper
          role="dialog"
          aria-modal="false"
          aria-label={`${title}`}
          elevation={10}
          sx={{ padding: '16px', borderRadius: '12px' }}
        >
          <Stack direction="column" gap="24px">
            <Stack direction="column" gap="4px">
              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight="bold">{title}</Typography>
                <IconButton
                  onClick={closeBanner}
                  sx={{ padding: '0px', color: theme.palette.text.greyDusk1 }}
                >
                  <CloseSm />
                </IconButton>
              </Stack>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.greyDusk1 }}
              >
                {description}
              </Typography>
            </Stack>
            <Button variant="contained">Добавить мои подписки</Button>
          </Stack>
        </Paper>
      </Fade>
    </TrapFocus>
  );
};
