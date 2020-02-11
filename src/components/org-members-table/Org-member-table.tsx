import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../appContext.js";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import User from "../../interfaces/User";

const authHeader =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFkNGQwMzg3NDM5MTQwMDE0OTk5NzMyIiwiYXBwX25hbWUiOiJXb3JrZXJTYWZldHkgUHJvIiwiZGV2aWNlX2lkIjoiOGViNmM5NmItYTI3Ny00MGMzLWEyZjItZjVlNDUzMjU2MTNhIiwiZGV2aWNlX25hbWUiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV8yKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODAuMC4zOTg3Ljg3IFNhZmFyaS81MzcuMzYiLCJpYXQiOjE1ODEzNjU5NDh9.LLjJ7FlZK63wW0rNLeerE88KCG7r2S7U8wzaM7iMHrI";

export const MemberTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  // const [state, setState] = useContext(AppContext);
  // function setContext(state) {
  //   setState(state => ({ ...state, user: state.user }));
  // }

  useEffect(() => {
    const getUsers = async () => {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set("Authorization", authHeader);
      try {
        const result = await fetch(
          "https://dash-test.fallsafetyapp.com/orgs/18612/users",
          {
            headers: requestHeaders
          }
        ).then(response => response.json());

        setUsers(result.users);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <MaterialTable
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF"
          },
          exportButton: true,
          filtering: true
        }}
        title="FallSafety Organization"
        columns={[
          {
            title: "Status",
            field: "status",
            cellStyle: {
              backgroundColor: "#039be5",
              color: "#FFF"
            },
            headerStyle: {
              backgroundColor: "#039be5"
            }
          },
          { title: "Name", field: "user_name", filtering: false },
          { title: "Group/Team", field: "org_id.org_name" },
          {
            title: "Role",
            field: "role"
          },
          { title: "Email", field: "email", filtering: false },
          { title: "Phone", field: "phone", filtering: false },
          {
            title: "App",
            field: "app_name",
            render: (rowData: User) => {
              console.log(rowData.app_name);
            }
          }
        ]}
        data={users}
      />
    </div>
  );
};
