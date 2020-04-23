import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
  padding: 10px 20px;
`;

export const Content = styled.View`
  height: 100%;
  padding: 20px;
  padding-top: 30px;
  background-color: #fff;
`;

export const Location = styled.View`
  flex-direction: row;
  margin: 10px 0px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;
