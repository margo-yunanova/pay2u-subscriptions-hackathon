import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, forwardRef, useState } from 'react';
import { ChevronLeft, CreditCard01 } from 'react-coolicons';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { Link, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import image from '../../assets/Wink.png';

const schema = object().shape({
  name: string()
    .min(2, 'Имя должно содержать не менее двух символов')
    .required(),
  tel: string()
    .length(18, 'Введите номер телефона в формате +7 (XXX) XXX-XX-XX')
    // .matches(new RegExp('[0-9]{11}'))
    .required(),
  email: string()
    .email('Введите действительный адрес электронной почты')
    .required('Введите действительный адрес электронной почты'),
  paymentAccount: string(),
});

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+0 (000) 000-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

interface SubscriptionFormPageProps {}

export const SubscriptionFormPage: FC<SubscriptionFormPageProps> = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { name: '', tel: '', email: '', paymentAccount: '10' },
  });

  const theme = useTheme();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const [termsAgreed, setTermsAgreed] = useState(false);

  const navigate = useNavigate();

  return (
    <Container style={{ paddingBottom: '10px' }}>
      <Stack flexDirection="row" alignItems="center">
        <IconButton onClick={() => navigate(-1)}>
          <ChevronLeft />
        </IconButton>
        <Typography variant="h3">Оформление</Typography>
      </Stack>

      <Card elevation={0} style={{ paddingTop: '16px' }}>
        <CardContent sx={{ padding: '0px' }}>
          <Stack flexDirection="row" gap="12px" alignItems="center">
            <CardMedia
              component="img"
              image={image}
              alt={`Логотип ${'title'}`}
              sx={{
                width: '44px',
                height: '44px',
              }}
            />
            <Stack flexDirection="column" flexGrow={1}>
              <Typography variant="h3">Wink</Typography>
              <Typography variant="body2">ТВ, фильмы</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Typography variant="h3">Подписка на 1 месяц</Typography>
      <Typography variant="h3">
        300 ₽{' '}
        <Typography component="span" variant="body1">
          в месяц
        </Typography>
      </Typography>

      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap="16px"
        noValidate
        paddingTop="24px"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="name">
                Имя
              </InputLabel>
              <InputBase type="text" placeholder="Иван" id="name" {...field} />
              <FormHelperText error={!!errors.name}>
                {errors.name ? (errors.name.message as string) : ' '}
              </FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="tel"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="tel">
                Телефон
              </InputLabel>
              <InputBase
                type="tel"
                placeholder="+7 (985) 123-45-67"
                id="tel"
                inputComponent={TextMaskCustom as any}
                {...field}
              />
              <FormHelperText error={!!errors.tel}>
                {errors.tel ? (errors.tel.message as string) : ' '}
              </FormHelperText>
              <Typography variant="body2" component="span">
                Введите телефон владельца аккаунта подписки
              </Typography>
            </FormControl>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="email">
                Email
              </InputLabel>
              <InputBase
                type="Email"
                placeholder="Ivanov@mail.ru"
                id="email"
                {...field}
              />
              <FormHelperText error={!!errors.email}>
                {errors.email ? (errors.email.message as string) : ' '}
              </FormHelperText>
            </FormControl>
          )}
        />

        <Controller
          name="paymentAccount"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="uncontrolled-native">
                Счет списания
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...field}
                style={{ marginTop: '0px' }}
              >
                [
                <MenuItem
                  key="1"
                  value={'10'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <CreditCard01 />
                  Система быстрых платежей
                </MenuItem>
                ,
                <MenuItem key="2" value={'20'}>
                  Яндекс.Пэй
                </MenuItem>
                ,
                <MenuItem key="3" value={'30'}>
                  Наличные
                </MenuItem>
                , ]
              </Select>
            </FormControl>
          )}
        />

        <Stack
          flexDirection="row"
          alignItems="center"
          paddingTop="24px"
          paddingBottom="28px"
        >
          <Typography variant="subtitle1">
            Вы соглашаетесь с{' '}
            <Typography variant="link">
              <Link
                to={'https://google.com'}
                style={{
                  color: theme.palette.text.brandDay1,
                  textDecoration: 'inherit',
                }}
              >
                условиями страхования, обработкой персональных данных и КИД
              </Link>
            </Typography>
          </Typography>
          <Switch
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
          />
        </Stack>

        <Button
          variant="contained"
          type="submit"
          disabled={!isValid || !termsAgreed}
        >
          Оплатить {isValid && termsAgreed && ' 300 ₽ '} за подписку
        </Button>
      </Stack>
    </Container>
  );
};
