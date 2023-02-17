import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/operations';
import { AppBar } from './Pages/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { Register } from './Pages/Register/Register';
import { LoginForm } from './Pages/Login/Login';
import { Contacts } from './Contacts/Contacts';
import { PrivateRoute } from './PrivatRoute';
import { RestrictedRoute } from './RestrictedRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {/* isRefreshing ? (<b>Refreshing user...</b>
      ) : ( */}
      <AppBar />
      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginForm} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />

        {/* <Route path="/" element={<h1>Phonebook</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
      {/* ) */}
    </>
  );
}
