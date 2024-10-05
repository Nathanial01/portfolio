import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './Cv.css';

function Cv() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://your-server-53c2528433ba.herokuapp.com/users'); 
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError(`Error fetching users: ${err.message}`);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container my-9">
      <h1 className="mb-6 text-center">Curriculum Vitae</h1>
      {loading && <p className="text-center">Loading users...</p>}
      {error && <p className="error text-center">{error}</p>}
      {users.length === 0 && !loading && <p className="text-center">No users found</p>}
      {users.map((user, index) => (
        <div key={index} className="card mb-3 shadow-sm">
          <div className="card-body">
            {/* Basic Information Section */}
            <div className="section basic-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-person-circle"></i> {/* Bootstrap Icon for user */}
                </span>
                Basic Information
              </h2>
              <p><strong>First Name:</strong> {user.surname || 'N/A'}</p>
              <p><strong>Last Name:</strong> {user.lastname || 'N/A'}</p>
              <p><strong>Birthdate:</strong> {user.birthdate || 'N/A'}</p>
            </div>

            {/* School Section */}
            <div className="section school-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-house-door"></i> {/* Bootstrap Icon for school */}
                </span>
                School
              </h2>
              <p><strong>Current:</strong> {user.school?.current || 'N/A'}</p>
              <p><strong>Previous:</strong> {user.school?.previous || 'N/A'}</p>
            </div>

            {/* Languages Section */}
            <div className="section languages-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-globe"></i> {/* Bootstrap Icon for languages */}
                </span>
                Languages
              </h2>
              <p>{user.languages?.join(', ') || 'N/A'}</p>
            </div>

            {/* Hobbies Section */}
            <div className="section hobbies-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-heart"></i> {/* Bootstrap Icon for hobbies */}
                </span>
                Hobbies
              </h2>
              <p>{user.hobbies?.join(', ') || 'N/A'}</p>
            </div>

            {/* Education Section */}
            <div className="section education-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-book"></i> {/* Bootstrap Icon for education */}
                </span>
                Education
              </h2>
              {user.education?.map((ed, index) => (
                <div key={index}>
                  <p><strong>Title:</strong> {ed.title || 'N/A'}</p>
                  <p><strong>Period:</strong> {ed.period || 'N/A'}</p>
                  <p><strong>Details:</strong> {ed.details || 'N/A'}</p>
                </div>
              ))}
            </div>

            {/* Work Experience Section */}
            <div className="section work-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-briefcase"></i> {/* Bootstrap Icon for work experience */}
                </span>
                Work Experience
              </h2>
              {user.workExperience?.map((work, index) => (
                <div key={index}>
                  <p><strong>Company:</strong> {work.company || 'N/A'}</p>
                  <p><strong>Period:</strong> {work.period || 'N/A'}</p>
                  <p><strong>Location:</strong> {work.location || 'N/A'}</p>
                  <p><strong>Details:</strong> {work.details || 'N/A'}</p>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="section skills-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-tools"></i> {/* Bootstrap Icon for skills */}
                </span>
                Skills
              </h2>
              <p><strong>Hardware:</strong> {user.skills?.hardware?.join(', ') || 'N/A'}</p>
              <p><strong>Software:</strong> {user.skills?.software?.join(', ') || 'N/A'}</p>
              <p><strong>Other:</strong> {user.skills?.other?.join(', ') || 'N/A'}</p>
            </div>

            {/* Contact Section */}
            <div className="section contact-info">
              <h2 className="section-title">
                <span className="icon">
                  <i className="bi bi-envelope"></i> {/* Bootstrap Icon for contact */}
                </span>
                Contact
              </h2>
              <p><strong>Email:</strong> {user.contact?.email || 'N/A'}</p>
              <p><strong>Phone:</strong> {user.contact?.phone || 'N/A'}</p>
              <p><strong>Address:</strong> {user.contact?.address || 'N/A'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cv;
