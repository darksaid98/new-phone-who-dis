import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  icon: {
    color: '#f44336',
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(0);
  return (
    <BottomNavigation
      style={{
        background: '#262525',
      }}
      value={activePage}
      onChange={(event, newPage) => {
        setActivePage(newPage);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} icon={<HomeIcon />} to="/bank" />
      <BottomNavigationAction component={Link} icon={<LocalAtmIcon />} to="/bank/account" />
      <BottomNavigationAction component={Link} icon={<ListIcon />} to="/bank/transactions" />
    </BottomNavigation>
  );
};
