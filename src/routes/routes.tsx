import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '.';
import { Home } from '@/pages/Home';
import { Destination } from '@/pages/Destination';
import { Crew } from '@/pages/Crew';
import { Technology } from '@/pages/Technology';

export const SpaceTourismRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />

        <Route path={routes.home} element={<Home />} />
        <Route path={routes.destination} element={<Destination />} />
        <Route path={routes.crew} element={<Crew />} />
        <Route path={routes.technology} element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
};
