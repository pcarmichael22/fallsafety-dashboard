import React, { useEffect, useState } from 'react';
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
import User from '../../interfaces/User';

export const Alarms = () => {
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
        data={[
          {
            name: 'Test User',
            date: '1 / 1 / 2020',
            status: 'Bad',
            type: 'Fall',
            more: 'Would you like to know more?'
          }
        ]}
      />
    </div>
  );
};
