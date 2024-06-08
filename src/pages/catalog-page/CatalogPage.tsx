import {
  Backdrop,
  CircularProgress,
  Container,
  IconButton,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
} from '@mui/material';
import { FC, SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { ChevronLeft, CloseMd, SearchMagnifyingGlass } from 'react-coolicons';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import {
  useGetCategoriesQuery,
  useGetSubscriptionsQuery,
} from '../../services/api';
import { CatalogCard } from '../../widgets/catalog-card';
import { NoResultsFound } from '../../widgets/no-results-found';

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

const Search = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: 'none',
    fontSize: '16px',
    boxShadow: 'none',
    font: theme.typography.h4,
    color: theme.palette.text.primary,
    padding: '0px',
    '&:focus': {
      border: 'none',
    },
    '&:invalid': {
      boxShadow: 'none',
    },
  },
}));

export const CatalogPage = () => {
  const { data, isLoading: isLoadingCategories } = useGetCategoriesQuery();
  const categories = useMemo(
    () => [{ id: 0, name: 'Все' }, ...(data ?? [])],
    [data],
  );
  const [searchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState(
    +(searchParams.get('activeTab') ?? 0),
  );

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const { data: subscriptions, isLoading } = useGetSubscriptionsQuery({
    categoryId: categories?.[activeTab]?.id,
    name: debouncedSearchValue,
  });

  const navigate = useNavigate();
  const handleCategoryChange = useCallback(
    (_event: SyntheticEvent, newValue: number) => {
      setActiveTab(newValue);
      navigate(
        {
          pathname: '/catalog',
          search: `${createSearchParams({ activeTab: newValue.toString() })}`,
        },
        { replace: true },
      );
    },
    [navigate],
  );

  return (
    <>
      <Stack flexDirection="column" gap={!showSearchInput ? '24px' : '17px'}>
        <Container
          style={
            showSearchInput
              ? {
                  paddingBottom: '14px',
                  borderBottom: '1px solid black',
                }
              : undefined
          }
        >
          <Stack flexDirection="row" alignItems="center">
            <IconButton aria-label="Назад" onClick={() => navigate(-1)}>
              <ChevronLeft />
            </IconButton>
            {!showSearchInput ? (
              <Typography
                style={{ flexGrow: '1', justifyContent: 'flex-start' }}
                variant="h3"
              >
                Каталог
              </Typography>
            ) : (
              <Search
                type="text"
                placeholder="Введите название"
                id="name"
                defaultValue={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                style={{
                  flexGrow: '1',
                  justifyContent: 'flex-start',
                }}
              />
            )}
            <IconButton
              aria-label="Поиск"
              onClick={() => {
                setActiveTab(0);
                setShowSearchInput(!showSearchInput);
                setSearchValue('');
              }}
            >
              {!showSearchInput ? <SearchMagnifyingGlass /> : <CloseMd />}
            </IconButton>
          </Stack>
        </Container>

        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={isLoading || isLoadingCategories}
        >
          <CircularProgress />
        </Backdrop>

        {!showSearchInput && (
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
        )}

        <Container>
          {categories.map(({ id }) => (
            <TabPanel key={id} value={activeTab} index={id}>
              <Stack flexDirection="column" gap="12px">
                {subscriptions?.map(
                  ({ id, name, cashback, logo, min_price }) => (
                    <CatalogCard
                      key={id}
                      id={id}
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
        <Container style={{ width: 'auto', paddingTop: '60px' }}>
          {showSearchInput && subscriptions?.length === 0 && <NoResultsFound />}
        </Container>
      </Stack>
    </>
  );
};
