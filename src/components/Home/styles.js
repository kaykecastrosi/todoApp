import styled from 'styled-components/native'

export const Title = styled.Text`
    color: #454545;
    font-weight: bold;
    font-size: 40px;
    margin-left: 9px;
    margin-top: 15px;
`
export const ItemTitle = styled.Text`
    color: #454545;
    font-weight: bold;
    margin-top: 18px;
`
export const ItemTitleBox = styled.View`
    align-items: flex-start;
    margin-left: 22px;
`
export const ItemDesc = styled.Text`
    color: #9a9a9a;
    font-size: 18px;
    margin-left: 22px;
`

export const Header = styled.View`
    margin-top: 15px;
    margin-left: 25px;
`
export const List = styled.FlatList`
    margin-top: 15px;
    flex-direction: row;
    margin-left: 5px;
    flex: 1;
`

export const Item = styled.TouchableOpacity`
    background-color: #fff;
    height: 180px;
    width: 180px;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
`

export const AddBox = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
`

export const Btn = styled.TouchableOpacity`
    background-color: #5983f8;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 20px;
    position: absolute;
    bottom: 1px;
    right: 1px;
`

export const DeleteButton = styled.TouchableOpacity`
    height: 180px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-top: 0px;
    border-radius: 10px;
    flex: 1;
`