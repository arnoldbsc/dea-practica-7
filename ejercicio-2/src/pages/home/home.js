import React from 'react';
import { useUser } from '../../utils/userProvider';

const Home = () => {
  const { userName } = useUser();

  return (
    <div>
      <h2>Welcome Page</h2>
      <p>Welcome, {userName}!</p>
    </div>
  );
};

export default Home;
