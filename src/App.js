// src/App.js
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Notices from './components/Notices';
import TeamManagement from './components/TeamManagement';
import AdminManagement from './components/AdminManagement';
import NoticeCreate from './components/NoticeCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/notices" element={<Notices/>} />
          <Route path="/admin/teams" element={<TeamManagement/>} />
          <Route path="/admin/accounts" element={<AdminManagement/>} />
          <Route path="/admin/notices/create" element={<NoticeCreate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;