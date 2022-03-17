import React from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  PersonOutline,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydreamOutlined,
  Store,
} from "@mui/icons-material";

const navItems = [
  {
    header: "MAIN",
    items: [{ name: "Dashboard", id: 1, path: "/", icon: Dashboard }],
  },
  ,
  {
    header: "LISTS",
    items: [
      { name: "Users", id: 2, path: "/users", icon: PersonOutline },
      { name: "Products", id: 3, path: "/products", icon: Store },
      { name: "Orders", id: 4, path: "/orders", icon: CreditCard },
      { name: "Delivery", id: 5, path: "/delivery", icon: LocalShipping },
    ],
  },
  ,
  {
    header: "USEFUL",
    items: [
      { name: "Stats", id: 6, path: "/stats", icon: InsertChart },
      {
        name: "Notifications",
        id: 7,
        path: "/notifications",
        icon: NotificationsNone,
      },
    ],
  },
  {
    header: "SERVICES",
    items: [
      {
        name: "System Health",
        id: 8,
        path: "/health",
        icon: SettingsSystemDaydreamOutlined,
      },
      { name: "Logs", id: 9, path: "/logs", icon: PsychologyOutlined },
      {
        name: "Settings",
        id: 10,
        path: "/settings",
        icon: SettingsApplications,
      },
    ],
  },
  {
    header: "USER",
    items: [
      {
        name: "Profile",
        id: 11,
        path: "/profile",
        icon: AccountCircleOutlined,
      },
      { name: "Logout", id: 12, path: "/logout", icon: ExitToApp },
    ],
  },
];

const Sidebar = () => {
  return (
    <Grid container direction="column" sx={{ minHeight: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: 50, borderBottom: 1, borderColor: "grey.300" }}
      >
        <Grid item component="h3" sx={{ color: "primary.main" }}>
          Nodemass
        </Grid>
      </Grid>
      <Grid sx={{ borderRight: 1, borderColor: "grey.300" }}>
        {navItems.map(({ header, items }) => (
          <>
            <ListSubheader sx={{ fontSize: 12, height: 35 }}>
              {header}
            </ListSubheader>
            <List component="nav" sx={{ padding: 0 }}>
              {items.map(({ name, id, icon: Icon }) => (
                <ListItemButton dense disableRipple>
                  <ListItemIcon sx={{ color: "primary.light", minWidth: 40 }}>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "grey.700" }} primary={name} />
                </ListItemButton>
              ))}
            </List>
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
