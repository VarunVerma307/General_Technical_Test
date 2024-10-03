import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: token }
      });
      setUser(res.data);
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-6 bg-white shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <div className='flex items-center justify-center'><CgProfile className=' size-16'/></div>
        
        <p className="text-lg"><strong>Username:</strong> {user.username}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
