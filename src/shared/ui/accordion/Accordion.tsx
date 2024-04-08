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
// @ts-expect-error: не работают типы в используемой библиотеке
import { ChevronDown } from 'react-coolicons';

const StyledAccordion = styled(AccordionBase)<AccordionPropsBase>(() => ({
  padding: '24px 0px',
  boxShadow: 'none',
  borderBottom: 'solid 1px',
  borderColor: `rgba(24, 20, 31, 0.15)`,
  '&.Mui-expanded': {
    margin: '0px 0px',
  },
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
  title: string;
  details: string;
  id: string;
}

export const Accordion: FC<AccordionProps> = ({ title, details, id }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary
        expandIcon={<ChevronDown />}
        aria-controls={`panel${id}-content`}
        id={`panel${id}-header`}
      >
        <Typography variant="h4" component="span">
          {title}
        </Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Typography variant="subtitle1">{details}</Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
