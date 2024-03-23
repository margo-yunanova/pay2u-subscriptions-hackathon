import {
  Accordion as AccordionBase,
  AccordionDetails,
  AccordionDetailsProps as AccordionDetailsPropsBase,
  AccordionProps as AccordionPropsBase,
  AccordionSummary,
  AccordionSummaryProps as AccordionSummaryPropsBase,
  Typography,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { ChevronDown } from 'react-coolicons';

const StyledAccordion = styled(AccordionBase)<AccordionPropsBase>(() => ({
  padding: '24px 0px',
  boxShadow: 'none',
  borderBottom: 'solid 1px',
  borderColor: `rgba(24, 20, 31, 0.15)`,
}));

const StyledAccordionSummary = styled(
  AccordionSummary,
)<AccordionSummaryPropsBase>(({ theme }) => ({
  padding: '0px 0px',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.primary,
  },
}));

const StyledAccordionDetails = styled(
  AccordionDetails,
)<AccordionDetailsPropsBase>(() => ({
  padding: '0px 0px',
}));

interface AccordionProps {
  title?: string;
  details?: string;
  id?: string;
}

export const Accordion: FC<AccordionProps> = ({
  title = 'Как подключить подписку',
  details = 'Подписку можно подключить в мобильном приложении или на сайте tinkoff.ru. Если у вас есть приложение Тинькофф, на главном экране перейдите в раздел «Кэшбэк и бонусы» → подписка Tinkoff Pro → «Подключить».',
  id = '1',
}) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary
        expandIcon={<ChevronDown />}
        aria-controls={`panel${id}-content`}
        id={`panel${id}-header`}
      >
        <Typography>{title}</Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Typography>{details}</Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
