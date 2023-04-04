import s from "./Filter.module.scss";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const filters = ["Manufacturer", "Width", "Height", "Material"];

const Filter = () => {
  const options = [...Array(4)].map((_, i) => {
    return (
      <FormControlLabel
        key={i}
        control={
          <Checkbox
            sx={{
              color: "#7ac751",
              "&.Mui-checked": {
                color: "#7ac751",
              },
            }}
          />
        }
        label="Option"
        labelPlacement="end"
      />
    );
  });

  return (
    <div className={s.wrapper}>
      <div className={s.shop__filter}>
        {filters.map((filter, i) => {
          return (
            <Accordion key={i} defaultExpanded className={s.shop__item}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={s.shop__name}
              >
                <div>{filter}</div>
              </AccordionSummary>

              <AccordionDetails className={s.shop__options}>
                <FormGroup aria-label="position">{options}</FormGroup>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
