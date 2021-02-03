import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="sticky" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="primary"
        //   variant="scrollable"
        //   scrollButtons="auto"
          // aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" component={Link} to="/home" />
          <Tab label="About" component={Link} to="/about" />
          <Tab label="Contact" component={Link} to="/contact" />
          {/* <Tab label="Contact" component={Link} to="/contact" />
          <Tab label="Contact" component={Link} to="/contact" />
          <Tab label="Contact" component={Link} to="/contact" />
          <Tab label="Contact" component={Link} to="/contact" />
          <Tab label="Contact" component={Link} to="/contact" /> */}
        </Tabs>
      </AppBar>
    </>
  );
};

export default MenuBar;
