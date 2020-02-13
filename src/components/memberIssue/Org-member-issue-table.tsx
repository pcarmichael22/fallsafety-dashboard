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
import User from '../../interfaces/User';

export const IssueTable = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const { state, setState } = useContext<useAppState>(AppContext);

  function filterOrg(user: any) {
    const status = [];
    let flag = false;
    if (user.org_id && !user.org_accepted) {
      status.push('Pending join organization request');
      flag = true;
    }
    if (!user.email_enabled) {
      status.push('Email not deliverable');
      flag = true;
    }
    if (
      'background_refresh_enabled' in user &&
      !user.background_refresh_enabled
    ) {
      status.push('Background refresh not enabled');
      flag = true;
    }
    if ('motion_activity_enabled' in user && !user.motion_activity_enabled) {
      status.push('Motion activity not enabled');
      flag = true;
    }
    if (
      'background_motion_working' in user &&
      !user.background_motion_working
    ) {
      status.push('Background motion not working');
      flag = true;
    }
    if (user.battery_state === 'unplugged' && user.battery_level <= 10) {
      status.push('Low battery on unplugged device (10% or less battery)');
      flag = true;
    }
    // if (!user.last_check_in_id.app_location_enabled) {
    //   status.push(user.app_name + ' location not enabled');
    //   flag = true;
    // }
    // if (!user.last_check_in_id.location_services_enabled) {
    //   status.push('Location services not enabled');
    //   flag = true;
    // }
    if (!user.client_subscribed && !user.server_subscribed) {
      status.push('No organization subscription');
      flag = true;
    }
    user.status = status;
    return flag;
  }

  const membersWithIssues = state.users.filter(filterOrg);
  console.log(membersWithIssues);

  return (
    <div>
      <MaterialTable
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          }
        }}
        title="Member Issues"
        columns={[
          {
            title: 'Status',
            field: 'button',
            cellStyle: {
              backgroundColor: '#039be5',
              color: '#FFF'
            },
            headerStyle: {
              backgroundColor: '#039be5'
            }
          },
          { title: 'Name', field: 'user_name' },
          { title: 'Issue', field: 'status' },
          { title: 'Email', field: 'email' },
          { title: 'App', field: 'app' }
        ]}
        data={membersWithIssues}
      />
    </div>
  );
};
