import {
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { FC, SyntheticEvent, useCallback, useMemo, useState } from 'react';
// @ts-expect-error: не работают типы в используемой библиотеке
import { ChevronLeft, SearchMagnifyingGlass } from 'react-coolicons';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../services/categories-api';
import { useGetSubscriptionsQuery } from '../../services/subscriptions-api';
import { CatalogCard } from '../../widgets/catalog-card';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface CategoryProps {
  id: number;
  name: string;
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

export const CatalogPage = () => {
  const { data, error, isLoading, isSuccess } = useGetCategoriesQuery();
  const categories = useMemo(
    () => [{ id: 0, name: 'Все' }, ...(data !== undefined ? data : [])],
    [data],
  );

  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  const handleCategoryChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setActiveTab(newValue);
    },
    [],
  );

  const { data: subscriptions } = useGetSubscriptionsQuery({
    categoryId: categories?.[activeTab].id,
  });

  return (
    <>
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
          onChange={handleCategoryChange}
          aria-label="Категории"
        >
          {categories?.map(({ id, name }) => (
            <Tab key={id} label={name} {...a11yProps(id)} />
          ))}
        </Tabs>

        <Container>
          {categories.map(({ id }) => (
            <TabPanel key={id} value={activeTab} index={id}>
              <Stack flexDirection="column" gap="12px">
                {subscriptions?.map(
                  ({ id, name, cashback, logo, min_price }) => (
                    <CatalogCard
                      key={id}
                      name={name}
                      cashback={cashback}
                      logo={logo}
                      min_price={min_price}
                    />
                  ),
                )}
              </Stack>
            </TabPanel>
          ))}
        </Container>
      </Stack>
    </>
  );
};
