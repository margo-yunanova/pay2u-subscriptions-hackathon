import { Box, SwipeableDrawer, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: 'auto',
}));

const StyledDrawer = styled(SwipeableDrawer)(() => ({
  '& .MuiPaper-root': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
}));

const Puller = styled('div')(() => ({
  width: 32,
  height: 4,
  backgroundColor: '#79747E',
  borderRadius: 100,
  position: 'absolute',
  top: 16,
  left: 'calc(50% - 16px)',
}));

interface DrawerProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  children: ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ open, setOpen, children }) => {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <StyledDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Puller />
      <StyledBox
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        data-test
      >
        {children}
      </StyledBox>
    </StyledDrawer>
  );
};
