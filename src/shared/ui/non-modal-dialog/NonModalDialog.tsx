import { Button, Fade, Paper, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';

interface NonModalDialogProps {
  title: string;
  description: string;
  buttonName: string;
  handleButton: () => void;
}

export const NonModalDialog: FC<NonModalDialogProps> = ({
  title,
  description,
  buttonName,
  handleButton,
}) => {
  const [bannerOpen] = useState(true);
  // TODO добавить состояние кнопки в редакс
  // const theme = useTheme();
  // const closeBanner = () => {
  //   setBannerOpen(false);
  // };

  return (
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
              <Typography variant="h3">{title}</Typography>
              {/* TODO добавить состояние кнопки в редакс
                <IconButton
                  onClick={closeBanner}
                  sx={{ color: theme.palette.text.greyDusk1 }}
                >
                  <CloseSm />
                </IconButton> */}
            </Stack>
            <Typography variant="subtitle2">{description}</Typography>
          </Stack>
          <Button variant="contained" onClick={handleButton}>
            {buttonName}
          </Button>
        </Stack>
      </Paper>
    </Fade>
  );
};
