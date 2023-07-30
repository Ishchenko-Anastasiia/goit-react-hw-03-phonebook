import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  align-items: center;
  letter-spacing: 0.04em;
  background-color:#c20000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 25px;

  &:hover,
  &:focus {
    background-color: #7d0808;
`;