import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const IsOnline = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: green;
`;

export const IsOffline = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: red;
`;
export const Img = styled.img`
  width: 100px;
  display: block;
  height: auto;
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 500;
`;
