// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";
// import { Table } from "antd";

// const HomePage = () => {
//     const [cities, setCities] = useState([]);

//     const getCitiesData = async () => {
//         try {
//             const res = await axios.get(
//                 "/api/v1/user/getCities", // Assuming this is the correct endpoint to fetch cities data

//                 {
//                     headers: {
//                         Authorization: "Bearer " + localStorage.getItem("token"),
//                     },
//                 }
//             );
//             if (res.data.success) {
//                 setCities(res.data.cities);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getCitiesData();
//     }, []);

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             <Table dataSource={cities} columns={columns} />
//         </Layout>
//     );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";
// import { Table } from "antd";

// const HomePage = () => {
//     const [cities, setCities] = useState([]);

//     const getCitiesData = async () => {
//         try {
//             const res = await axios.get(
//                 "/api/user/getCities", // Corrected endpoint to fetch cities data

//                 {
//                     headers: {
//                         Authorization: "Bearer " + localStorage.getItem("token"),
//                     },
//                 }
//             );
//             if (res.data.success) {
//                 setCities(res.data.cities);
//                 // console.log(data);
//             }
//         } catch (error) {
//             console.error('Error fetching cities:', error);
//             // Handle the error (e.g., show a notification to the user)
//         }
//     };

//     useEffect(() => {
//         getCitiesData();
//     }, []);

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             <Table dataSource={cities} columns={columns} />
//         </Layout>
//     );
// };

// export default HomePage;



// Import necessary libraries and components
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message } from 'antd';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const userId = sessionStorage.getItem('userId'); // Retrieve user ID from session storage
//                 const token = localStorage.getItem('token'); // Retrieve token from local storage

//                 // Make GET request to fetch cities for the user
//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     message.error('Failed to fetch cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching cities:', error);
//                 message.error('Failed to fetch cities. Please try again later.');
//             }
//         };

//         fetchData();
//     }, []); // Run once on component mount

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             <Table dataSource={cities} columns={columns} />
//         </Layout>
//     );
// };

// export default HomePage;


// 17-April 4:17 working fine
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message, Spin } from 'antd';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom


// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId'); // Retrieve user ID from session storage
//                 const token = localStorage.getItem('token'); // Retrieve token from local storage

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 // Make GET request to fetch cities for the user
//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching cities:', error);
//                 message.error(error.message || 'Failed to fetch cities. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []); // Run once on component mount

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: "Form Button",
//             dataIndex: "actions",
//             render: (text, record) => (
//                 <div className="d-flex">
//                 {/* Wrap the button inside Link component and set the 'to' prop to the path of Rural.js */}
//                 <Link to="/Rural" className="m-2">
//                 <button className="btn btn-primary">Form</button>
//                 </Link>
//               </div>
//             ),
//           },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 19 April 3:10 Working Fine

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching cities:', error);
//                 message.error(error.message || 'Failed to fetch cities. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         // {
//         //     title: "Form Button",
//         //     dataIndex: "actions",
//         //     render: (text, record) => (
//         //         <div className="d-flex">
//         //             <Link
//         //                 // Construct the URL with query parameters containing the city data
//         //                 to={{
//         //                     pathname: "/Urban",
//         //                     search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//         //                 }}
//         //                 className="m-2"
//         //             >
//         //                 <button className="btn btn-primary">Form</button>
//         //             </Link>
//         //         </div>
//         //     ),
//         // },
//         {
//             title: "Form Button",
//             dataIndex: "actions",
//             render: (text, record) => {
//                 const formPath = record.type === "Urban" ? "/Urban" : "/Rural";

//                 return (
//                     <div className="d-flex">
//                         <Link
//                             // Construct the URL with query parameters containing the city data
//                             to={{
//                                 pathname: formPath,
//                                 search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                             }}
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary">Form</button>
//                         </Link>
//                     </div>
//                 );
//             }
//         },

//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 19 April 5:20 Working fine

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching cities:', error);
//                 message.error(error.message || 'Failed to fetch cities. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleFormSubmit = () => {
//         setFormSubmitted(true); // Set form submission state to true
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: "Form Button",
//             dataIndex: "actions",
//             render: (text, record) => {
//                 if (formSubmitted) {
//                     return <button className="btn btn-primary" disabled>Form</button>; // Disable button if form is submitted
//                 }

//                 const formPath = record.type === "Urban" ? "/Urban" : "/Rural";

//                 return (
//                     <div className="d-flex">
//                         <Link
//                             // Construct the URL with query parameters containing the city data
//                             to={{
//                                 pathname: formPath,
//                                 search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                             }}
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary" onClick={handleFormSubmit}>Form</button>
//                         </Link>
//                     </div>
//                 );
//             }
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 25 April 10:22 Working
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); // State to store submitted cities

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities by the user
//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 message.error(error.message || 'Failed to fetch data. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (text, record) => {
//                 const isSubmitted = submittedCities.includes(record.ulb_code);

//                 if (isSubmitted) {
//                     return <button className="btn btn-primary" disabled>Form</button>; // Disable button if city is submitted
//                 }

//                 const formPath = record.type === 'Urban' ? '/Urban' : '/Rural';

//                 return (
//                     <div className="d-flex">
//                         <Link
//                             // Construct the URL with query parameters containing the city data
//                             to={{
//                                 pathname: formPath,
//                                 search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                             }}
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary">Form</button>
//                         </Link>
//                     </div>
//                 );
//             }
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



//   26 April 12:03
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); // State to store submitted cities

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities by the user
//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 //message.error(error.message || 'Failed to fetch data. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; // Disable button if city is submitted
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     // Construct the URL with query parameters containing the city data
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, message, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); // State to store submitted cities

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities by the user
//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 //message.error(error.message || 'Failed to fetch data. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; // Disable button if city is submitted
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     // Construct the URL with query parameters containing the city data
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                     key={record.ulb_code} // Add unique key prop here
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                     key={record.ulb_code} 
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderFormButton = (record, index) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//     to={{
//         pathname: formPath,
//         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//     }}
//     className="m-2"
//     key={`${record.ulb_code}_${index}`} // Ensure each key is unique
// >
//     <button className="btn btn-primary">Form</button>
// </Link>

//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderFormButton = (record, index) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                     key={`${record.ulb_code}_${index}`} // Ensure each key is unique
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} />
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 29 April 4:56 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     // Update the renderDownloadButton function in your HomePage.js file
// const renderDownloadButton = (record) => {
//     const isSubmitted = submittedCities.includes(record.ulb_code);

//     if (isSubmitted) {
//         // If form is submitted, render the download button
//         return (
//             <a href={`/api/v1/download-excel?ulb_code=${record.ulb_code}`} className="m-2" key={`download_${record.ulb_code}`}>
//                 <button className="btn btn-success">Download Excel</button>
//             </a>
//         );
//     }

//     return null; // If form is not submitted, don't render anything
// };



//     const renderFormButton = (record, index) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                     key={`${record.ulb_code}_${index}`} // Ensure each key is unique
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record, index) => renderFormButton(record, index), // Pass index to renderFormButton
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };


// export default HomePage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             // If form is submitted, render the download button
//             return (
//                 <a href={`http://localhost:8090/api/v1/download-excel?ulb_code=${record.ulb_code}`} className="m-2" key={`download_${record.ulb_code}`} download>
//                     <button className="btn btn-success">Download Excel</button>
//                 </a>
//             );
//         }

//         return null; // If form is not submitted, don't render anything
//     };



//     const renderFormButton = (record, index) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                     key={`${record.ulb_code}_${index}`} // Ensure each key is unique
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record, index) => renderFormButton(record, index), // Pass index to renderFormButton
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



// Working 6 May 11:29
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import * as XLSX from 'xlsx'; // Import XLSX library
// import { getUserId } from './auth';

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]); 

//     // Function to download Excel file
//     const downloadExcel = async (ulbCode, userId, formType) => { // Add formType parameter
//         try {
//             const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}`, {
//                 responseType: 'blob' // Important to specify responseType as 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`); // Use form type in the filename
//             document.body.appendChild(link);
//             link.click();
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = sessionStorage.getItem('userId');
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const response = await axios.get(`/api/v1/city/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             // If form is submitted, render the download button
//             return (
//                 <button
//                     className="btn btn-success"
//                     onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type)} // Pass form type to downloadExcel function
//                 >
//                     Download Excel
//                 </button>
//             );
//         }

//         return null; // If form is not submitted, don't render anything
//     };

//     const renderFormButton = (record, index) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                     key={`${record.ulb_code}_${index}`} // Ensure each key is unique
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record, index) => renderFormButton(record, index), // Pass index to renderFormButton
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 8 May 12:50
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import { getUserId, getUserRole } from './auth'; // Assuming you have a function to get user role

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]);

//     // Function to download Excel file
//     const downloadExcel = async (ulbCode, userId, formType, verticals) => {
//         try {
//             const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
//                 responseType: 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`);
//             document.body.appendChild(link);
//             link.click();
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = getUserId();
//                 const token = localStorage.getItem('token');

//                 if (!userId || !token) {
//                     throw new Error('User ID or token not found');
//                 }

//                 const isAdmin = getUserRole(); // Assuming getUserRole function returns the user's role

//                 let endpoint;
//                 if (isAdmin) {
//                     // Fetch all cities for admin user
//                     endpoint = 'api/v1/all-cities';
//                 } else {
//                     // Fetch assigned cities for regular user
//                     endpoint = `/api/v1/city/${userId}`;
//                 }

//                 const response = await axios.get(endpoint, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return (
//                 <button
//                     className="btn btn-success"
//                     onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type, record.verticals)}
//                 >
//                     Download Excel
//                 </button>
//             );
//         }

//         return null;
//     };

//     const deleteData = async (ulbCode) => {
//         try {
//           const token = localStorage.getItem('token');

//           if (!token) {
//             throw new Error('Token not found');
//           }

//           await axios.delete(`/api/v1/city/${ulbCode}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           // Remove the deleted record from the cities state
//           setCities(cities.filter(city => city.ulb_code !== ulbCode));
//         } catch (error) {
//           console.error('Error deleting data:', error);
//         }
//       };


//       const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);
//         const userRole = getUserRole();

//         if (userRole === 'admin') {
//             return (
//                 <div className="d-flex">
//                     <Link
//                         to={`/edit/${record.ulb_code}`} // Assuming you have a route for editing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-primary">Edit Form</button>
//                     </Link>
//                     <button 
//                         className="btn btn-danger" 
//                         onClick={() => deleteData(record.ulb_code)}>Delete</button>
//                     <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                 </div>
//             );
//         }

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }


//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



// 13 May 2:40 Working Properly
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import { getUserId, getUserRole } from './auth'; // Assuming you have a function to get user role

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]);

//     // Function to download Excel file
//     const downloadExcel = async (ulbCode, userId, formType, verticals) => {
//         try {
//             const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
//                 responseType: 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`);
//             document.body.appendChild(link);
//             link.click();
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = getUserId();
//                 const token = localStorage.getItem('token');
//                 const isAdmin = localStorage.getItem('isAdmin') === 'admin';

//                 if (!token) {
//                     throw new Error('Token not found');
//                 }

//                 let endpoint;
//                 if (isAdmin) {
//                     endpoint = 'http://localhost:8090/api/v1/admin/admin-homepage';
//                 } else {
//                     endpoint = `http://localhost:8090/api/v1/city/${userId}`;
//                 }

//                 console.log('Fetching data from endpoint:', endpoint);

//                 const response = await axios.get(endpoint, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 console.log('Response:', response.data);

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities differently based on user role
//                 if (isAdmin) {
//                     const submittedResponse = await axios.get(`http://localhost:8090/api/v1/city-sub`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 } else {
//                     const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);






//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return (
//                 <button
//                     className="btn btn-success"
//                     onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type, record.verticals)}
//                 >
//                     Download Excel
//                 </button>
//             );
//         }

//         return null;
//     };

//     const deleteData = async (ulbCode) => {
//         try {
//           const token = localStorage.getItem('token');

//           if (!token) {
//             throw new Error('Token not found');
//           }

//           await axios.delete(`/api/v1/city/${ulbCode}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           // Remove the deleted record from the cities state
//           setCities(cities.filter(city => city.ulb_code !== ulbCode));
//         } catch (error) {
//           console.error('Error deleting data:', error);
//         }
//       };


//       const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);
//         const userRole = getUserRole();

//         if (userRole === 'admin') {
//             return (
//                 <div className="d-flex">
//                     <Link
//                         to={`/edit/${record.ulb_code}`} // Assuming you have a route for editing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-primary">Edit Form</button>
//                     </Link>
//                     <button 
//                         className="btn btn-danger" 
//                         onClick={() => deleteData(record.ulb_code)}>Delete</button>
//                     <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                 </div>
//             );
//         }

//         if (isSubmitted) {
//             return <button className="btn btn-primary" disabled>Form</button>; 
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }


//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 13 May 5:52  Working Fine
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import { getUserId, getUserRole } from './auth'; // Assuming you have a function to get user role

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]);

//     // Function to download Excel file
//     const downloadExcel = async (ulbCode, userId, formType, verticals) => {
//         try {
//             const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
//                 responseType: 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`);
//             document.body.appendChild(link);
//             link.click();
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = getUserId();
//                 const token = localStorage.getItem('token');
//                 const isAdmin = localStorage.getItem('isAdmin') === 'admin';

//                 if (!token) {
//                     throw new Error('Token not found');
//                 }

//                 let endpoint;
//                 if (isAdmin) {
//                     endpoint = 'http://localhost:8090/api/v1/admin/admin-homepage';
//                 } else {
//                     endpoint = `http://localhost:8090/api/v1/city/${userId}`;
//                 }

//                 console.log('Fetching data from endpoint:', endpoint);

//                 const response = await axios.get(endpoint, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 console.log('Response:', response.data);

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities differently based on user role
//                 if (isAdmin) {
//                     const submittedResponse = await axios.get(`http://localhost:8090/api/v1/city-sub`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 } else {
//                     const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return (
//                 <button
//                     className="btn btn-success"
//                     onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type, record.verticals)}
//                 >
//                     Download Excel
//                 </button>
//             );
//         }

//         return null;
//     };

//     const deleteData = async (ulbCode) => {
//         try {
//           const token = localStorage.getItem('token');

//           if (!token) {
//             throw new Error('Token not found');
//           }

//           await axios.delete(`/api/v1/city/${ulbCode}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           // Remove the deleted record from the cities state
//           setCities(cities.filter(city => city.ulb_code !== ulbCode));
//         } catch (error) {
//           console.error('Error deleting data:', error);
//         }
//       };


//       const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);
//         const isAdmin = localStorage.getItem('isAdmin') === 'admin';
//         const userRole = getUserRole();

//         if (isAdmin) {
//             if (isSubmitted) {
//                 return (
//                     <div className="d-flex">
//                         <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                         <Link
//                             to={`/rural/${record.ulb_code}`} // Assuming you have a route for editing form data
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary">Edit Form</button>
//                         </Link>
//                         <button 
//                             className="btn btn-danger" 
//                             onClick={() => deleteData(record.ulb_code)}>Delete</button>
//                     </div>
//                 );
//             } else {
//                 return (
//                     <div className="d-flex">
//                        <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                     </div>
//                 );
//             }
//         }

//         if (isSubmitted) {
//             return (
//                 <div className="d-flex">
//                     <button className="btn btn-primary" disabled>Form</button>
//                     <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                 </div>
//             );
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }


//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


// 14 May 9:54
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import { getUserId, getUserRole } from './auth'; // Assuming you have a function to get user role

// const HomePage = () => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]);

//     // Function to download Excel file
//     const downloadExcel = async (ulbCode, userId, formType, verticals) => {
//         try {
//             const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
//                 responseType: 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`);
//             document.body.appendChild(link);
//             link.click();
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = getUserId();
//                 const token = localStorage.getItem('token');
//                 const isAdmin = localStorage.getItem('isAdmin') === 'admin';

//                 if (!token) {
//                     throw new Error('Token not found');
//                 }

//                 let endpoint;
//                 if (isAdmin) {
//                     endpoint = 'http://localhost:8090/api/v1/admin/admin-homepage';
//                 } else {
//                     endpoint = `http://localhost:8090/api/v1/city/${userId}`;
//                 }

//                 console.log('Fetching data from endpoint:', endpoint);

//                 const response = await axios.get(endpoint, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 console.log('Response:', response.data);

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities differently based on user role
//                 if (isAdmin) {
//                     const submittedResponse = await axios.get(`http://localhost:8090/api/v1/city-sub`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 } else {
//                     const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return (
//                 <button
//                     className="btn btn-success"
//                     onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type, record.verticals)}
//                 >
//                     Download Excel
//                 </button>
//             );
//         }

//         return null;
//     };

//     const deleteData = async (ulbCode) => {
//         try {
//           const token = localStorage.getItem('token');

//           if (!token) {
//             throw new Error('Token not found');
//           }

//           await axios.delete(`/api/v1/city/${ulbCode}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           // Remove the deleted record from the cities state
//           setCities(cities.filter(city => city.ulb_code !== ulbCode));
//         } catch (error) {
//           console.error('Error deleting data:', error);
//         }
//       };


//       const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);
//         const isAdmin = localStorage.getItem('isAdmin') === 'admin';
//         const userRole = getUserRole();

//         if (isAdmin) {
//             if (isSubmitted) {
//                 return (
//                     <div className="d-flex">
//                         <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                         <Link
//                             to={`/Edit/${record.ulb_code}`} // Assuming you have a route for editing form data
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary">Edit Form</button>
//                         </Link>
//                         <button 
//                             className="btn btn-danger" 
//                             onClick={() => deleteData(record.ulb_code)}>Delete</button>
//                     </div>
//                 );
//             } 
//         }

//         if (isSubmitted) {
//             return (
//                 <div className="d-flex">
//                     <button className="btn btn-primary" disabled>Form</button>
//                     <Link
//                         to={`/view/${record.ulb_code}`} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                 </div>
//             );
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }


//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



////  delete apis


// const deleteData = async (ulbCode) => {
//     try {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         throw new Error('Token not found');
//       }

//       await axios.delete(`/api/v1/city/${ulbCode}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Remove the deleted record from the cities state
//       setCities(cities.filter(city => city.ulb_code !== ulbCode));
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };


// const deleteData = (ulbCode, type, verticals) => {
//     let endpoint = '';

//     if (type === 'Rural') {
//         endpoint = `/api/v1/ruraldel/${ulbCode}`;
//     } else if (type === 'Urban') {
//         if (verticals === 'AMRUT Cities') {
//             endpoint = `/api/v1/amrutdel/${ulbCode}`;
//         } else {
//             endpoint = `/api/v1/urbandel/${ulbCode}`;
//         }
//     }

//     fetch(endpoint, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             console.log('Deletion successful', data);
//         } else {
//             console.error('Deletion failed', data);
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// };

// 4:04 pm 17 may working exellently fine 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import { getUserId, getUserRole } from './auth'; // Assuming you have a function to get user role

// const HomePage = ({ record }) => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]);

//     // Function to download Excel file
//     const downloadExcel = async (ulbCode, userId, formType, verticals) => {
//         try {
//             const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
//                 responseType: 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`);
//             document.body.appendChild(link);
//             link.click();
//             console.log(ulbCode,formType,"download excel click");
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const userId = getUserId();
//                 const token = localStorage.getItem('token');
//                 const isAdmin = localStorage.getItem('isAdmin') === 'admin';

//                 if (!token) {
//                     throw new Error('Token not found');
//                 }

//                 let endpoint;
//                 if (isAdmin) {
//                     endpoint = 'http://localhost:8090/api/v1/admin/admin-homepage';
//                 } else {
//                     endpoint = `http://localhost:8090/api/v1/city/${userId}`;
//                 }

//                 console.log('Fetching data from endpoint:', endpoint);

//                 const response = await axios.get(endpoint, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 console.log('Response:', response.data);

//                 if (response.data.success) {
//                     setCities(response.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch cities');
//                 }

//                 // Fetch submitted cities differently based on user role
//                 if (isAdmin) {
//                     const submittedResponse = await axios.get(`http://localhost:8090/api/v1/city-sub`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 } else {
//                     const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     if (submittedResponse.data.success) {
//                         setSubmittedCities(submittedResponse.data.cities);
//                     } else {
//                         throw new Error('Failed to fetch submitted cities');
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     const renderDownloadButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);

//         if (isSubmitted) {
//             return (
//                 <button
//                     className="btn btn-success"
//                     onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type, record.verticals)}
//                 >
//                     Download Excel
//                 </button>
//             );
//         }

//         return null;
//     };


//     const deleteData = (ulbCode, type, verticals) => {
//         let endpoint = '';

//         if (type === 'Rural') {
//             endpoint = `/api/v1/ruraldel/${ulbCode}`;
//         } else if (type === 'Urban') {
//             if (verticals === 'AMRUT Cities') {
//                 endpoint = `/api/v1/amrutdel/${ulbCode}`;
//             } else {
//                 endpoint = `/api/v1/urbandel/${ulbCode}`;
//             }
//         }

//         fetch(endpoint, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 console.log('Deletion successful', data);
//                 window.location.reload();  // Refresh the page on successful deletion
//             } else {
//                 console.error('Deletion failed', data);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

//       const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);
//         const isAdmin = localStorage.getItem('isAdmin') === 'admin';
//         const userRole = getUserRole();

//         if (isAdmin) {
//             if (isSubmitted) {
//                 return (
//                     <div className="d-flex">
//                         <Link
//                         to={getViewFormPath(record)} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                         <Link
//                             to={getEditFormPath(record)} // Assuming you have a route for editing form data
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary">Edit Form</button>
//                         </Link>
//                         <button 
//                             className="btn btn-danger" 
//                             onClick={() => deleteData(record.ulb_code, record.type, record.verticals)}>
//                             Delete
//                         </button>
//                     </div>
//                 );
//             } 
//         }

//         if (isSubmitted) {
//             return (
//                 <div className="d-flex">
//                     <button className="btn btn-primary" disabled>Form</button>
//                     <Link
//                         to={getViewFormPath(record)} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                 </div>
//             );
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }


//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };


//     const getEditFormPath = (record) => {
//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = `/editrural`;
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = `/editurban`;
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = `/editamrut`;
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return `${formPath}/${record.ulb_code}`;
//     };

//     const getViewFormPath = (record) => {
//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = `/viewrural`;
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = `/viewurban`;
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = `/viewamrut`;
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return `${formPath}/${record.ulb_code}`;
//     };



//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },
//         {
//             title: 'Download Excel',
//             dataIndex: 'actions',
//             render: (_, record) => renderDownloadButton(record),
//         },
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table dataSource={cities} columns={columns} rowKey="ulb_code" /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';
// import { Table, Spin } from 'antd';
// import { Link } from 'react-router-dom';
// import { getUserId, getUserRole } from './auth'; // Assuming you have a function to get user role
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const HomePage = ({ record }) => {
//     const [cities, setCities] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [submittedCities, setSubmittedCities] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);


//     const fetchData = async (page) => {
//         try {
//             setLoading(true);
//             const userId = getUserId();
//             const token = localStorage.getItem('token');
//             const isAdmin = localStorage.getItem('isAdmin') === 'admin';

//             if (!token) {
//                 throw new Error('Token not found');
//             }

//             let endpoint;
//             if (isAdmin) {
//                 endpoint = '/api/v1/admin/admin-homepage';
//             } else {
//                 endpoint = `/api/v1/city/${userId}`;
//             }


//             const response = await axios.get(endpoint, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//                 params: {
//                     page,
//                 },
//             });


//             if (response.data.success) {
//                 setCities(response.data.cities);
//             } else {
//                 throw new Error('Failed to fetch cities');
//             }

//             // Fetch submitted cities differently based on user role
//             if (isAdmin) {
//                 const submittedResponse = await axios.get(`/api/v1/city-sub`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             } else {
//                 const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (submittedResponse.data.success) {
//                     setSubmittedCities(submittedResponse.data.cities);
//                 } else {
//                     throw new Error('Failed to fetch submitted cities');
//                 }
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData(currentPage);
//     }, [currentPage]);


//     const deleteData = (ulbCode, type, verticals) => {
//         let endpoint = '';

//         if (type === 'Rural') {
//             endpoint = `/api/v1/ruraldel/${ulbCode}`;
//         } else if (type === 'Urban') {
//             if (verticals === 'AMRUT Cities') {
//                 endpoint = `/api/v1/amrutdel/${ulbCode}`;
//             } else {
//                 endpoint = `/api/v1/urbandel/${ulbCode}`;
//             }
//         }

//         fetch(endpoint, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 console.log('Deletion successful', data);
//                 toast.success("Data deleted successfully")
//                 fetchData(currentPage); // Fetch data for the current page after deletion
//             } else {
//                 console.error('Deletion failed', data);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

//     const renderFormButton = (record) => {
//         const isSubmitted = submittedCities.includes(record.ulb_code);
//         const isAdmin = localStorage.getItem('isAdmin') === 'admin';
//         const userRole = getUserRole();

//         if (isAdmin) {
//             if (isSubmitted) {
//                 return (
//                     <div className="d-flex">
//                         <Link
//                             to={getViewFormPath(record)} // Assuming you have a route for viewing form data
//                             className="m-2"
//                         >
//                             <button className="btn btn-secondary">View Form</button>
//                         </Link>
//                         <Link
//                             to={getEditFormPath(record)} // Assuming you have a route for editing form data
//                             className="m-2"
//                         >
//                             <button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
//                         </Link>
//                         <button 
//                             className="btn btn-danger" 
//                             onClick={() => deleteData(record.ulb_code, record.type, record.verticals)}>
//                             <i class="fa-solid fa-trash"></i>
//                         </button>
//                     </div>
//                 );
//             } 
//         }

//         if (isSubmitted) {
//             return (
//                 <div className="d-flex">
//                     <button className="btn btn-primary" disabled>Form</button>
//                     <Link
//                         to={getViewFormPath(record)} // Assuming you have a route for viewing form data
//                         className="m-2"
//                     >
//                         <button className="btn btn-secondary">View Form</button>
//                     </Link>
//                 </div>
//             );
//         }

//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = '/Rural';
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = '/Urban';
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = '/Amrut';
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return (
//             <div className="d-flex">
//                 <Link
//                     to={{
//                         pathname: formPath,
//                         search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
//                     }}
//                     className="m-2"
//                 >
//                     <button className="btn btn-primary">Form</button>
//                 </Link>
//             </div>
//         );
//     };

//     const getEditFormPath = (record) => {
//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = `/editrural`;
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = `/editurban`;
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = `/editamrut`;
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return `${formPath}/${record.ulb_code}`;
//     };

//     const getViewFormPath = (record) => {
//         let formPath;

//         if (record.type === 'Rural') {
//             formPath = `/viewrural`;
//         } else if (record.type === 'Urban') {
//             if (record.verticals === 'Municipal Council and Nagar Panchayat') {
//                 formPath = `/viewurban`;
//             } else if (record.verticals === 'AMRUT Cities') {
//                 formPath = `/viewamrut`;
//             } else {
//                 // Handle other verticals for Urban type here
//             }
//         } else {
//             // Handle other types here
//         }

//         return `${formPath}/${record.ulb_code}`;
//     };

//     const columns = [
//         {
//             title: 'ULB Name',
//             dataIndex: 'ulb_name',
//             key: 'ulb_name',
//         },
//         {
//             title: 'ULB Code',
//             dataIndex: 'ulb_code',
//             key: 'ulb_code',
//         },
//         {
//             title: 'Category',
//             dataIndex: 'category',
//             key: 'category',
//         },
//         {
//             title: 'Type',
//             dataIndex: 'type',
//             key: 'type',
//         },
//         {
//             title: 'Verticals',
//             dataIndex: 'verticals',
//             key: 'verticals',
//         },
//         {
//             title: 'Form Button',
//             dataIndex: 'actions',
//             render: (_, record) => renderFormButton(record),
//         },    
//     ];

//     return (
//         <Layout>
//             <h1 className="text-center">Home Page</h1>
//             {loading ? (
//                 <div className="text-center">
//                     <Spin size="large" />
//                 </div>
//             ) : cities.length > 0 ? (
//                 <Table 
//                     dataSource={cities} 
//                     columns={columns} 
//                     rowKey="ulb_code"
//                     pagination={{
//                         current: currentPage,
//                         onChange: (page) => setCurrentPage(page),
//                     }}
//                 /> 
//             ) : (
//                 <div className="text-center">No cities assigned.</div>
//             )}
//         </Layout>
//     );
// };

// export default HomePage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Table, Spin, Input } from 'antd';
import { Link } from 'react-router-dom';
import { getUserId, getUserRole } from './auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HomePage.css';

const { Search } = Input;

const HomePage = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [submittedCities, setSubmittedCities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const userId = getUserId();
            const token = localStorage.getItem('token');
            const isAdmin = localStorage.getItem('isAdmin') === 'admin';

            if (!token) {
                throw new Error('Token not found');
            }

            let endpoint;
            if (isAdmin) {
                endpoint = '/api/v1/admin/admin-homepage';
            } else {
                endpoint = `/api/v1/city/${userId}`;
            }

            const response = await axios.get(endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    page,
                },
            });

            if (response.data.success) {
                setCities(response.data.cities);
                setFilteredCities(response.data.cities);
            } else {
                throw new Error('Failed to fetch cities');
            }

            if (isAdmin) {
                const submittedResponse = await axios.get(`/api/v1/city-sub`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (submittedResponse.data.success) {
                    setSubmittedCities(submittedResponse.data.cities);
                } else {
                    throw new Error('Failed to fetch submitted cities');
                }
            } else {
                const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (submittedResponse.data.success) {
                    setSubmittedCities(submittedResponse.data.cities);
                } else {
                    throw new Error('Failed to fetch submitted cities');
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleSearch = (value) => {
        setSearchInput(value);
        if (value) {
            const filtered = cities.filter(city => city.ulb_code.includes(value));
            setFilteredCities(filtered);
        } else {
            setFilteredCities(cities);
        }
    };

    const downloadExcel = async (ulbCode, userId, formType, verticals) => {
        try {
            const response = await axios.get(`/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${formType}_data_${ulbCode}.xlsx`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading Excel file:', error);
        }
    };

    const getViewFormPath = (record) => {
        let formPath;

        if (record.type === 'Rural') {
            formPath = `/viewrural`;
        } else if (record.type === 'Urban') {
            if (record.verticals === 'Municipal Council and Nagar Panchayat') {
                formPath = `/viewurban`;
            } else if (record.verticals === 'AMRUT Cities') {
                formPath = `/viewamrut`;
            } else {
                // Handle other verticals for Urban type here
            }
        } else {
            // Handle other types here
        }

        return `${formPath}/${record.ulb_code}`;
    };

    const getEditFormPath = (record) => {
        let formPath;

        if (record.type === 'Rural') {
            formPath = `/editrural`;
        } else if (record.type === 'Urban') {
            if (record.verticals === 'Municipal Council and Nagar Panchayat') {
                formPath = `/editurban`;
            } else if (record.verticals === 'AMRUT Cities') {
                formPath = `/editamrut`;
            } else {
                // Handle other verticals for Urban type here
            }
        } else {
            // Handle other types here
        }

        return `${formPath}/${record.ulb_code}`;
    };

    const renderFormButton = (record) => {
        const isSubmitted = submittedCities.includes(record.ulb_code);
        const isAdmin = localStorage.getItem('isAdmin') === 'admin';
        const userRole = getUserRole();

        if (isAdmin) {
            if (isSubmitted) {
                return (
                    <div className="d-flex">
                        <Link to={getViewFormPath(record)} className="m-2">
                            <button className="btn btn-secondary">View Form</button>
                        </Link>
                        <Link to={getEditFormPath(record)} className="m-2">
                            <button className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
                        </Link>
                        {/* <button className="btn btn-danger" onClick={() => deleteData(record.ulb_code, record.type, record.verticals)}>
                            <i className="fa-solid fa-trash"></i>
                        </button> */}
                        <div style={{width:'80px'}}>
                            <button
                                className="button btn btn-danger"
                                onClick={() => deleteData(record.ulb_code, record.type, record.verticals)}
                            >
                                <svg viewBox="0 0 448 512" className="svgIcon">
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            }
        }

        if (isSubmitted) {
            return (
                <div className="d-flex">
                    <button className="btn btn-primary" disabled>Form</button>
                    <Link
                        to={getViewFormPath(record)} // Assuming you have a route for viewing form data
                        className="m-2"
                    >
                        <button className="btn btn-secondary">View Form</button>
                    </Link>
                </div>
            );
        }

        let formPath;

        if (record.type === 'Rural') {
            formPath = '/Rural';
        } else if (record.type === 'Urban') {
            if (record.verticals === 'Municipal Council and Nagar Panchayat') {
                formPath = '/Urban';
            } else if (record.verticals === 'AMRUT Cities') {
                formPath = '/Amrut';
            } else {
                // Handle other verticals for Urban type here
            }
        } else {
            // Handle other types here
        }

        return (
            <div className="d-flex">
                <Link
                    to={{
                        pathname: formPath,
                        search: `?name=${record.ulb_name}&code=${record.ulb_code}&category=${record.category}&type=${record.type}&verticals=${record.verticals}`
                    }}
                    className="m-2"
                >
                    <button className="btn btn-primary">Form</button>
                </Link>
            </div>
        );
    };

    const deleteData = (ulbCode, type, verticals) => {
        let endpoint = '';

        if (type === 'Rural') {
            endpoint = `/api/v1/ruraldel/${ulbCode}`;
        } else if (type === 'Urban') {
            if (verticals === 'AMRUT Cities') {
                endpoint = `/api/v1/amrutdel/${ulbCode}`;
            } else {
                endpoint = `/api/v1/urbandel/${ulbCode}`;
            }
        }

        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast.success("Data deleted successfully");
                    fetchData(currentPage);
                } else {
                    console.error('Deletion failed', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const columns = [
        {
            title: 'ULB Name',
            dataIndex: 'ulb_name',
            key: 'ulb_name',
        },
        {
            title: 'ULB Code',
            dataIndex: 'ulb_code',
            key: 'ulb_code',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Verticals',
            dataIndex: 'verticals',
            key: 'verticals',
        },
        {
            title: 'Form Button',
            dataIndex: 'actions',
            render: (_, record) => renderFormButton(record),
        },
    ];

    return (
        <Layout>
            <h1 className="text-center">Home Page</h1>
            <center>
                <Search
                    placeholder="Search ULB code"
                    allowClear
                    onSearch={handleSearch}
                    style={{ width: 200, marginBottom: 16 }}

                />
            </center>
            {loading ? (
                <div className="text-center">
                    <Spin size="large" />
                </div>
            ) : filteredCities.length > 0 ? (
                <Table
                    dataSource={filteredCities}
                    columns={columns}
                    rowKey="ulb_code"
                    pagination={{
                        current: currentPage,
                        onChange: (page) => setCurrentPage(page),
                    }}
                />
            ) : (
                <div className="text-center">No cities found.</div>
            )}
        </Layout>
    );
};

export default HomePage;
