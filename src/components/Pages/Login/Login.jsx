import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Form, Label } from './Login.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    // form.reset();
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input
          type="email"
          name="email"
          onInput={e => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Password
        <input
          type="password"
          name="password"
          onInput={e => setPassword(e.target.value)}
        />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
