import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { Table, Spin } from "antd";
import { Link } from "react-router-dom";
import { getUserId, getUserRole } from '../auth'; // Corrected import path
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OneUsers = () => {
  const [oneUsers, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submittedCities, setSubmittedCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const downloadExcel = async (ulbCode, userId, formType, verticals) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/v1/download-excel?ulb_code=${ulbCode}&user_id=${userId}&form_type=${formType}&verticals=${verticals}`, {
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
        endpoint = 'http://localhost:8090/api/v1/cities/category/2.5k-5k';
      } else {
        endpoint = `http://localhost:8090/api/v1/city/${userId}`;
      }

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          category: "10 Lakh+ Population"
        },
      });

      if (response.data.success) {
        setUsers(response.data.cities);
      } else {
        throw new Error('Failed to fetch cities');
      }

      if (isAdmin) {
        const submittedResponse = await axios.get(`http://localhost:8090/api/v1/city-sub`, {
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

  const renderDownloadButton = (record) => {
    const isSubmitted = submittedCities.includes(record.ulb_code);

    if (isSubmitted) {
      return (
        <button
          className="btn btn-success"
          onClick={() => downloadExcel(record.ulb_code, getUserId(), record.type, record.verticals)}
        >
          Download Excel
        </button>
      );
    }

    return null;
  };

  const renderFormButton = (record) => {
    const isSubmitted = submittedCities.includes(record.ulb_code);
    const isAdmin = localStorage.getItem('isAdmin') === 'admin';

    if (isAdmin) {
      if (isSubmitted) {
        return (
          <div className="d-flex">
            <Link to={getViewFormPath(record)} className="m-2">
              <button className="btn btn-secondary">View Form</button>
            </Link>
            <Link to={getEditFormPath(record)} className="m-2">
              <button className="btn btn-primary">Edit Form</button>
            </Link>
            <button 
              className="btn btn-danger" 
              onClick={() => deleteData(record.ulb_code, record.type, record.verticals)}
            >
              Delete
            </button>
          </div>
        );
      }
    }

    if (isSubmitted) {
      return (
        <div className="d-flex">
          <button className="btn btn-primary" disabled>Form</button>
          <Link to={getViewFormPath(record)} className="m-2">
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
      }
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

  const getEditFormPath = (record) => {
    let formPath;
    if (record.type === 'Rural') {
      formPath = `/editrural`;
    } else if (record.type === 'Urban') {
      if (record.verticals === 'Municipal Council and Nagar Panchayat') {
        formPath = `/editurban`;
      } else if (record.verticals === 'AMRUT Cities') {
        formPath = `/editamrut`;
      }
    }
    return `${formPath}/${record.ulb_code}`;
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
      }
    }
    return `${formPath}/${record.ulb_code}`;
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
        fetchData(currentPage); // Fetch data for the current page after deletion
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
      title: "ULB Name",
      dataIndex: "ulb_name",
      key: "ulb_name",
    },
    {
      title: "ULB Code",
      dataIndex: "ulb_code",
      key: "ulb_code",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Verticals",
      dataIndex: "verticals",
      key: "verticals",
    },
    {
      title: "Form Button",
      dataIndex: "actions",
      render: (_, record) => renderFormButton(record),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">2.5K-5K Population</h1>
      {loading ? (
        <div className="text-center">
          <Spin size="large" />
        </div>
      ) : oneUsers.length > 0 ? (
        <Table 
          dataSource={oneUsers} 
          columns={columns} 
          rowKey="ulb_code"
          pagination={{
            current: currentPage,
            onChange: (page) => setCurrentPage(page),
          }}
        />
      ) : (
        <div className="text-center">No data available.</div>
      )}
    </Layout>
  );
};

export default OneUsers;
