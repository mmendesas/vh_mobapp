import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;

  background-color: #fff;
`;

export const Company = styled.View`
  background-color: #f6f8fa;
  margin: 15px;
  padding: 20px;
  border-radius: 4px;

  flex-direction: row;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 15px;
`;

export const Position = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CompanyName = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: #777;
`;

export const JobInfo = styled.View`
  padding: 15px;
  height: 280px;
  justify-content: space-between;

  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const Actions = styled.View`
  padding: 15px;
  flex-direction: row;
  background-color: #f6f8fa;
`;
