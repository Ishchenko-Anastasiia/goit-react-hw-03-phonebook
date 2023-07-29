import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
  border: 1px solid #000;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 10px;
`;

export const Input = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  align-items: center;
  letter-spacing: 0.04em;
  background-color: #177d17;
  color: #ffffff;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0e4b0e;
  }
`;