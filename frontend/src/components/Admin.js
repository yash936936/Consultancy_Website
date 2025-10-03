import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';

function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }
      const res = await axios.get('http://localhost:5000/api/inquiries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInquiries(res.data);
    } catch (err) {
      alert('Error: ' + err.response?.data || err.message);
      navigate('/signin');
    }
  };
  fetchInquiries();
}, [navigate]);

  return (
    <div>
      <h2>Admin Panel - Contact Inquiries</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(inquiry => (
              <tr key={inquiry._id}>
                <td>{inquiry.name}</td>
                <td>{inquiry.email}</td>
                <td>{inquiry.message}</td>
                <td>{new Date(inquiry.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-danger mt-3"
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/signin');
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Admin;