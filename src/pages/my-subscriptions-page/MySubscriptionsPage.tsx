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
import { FC, SyntheticEvent, useCallback, useState } from 'react';
// @ts-expect-error: не работают типы в используемой библиотеке
import { ChevronLeft, SearchMagnifyingGlass } from 'react-coolicons';
import { useNavigate } from 'react-router-dom';
import noSubscription from '../../assets/noSubscription.svg';
import { MySubscriptionCard } from '../../widgets/my-subscription-card';
import { useGetMySubscriptionsQuery } from '../../services/api';

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

const tabs = ['Активные', 'Неактивные'];

export const MySubscriptionsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setActiveTab(newValue);
    },
    [],
  );

  const { data: subscriptions, isLoading } = useGetMySubscriptionsQuery({
    pay_status: activeTab === 0,
  });

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
            Каталог
          </Typography>
          <IconButton>
            <SearchMagnifyingGlass />
          </IconButton>
        </Stack>
      </Container>

      <Tabs
        variant="scrollable"
        scrollButtons={false}
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Категории"
      >
        {tabs.map((title, id) => (
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

      {!subscriptions || subscriptions?.length === 0 ? (
        <Container style={{ width: 'auto' }}>
          <NoSubscription />
        </Container>
      ) : (
        <Container>
          {tabs.map((title, id) => (
            <TabPanel key={id} value={activeTab} index={id}>
              <Stack flexDirection="column" gap="12px">
                {/* TODO сделать типы */}
                {subscriptions?.map((card) => (
                  <MySubscriptionCard key={card.id} {...card} />
                ))}
              </Stack>
            </TabPanel>
          ))}
        </Container>
      )}
    </Stack>
  );
};
