import {
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { FC, SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { ChevronLeft, SearchMagnifyingGlass } from 'react-coolicons';
import { CatalogCard } from '../../widgets/catalog-card';
import { CatalogCardProps } from '../../widgets/catalog-card/CatalogCard';

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

interface CatalogPageProps {
  catalogCard: CatalogCardProps[];
}

export const CatalogPage: FC<CatalogPageProps> = ({ catalogCard }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setActiveTab(newValue);
    },
    [],
  );

  const tabs = useMemo(
    () => ['Все', ...new Set(catalogCard.map((card) => card.type))],
    [catalogCard],
  );
  const activeCatalog = useMemo(
    () =>
      activeTab === 0
        ? catalogCard
        : catalogCard.filter((card) => card.type === tabs[activeTab]),
    [catalogCard, activeTab, tabs],
  );

  return (
    <>
      <Stack flexDirection="column" gap="24px">
        <Container>
          <Stack flexDirection="row" alignItems="center">
            <IconButton>
              <ChevronLeft />
            </IconButton>
            <Typography variant="h3">Каталог</Typography>
            <IconButton style={{ flexGrow: '1', justifyContent: 'flex-end' }}>
              <SearchMagnifyingGlass />
            </IconButton>
          </Stack>
        </Container>

        <Container>
          <Tabs
            variant="scrollable"
            scrollButtons={false}
            value={activeTab}
            onChange={handleTabChange}
            aria-label="Категории"
          >
            {tabs.map((title, id) => (
              <Tab key={id} label={title} {...a11yProps(id)} />
            ))}
          </Tabs>
        </Container>

        <Container>
          {tabs.map((title, id) => (
            <TabPanel key={id} value={activeTab} index={id}>
              <Stack flexDirection="column" gap="12px">
                {activeCatalog.map((card, id) => (
                  <CatalogCard key={id} {...card} />
                ))}
              </Stack>
            </TabPanel>
          ))}
        </Container>
      </Stack>
    </>
  );
};
