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
import { forwardRef, useState } from 'react';

import { ChevronLeft, CreditCard01 } from 'react-coolicons';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { number, object, string } from 'yup';
import { payment_account } from '../../mocks/db';
import { useOrderSubscriptionMutation } from '../../services/api';
import { tariffInfo } from '../../shared/utils/constants';
import {
  ISubscription,
  ISubscriptionOrder,
  ITariff,
} from '../../shared/utils/type';

const schema = object().shape({
  name: string()
    .min(2, 'Имя должно содержать не менее двух символов')
    .required(),
  phone_number: string()
    .length(18, 'Введите номер телефона в формате +7 (XXX) XXX-XX-XX')
    // .matches(new RegExp('[0-9]{11}'))
    .required(),
  email: string()
    .email('Введите действительный адрес электронной почты')
    .required('Введите действительный адрес электронной почты'),
  payment_account: number().required(),
  tariff: number().required(),
});

interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, TextMaskCustomProps>(
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
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

interface SubscriptionFormPageProps {
  subscription: ISubscription;
  tariff: ITariff;
}

export const SubscriptionFormPage = () => {
  const location = useLocation();
  const { tariff, subscription } = location.state as SubscriptionFormPageProps;

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone_number: '',
      email: '',
      payment_account: payment_account[0].id,
      tariff: tariff.id,
    },
  });

  const theme = useTheme();

  const [orderSubscription, { isLoading }] = useOrderSubscriptionMutation();

  const onSubmit: SubmitHandler<ISubscriptionOrder> = async (data) => {
    try {
      await orderSubscription({ data, subscriptionId: subscription.id });
      navigate(-1);
    } catch (e) {
      console.error(e);
    }
  };

  const [termsAgreed, setTermsAgreed] = useState(false);

  const navigate = useNavigate();

  return (
    <Container style={{ paddingBottom: '10px' }}>
      <Stack flexDirection="row" alignItems="center">
        <IconButton aria-label="Назад" onClick={() => navigate(-1)}>
          <ChevronLeft />
        </IconButton>
        <Typography variant="h3">Оформление</Typography>
      </Stack>

      <Card elevation={0} style={{ paddingTop: '16px' }}>
        <CardContent sx={{ padding: '0px' }}>
          <Stack flexDirection="row" gap="12px" alignItems="center">
            <CardMedia
              component="img"
              image={subscription.logo}
              alt={`Логотип ${subscription.name}`}
              sx={{
                width: '44px',
                height: '44px',
                objectFit: 'contain',
              }}
            />
            <Stack flexDirection="column" flexGrow={1}>
              <Typography variant="h3">{subscription.name}</Typography>
              <Typography variant="body2">{subscription.title}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Typography variant="h3">
        Подписка на {tariffInfo[tariff.period].period}
      </Typography>
      <Typography variant="h3">
        {location.state.tariff.price_per_month} ₽{' '}
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
          name="phone_number"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="phone_number">
                Телефон
              </InputLabel>
              <InputBase
                type="tel"
                placeholder="+7 (985) 123-45-67"
                id="phone_number"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- unfortunately this `any` is from official mui docs/samples: https://mui.com/material-ui/react-text-field/
                inputComponent={TextMaskCustom as any}
                {...field}
              />
              <FormHelperText error={!!errors.phone_number}>
                {errors.phone_number
                  ? (errors.phone_number.message as string)
                  : ' '}
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
          name="payment_account"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="payment_account">
                Счет списания
              </InputLabel>

              <Select
                labelId="payment_account"
                id="payment_account"
                {...field}
                style={{ marginTop: '0px' }}
              >
                {payment_account.map(({ id, name }) => (
                  <MenuItem
                    key={id}
                    value={id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <CreditCard01 />
                    {name}
                  </MenuItem>
                ))}
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
          disabled={!isValid || !termsAgreed || isLoading}
        >
          Оплатить подписку
        </Button>
      </Stack>
    </Container>
  );
};
