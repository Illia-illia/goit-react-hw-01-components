import styled from 'styled-components';

export const UserCard = styled.div`
  background-color: #ffffff;
  width: calc(100% / 3);
  margin: 15px auto;
  border: 1px solid grey;
  border-radius: 8px;
`;

export const Description = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const UserName = styled.p`
  margin: 10px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.25;
  color: #212121;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.05;
  color: #808080;
  margin: 10px;
`;
export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  background-color: #c0c0c0c0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Label = styled.span`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.05;
  color: #808080;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
  color: #212121;
`;
