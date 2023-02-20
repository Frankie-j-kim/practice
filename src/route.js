import App from 'App';
import Certification from 'pages/Certification';
import CertificationComplete from 'pages/CertificationComplete';
import CertificationInvite from 'pages/CertificationInvite';
import CouponCheck from 'pages/CouponCheck';
import Draw from 'pages/Draw';
import DrawSlot from 'pages/DrawSlot';
import Home from 'pages/Home';
import InviteUser from 'pages/InviteUser';
import MyCoupon from 'pages/MyCoupon';
import PointCheck from 'pages/PointCheck';
import PointUse from 'pages/PointUse';
import Randombox from 'pages/Randombox';
import TicketGuide from 'pages/TicketGuide';
import {createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'certification', element: <Certification />},
      {
        path: '/certification/invite',
        index: true,
        element: <CertificationInvite />,
      },
      {
        path: '/certification/complete',
        index: true,
        element: <CertificationComplete />,
      },
      {path: 'draw', element: <Draw />},
      {path: '/draw/slot', index: true, element: <DrawSlot />},
      {path: '/randombox', element: <Randombox />},
      {path: '/inviteuser', element: <InviteUser />},
      {path: '/pointuse', element: <PointUse />},
      {path: '/pointcheck', element: <PointCheck />},
      {path: '/couponcheck', element: <CouponCheck />},
      {path: '/mycoupon', element: <MyCoupon />},
      {path: '/ticketguide', element: <TicketGuide />},
    ],
  },
]);
