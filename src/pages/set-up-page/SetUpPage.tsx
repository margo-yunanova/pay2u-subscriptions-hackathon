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

export const SetUpPage = () => {
  const [scenario, setScenario] = React.useState('1');
  const [color, setSColor] = React.useState('1');

  const navigate = useNavigate();

  const handleChangeScenario = (_event: SelectChangeEvent) => {
    setScenario(_event.target.value as string);
  };

  const handleChangeColor = (_event: SelectChangeEvent) => {
    setSColor(_event.target.value as string);
  };

  const handleButton = () => {
    navigate('/home');
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
            <MenuItem value="1">
              Действующий пользователь (с подписками)
            </MenuItem>
            <MenuItem value="2" disabled>
              Новый пользователь (без подписок)
            </MenuItem>
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
            value={color}
            label=""
            onChange={handleChangeColor}
          >
            <MenuItem value="1">По-умолчанию</MenuItem>
            <MenuItem value="2" disabled>
              Красный банк
            </MenuItem>
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
