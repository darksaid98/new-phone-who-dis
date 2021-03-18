import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(0);
  return (
    <BottomNavigation
      value={activePage}
      onChange={(event, newPage) => {
        setActivePage(newPage);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} icon={<HomeIcon />} to="/sellout" />
      <BottomNavigationAction component={Link} icon={<AddCircleIcon />} to="/sellout/new" />
    </BottomNavigation>
  );
};
