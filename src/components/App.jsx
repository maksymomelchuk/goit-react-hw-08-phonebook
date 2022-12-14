import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { Route, Routes } from 'react-router-dom';
import Filter from './Filter/Filter';
import { ContactForm } from './Phonebook/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { Layout } from './Layout';
import { HomePage } from './HomePage/HomePage';
import { RestrictedRoute } from './RestrictedRoute';
import { RegisterPage } from 'pages/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { Contacts } from 'pages/Contacts';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
