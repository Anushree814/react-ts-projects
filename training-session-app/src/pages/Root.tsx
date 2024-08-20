import { Outlet } from 'react-router-dom';
import NavHeader from '../components/UI/NavHeader';
import SessionContextProvider from '../store/sessions-context';

export default function Root() {
  return (
    <SessionContextProvider>
     <NavHeader/>
      <Outlet />
    </SessionContextProvider>
  );
}
