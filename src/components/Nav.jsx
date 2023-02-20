import React from 'react';
import {useNavigate} from 'react-router';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <ul>
      <li onClick={() => navigate('/benefit')}>홈으로 이동</li>
      <li onClick={() => navigate('/admin')}>어드민으로 이동</li>
      <li onClick={() => navigate('/')}>베네핏 이동</li>
      <li onClick={() => navigate('/about')}>뽑기 이동</li>
    </ul>
  );
};

export default Nav;
