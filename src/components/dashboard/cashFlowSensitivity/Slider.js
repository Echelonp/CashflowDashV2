import React from "react";
// import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
// import Typography from "@material-ui/core/Typography";
// import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: 0,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizedSlider({ policyId }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    console.log(newValue, policyId);
  };

  return (
    <div className={classes.root}>
      {/* <Typography gutterBottom>pretto.fr</Typography> */}
      <PrettoSlider
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={80}
      />
    </div>
  );
}
