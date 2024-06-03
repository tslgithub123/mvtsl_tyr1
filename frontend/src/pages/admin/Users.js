// import React, { useEffect, useState } from "react";
// import Layout from "./../../components/Layout";
// import axios from "axios";
// import { Table } from "antd";
// const Users = () => {
//     const [users, setUsers] = useState([]);


//     const getUsers = async () => {
//         try {
//             const res = await axios.get("/api/v1/admin/getAllUsers", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 },
//             });
//             if (res.data.success) {
//                 setUsers(res.data.data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getUsers()
//     }, []);


//     const columns = [
//         {
//             title: "Name",
//             dataIndex: "name",
//         },
//         {
//             title: "Email",
//             dataIndex: "email",
//         },
//         {
//             title: "Users",
//             dataIndex: "isAdmin",
//             render: (text, record) => <span>{record.isAdmin ? 'Yes' : 'No'}</span>,
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center m-2">Users List</h1>
//             <Table columns={columns} dataSource={users} />
//         </Layout>
//     );
// };

// export default Users;


// import React, { useEffect, useState } from "react";
// import Layout from "./../../components/Layout";
// import axios from "axios";
// import { Table } from "antd";
// import { v4 as uuidv4 } from "uuid";

// const Users = () => {
//     const [users, setUsers] = useState([]);

//     const getUsers = async () => {
//         try {
//             const res = await axios.get("/api/v1/admin/getAllUsers", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 },
//             });
//             if (res.data.success) {
//                 setUsers(res.data.data.map(user => ({ ...user, key: uuidv4() }))); // Add random key here
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getUsers();
//     }, []);

//     const columns = [
//         {
//             title: "Name",
//             dataIndex: "name",
//         },
//         {
//             title: "Email",
//             dataIndex: "email",
//         },
//         {
//             title: "Admin",
//             dataIndex: "isAdmin",
//             render: (text, record) => <span>{record.isAdmin ? 'Yes' : 'No'}</span>,
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center m-2">Users List</h1>
//             <Table 
//                 columns={columns} 
//                 dataSource={users} // Use the modified users state with random key
//             />
//         </Layout>
//     );
// };

// export default Users;
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { Table } from "antd";
import { v4 as uuidv4 } from "uuid";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await axios.get("/api/v1/admin/getAllUsers", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (res.data.success) {
                const usersWithKeys = res.data.data.map(user => ({ ...user, key: uuidv4() }));
                 // Debug log to check keys
                setUsers(usersWithKeys);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Admin",
            dataIndex: "isAdmin",
            render: (text, record) => <span>{record.isAdmin ? 'Yes' : 'No'}</span>,
        },
    ];

    return (
        <Layout>
            <h1 className="text-center m-2">Users List</h1>
            <Table 
                columns={columns} 
                dataSource={users} // Use the modified users state with random key
            />
        </Layout>
    );
};

export default Users;
