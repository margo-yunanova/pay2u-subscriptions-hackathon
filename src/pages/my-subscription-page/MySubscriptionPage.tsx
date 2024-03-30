import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { FC, SyntheticEvent, useCallback, useState } from 'react';
import { ChevronLeft, SearchMagnifyingGlass } from 'react-coolicons';
import { useNavigate } from 'react-router-dom';
import noSubscription from '../../assets/noSubscription.svg';
import { MySubscriptionCard } from '../../widgets/my-subscription-card';
import { subscriptions } from '../home-page/homeMock';

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

const tabs = ['Вы уже подписаны', 'Активные', 'Неактивные'];

interface MySubscriptionPageProps {}

export const MySubscriptionPage: FC<MySubscriptionPageProps> = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setActiveTab(newValue);
    },
    [],
  );

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

      <Container style={{ width: 'auto' }}>
        <NoSubscription />
      </Container>

      <Container>
        {tabs.map((title, id) => (
          <TabPanel key={id} value={activeTab} index={id}>
            <Stack flexDirection="column" gap="12px">
              {subscriptions.map((card, id) => (
                <MySubscriptionCard key={id} {...card} />
              ))}
            </Stack>
          </TabPanel>
        ))}
      </Container>
    </Stack>
  );
};
