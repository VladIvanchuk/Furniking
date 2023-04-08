import * as React from 'react';
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

import s from "./FooterAccordion.module.scss";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const TypographyElement = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontWeight: 400,
  color: "#55555",
  fontSize: "18px",
  lineHeight: "20px",
  marginBottom: "10px",
}));
const TypographyElementTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontWeight: 500,
  color: "#55555",
  fontSize: "18px",
  lineHeight: "20px",
}));

export default function CustomizedAccordions() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expanded, setExpanded] = React.useState<string | false>(
    isMobile ? false : "panel1"
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div
      className={s.accordionBox}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "180px",
      }}
    >
      <Accordion
        className={s.column}
        expanded={!isMobile || expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={s.titleBox}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <TypographyElementTitle className={s.title}>
            Help
          </TypographyElementTitle>
        </AccordionSummary>
        <AccordionDetails className={s.details}>
          <TypographyElement className={s.typographyEl}>
            Privacy Policy{" "}
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Shipping & Delivery
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Refund Policy
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Track Your Order
          </TypographyElement>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={s.column}
        expanded={!isMobile || expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className={s.titleBox}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <TypographyElementTitle className={s.title}>
            Store
          </TypographyElementTitle>
        </AccordionSummary>
        <AccordionDetails className={s.details}>
          <TypographyElement className={s.typographyEl}>
            Furniture
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Table
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Sofa
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Other
          </TypographyElement>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={s.column}
        expanded={!isMobile || expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          className={s.titleBox}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <TypographyElementTitle className={s.title}>
            Supports
          </TypographyElementTitle>
        </AccordionSummary>
        <AccordionDetails className={s.details}>
          <TypographyElement className={s.typographyEl}>
            FeedBack
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Contact us
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Download app
          </TypographyElement>
          <TypographyElement className={s.typographyEl}>
            Terms condtins
          </TypographyElement>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
