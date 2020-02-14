import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function FileSystemNavigator() {
  const classes = useStyles();
  const { state, setState } = useContext<useAppState>(AppContext);

  const authHeader =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFkNGQwMzg3NDM5MTQwMDE0OTk5NzMyIiwiYXBwX25hbWUiOiJXb3JrZXJTYWZldHkgUHJvIiwiZGV2aWNlX2lkIjoiODJkNWIxMjMtYmVlZi00ODE0LWE1OTMtZDMzNzQ3NGEzYjdmIiwiZGV2aWNlX25hbWUiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV8wKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODAuMC4zOTg3LjEwMCBTYWZhcmkvNTM3LjM2IiwiaWF0IjoxNTgxNTMyNDYzfQ.XCSThbXCbrLm7JMRw_Jjj3bxnKx4cYWvwkQn-mJFY_E';

  useEffect(() => {
    const getUsers = async () => {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set('Authorization', authHeader);
      try {
        const result = await fetch(
          'https://dash-test.fallsafetyapp.com/orgs/18612',
          {
            headers: requestHeaders
          }
        ).then(response => response.json());

        setState({ ...state, orgtree: result.org_tree });
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
