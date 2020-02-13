import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import FilterList from '@material-ui/icons/FilterList';
import Remove from '@material-ui/icons/Remove';
import Emergency from '../../interfaces/Emergency';

const authHeader =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFkNGQwMzg3NDM5MTQwMDE0OTk5NzMyIiwiYXBwX25hbWUiOiJXb3JrZXJTYWZldHkgUHJvIiwiZGV2aWNlX2lkIjoiODJkNWIxMjMtYmVlZi00ODE0LWE1OTMtZDMzNzQ3NGEzYjdmIiwiZGV2aWNlX25hbWUiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV8wKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODAuMC4zOTg3LjEwMCBTYWZhcmkvNTM3LjM2IiwiaWF0IjoxNTgxNTMyNDYzfQ.XCSThbXCbrLm7JMRw_Jjj3bxnKx4cYWvwkQn-mJFY_E';

export const Alarms = () => {
  const { state, setState } = useContext<useAppState>(AppContext);

  useEffect(() => {
    const getEmergencies = async () => {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set('Authorization', authHeader);
      try {
        const result = await fetch(
          'https://dash-test.fallsafetyapp.com/orgs/18612/emergencies',
          {
            headers: requestHeaders
          }
        ).then(response => response.json());

        setState({ ...state, emergencies: result.emergencies });
      } catch (e) {
        console.log(e);
      }
    };
    getEmergencies();
  }, []);
  return (
    <div>
      <MaterialTable
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          }
        }}
        title="Alarms"
        columns={[
          {
            title: 'Name',
            field: 'name',
            cellStyle: {
              backgroundColor: '#039be5',
              color: '#FFF'
            },
            headerStyle: {
              backgroundColor: '#039be5'
            }
          },
          { title: 'Date', field: 'date' },
          { title: 'Status', field: 'status' },
          { title: 'Type', field: 'type' },
          { title: 'More', field: 'more' }
        ]}
        data={state.emergencies}
      />
    </div>
  );
};
