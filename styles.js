import styled from 'styled-components/native'

export const Title = styled.Text`
    color: #000;
    font-weight: 100;
    font-size: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-top: 30px;
`
export const Desc = styled.Text`
    color: #DDD;
`
export const Box = styled.View`
    border-radius: 30px;
    background-color: #f0f4f7;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-top: 76%;
`
export const AddBox = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
`
export const TodoBox = styled.View`
    background-color: #fff;
    justify-content: space-between;
    width: 380px;
    height: 150px;
    border-radius: 15px;
    margin-bottom: 0px;
    margin-top: 15px;
`
export const Btn = styled.TouchableOpacity`
    background-color: #0077b6;
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