import {
  SelectChangeEvent,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Container,
  Stack,
  Button,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { selectTheme, setTheme } from '../../app/store/theme-slice';
import { useDispatch, useSelector } from 'react-redux';
import { UserScenario, setupUserScenario } from '../../mocks/db';
import { api } from '../../services/api';

export const SetUpPage = () => {
  const [scenario, setScenario] = React.useState<UserScenario>('active');
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const navigate = useNavigate();

  const handleChangeScenario = (_event: SelectChangeEvent) => {
    setScenario(_event.target.value as UserScenario);
  };

  const handleChangeColor = (_event: SelectChangeEvent) => {
    dispatch(setTheme(_event.target.value));
  };

  const handleButton = () => {
    setupUserScenario(scenario);
    dispatch(api.util.resetApiState());
    navigate(scenario === 'active' ? '/home' : '/onboarding');
  };

  return (
    <Stack display="flex" flexDirection="column" gap="30px">
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h2">
          Демо мобильного веб-приложения для PAY2U
        </Typography>
      </Container>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">Пользовательский сценарий</Typography>
        <FormControl fullWidth>
          <Select
            labelId="scenario"
            id="scenario"
            value={scenario}
            label=""
            onChange={handleChangeScenario}
          >
            <MenuItem value="active">
              Действующий пользователь (с подписками)
            </MenuItem>
            <MenuItem value="switcher">
              Новый пользователь (с обнаруженными подписками)
            </MenuItem>
            <MenuItem value="new">Новый пользователь (без подписок)</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">Цветовая схема</Typography>
        <FormControl fullWidth>
          <Select
            labelId="color"
            id="color"
            value={theme}
            label=""
            onChange={handleChangeColor}
          >
            <MenuItem value="default">По-умолчанию</MenuItem>
            <MenuItem value="red">Красный банк</MenuItem>
            <MenuItem value="3" disabled>
              Зеленый банк
            </MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Container>
        <Button variant="contained" onClick={handleButton}>
          Запустить приложение
        </Button>
      </Container>
    </Stack>
  );
};
