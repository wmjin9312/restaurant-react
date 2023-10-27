import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Homes" />
    </ListItemButton>
    <ListItemButton component={Link} to="/menus">
      <ListItemIcon>
        <LunchDiningIcon />
      </ListItemIcon>
      <ListItemText primary="Menus" />
    </ListItemButton>
    <ListItemButton component={Link} to="/orders">
      <ListItemIcon>
        <EditNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton component={Link} to="/ordersmanagement">
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="Orders Management" />
    </ListItemButton>
    <ListItemButton component={Link} to="/ordersreport">
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="Orders Report" />
    </ListItemButton>
  </React.Fragment>
);