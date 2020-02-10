import React, { Component } from 'react';
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

export class Table extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          options={{
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF'
            },
            exportButton: true,
            filtering: true
          }}
          title="FallSafety Organization"
          columns={[
            {
              title: 'Status',
              field: 'status',
              cellStyle: {
                backgroundColor: '#039be5',
                color: '#FFF'
              },
              headerStyle: {
                backgroundColor: '#039be5'
              }
            },
            { title: 'Name', field: 'name', filtering: false },
            { title: 'Group/Team', field: 'group' },
            {
              title: 'Role',
              field: 'role'
            },
            { title: 'Email', field: 'email', filtering: false },
            { title: 'Phone', field: 'phone', filtering: false },
            { title: 'App', field: 'app', filtering: false }
          ]}
          data={[
            {
              status: 'See Details',
              name: 'Aaron Kloska',
              group: 'Australia',
              role: 'Admin',
              email: 'aaron@myorg.com',
              phone: '555-555-5555',
              app: 'WSP'
            }
          ]}
        />
        ;
        <MaterialTable
          title="Member Issues"
          columns={[
            {
              title: 'Status',
              field: 'status',
              cellStyle: {
                backgroundColor: '#039be5',
                color: '#FFF'
              },
              headerStyle: {
                backgroundColor: '#039be5'
              }
            },
            { title: 'Name', field: 'name' },
            { title: 'Issue', field: 'issue' },
            { title: 'Email', field: 'email' },
            { title: 'App', field: 'app' }
          ]}
          data={[
            {
              status: 'See Details',
              name: 'Merlene Toon',
              issue: 'Pending join organization request',
              email: 'Merlene@myorg.com',
              app: 'WSP'
            }
          ]}
          options={{
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF'
            }
          }}
        />
        ;
      </div>
    );
  }
}
