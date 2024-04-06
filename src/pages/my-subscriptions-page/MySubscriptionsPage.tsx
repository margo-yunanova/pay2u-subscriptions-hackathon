import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
// @ts-expect-error: не работают типы в используемой библиотеке
import { ChevronLeft } from 'react-coolicons';
import { useNavigate } from 'react-router-dom';
import noSubscription from '../../assets/noSubscription.svg';
import {
  useGetDiscoveredSubscriptionsQuery,
  useGetMySubscriptionsQuery,
} from '../../services/api';
import { MySubscriptionCard } from '../../widgets/my-subscription-card';

const NoSubscription = () => {
  return (
    <Card elevation={0}>
      <Stack flexDirection="column" alignItems="center" maxWidth="248px">
        <CardMedia
          component="img"
          image={noSubscription}
          sx={{
            width: '146px',
            height: '103px',
          }}
        />
        <CardContent>
          <Typography variant="h3" textAlign="center">
            У вас пока нет подписок
          </Typography>
          <Typography variant="subtitle2" textAlign="center">
            Купите подписку и получайте кешбэк до 30% с каждой оплаты в
            приложении
          </Typography>
        </CardContent>
        <Button variant="contained" sx={{ width: 'auto' }}>
          В каталог
        </Button>
      </Stack>
    </Card>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`category-tabpanel-${index}`}
      aria-labelledby={`category-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `category-tab-${index}`,
    'aria-controls': `category-tabpanel-${index}`,
  };
};

export const MySubscriptionsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const active = useGetMySubscriptionsQuery({ pay_status: true });
  const inactive = useGetMySubscriptionsQuery({ pay_status: false });
  const discovered = useGetDiscoveredSubscriptionsQuery();
  const isLoading =
    active.isLoading || inactive.isLoading || discovered.isLoading;

  const tabs = [
    { title: 'Активные', data: active.data },
    { title: 'Неактивные', data: inactive.data },
  ];

  if (discovered.data?.length) {
    tabs.unshift({ title: 'Вы уже подписаны', data: discovered.data });
  }

  return (
    <Stack flexDirection="column" gap="24px">
      <Container>
        <Stack flexDirection="row" alignItems="center">
          <IconButton onClick={() => navigate(-1)}>
            <ChevronLeft />
          </IconButton>
          <Typography
            style={{ flexGrow: '1', justifyContent: 'flex-start' }}
            variant="h3"
          >
            Мои подписки
          </Typography>
        </Stack>
      </Container>

      <Tabs
        variant="scrollable"
        scrollButtons={false}
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        aria-label="Категории"
      >
        {tabs.map(({ title }, id) => (
          <Tab
            style={{ flexGrow: '1' }}
            key={id}
            label={title}
            {...a11yProps(id)}
          />
        ))}
      </Tabs>

      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress />
      </Backdrop>

      <Container>
        {tabs.map(({ title, data }, id) => (
          <TabPanel key={id} value={activeTab} index={id}>
            {title === 'Вы уже подписаны' && (
              <Container
                sx={{
                  padding: '16px',
                  backgroundColor: '#F8F9FB',
                  borderRadius: '6px',
                  marginBottom: '16px',
                }}
              >
                <Typography variant="h4">
                  Добавьте подписку в приложение для получения кешбэка. Вы
                  получите кешбэк со следующего оплаченного периода.
                </Typography>
              </Container>
            )}
            <Stack flexDirection="column" gap="12px">
              {data?.length ? (
                data.map((card) => (
                  <MySubscriptionCard key={card.id} {...card} />
                ))
              ) : (
                <Container style={{ width: 'auto' }}>
                  <NoSubscription />
                </Container>
              )}
            </Stack>
          </TabPanel>
        ))}
      </Container>
    </Stack>
  );
};
