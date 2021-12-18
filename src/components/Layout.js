import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { format } from 'date-fns'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import user from '../../src/user.png';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)

    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth

    },
    date: {
      flexGrow: 1,
      textAlign: 'left'
    },
    icon: {
      color: '#f50057'
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
       marginLeft: theme.spacing(2)
    }
  }
})

function Layout({ children }) {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = [
    {
      icon: <SubjectOutlined></SubjectOutlined>,
      path: '/',
      text: 'My Notes'
      
    },
    {
      icon: <AddCircleOutlined></AddCircleOutlined>,
      path: '/create',
      text: 'Create Note'
    }
  ]
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appBar} position="fixed" elevation={0} color="primary" >
        <Toolbar>
        <Typography className={classes.date}>
         Today Date is { format(new Date, 'do MMMM Y')}
        </Typography>
        <Typography>
          Mario
        </Typography>
        <Avatar src={user} className={classes.avatar}></Avatar>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Notes App
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {
            menuItems && menuItems.map(menu => (
              <ListItem button
                key={menu.text}
                onClick={() => navigate(menu.path)}
                className={location.pathname == menu.path ? classes.active : null}
              >
                <ListItemIcon classes={{ root: classes.icon }}>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.text}></ListItemText>
              </ListItem>
            ))
          }
         
        </List>

      </Drawer>

      {/* main content */}
      <div className={classes.page}>
      <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Layout
