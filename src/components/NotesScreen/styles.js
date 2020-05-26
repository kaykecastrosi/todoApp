import styled from 'styled-components/native'

export const Title = styled.Text`
    color: #000;
    font-weight: 100;
    font-size: 20px;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
`
export const Desc = styled.Text`
    color: #9a9a9a;
    font-size: 20px; 
    margin-top: 1px;
`
export const Box = styled.View`
    border-radius: 30px;
    background-color: #f0f4f7;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10%;
`
export const AddBox = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
`
export const TodoBox = styled.View`
    justify-content: space-between;
    width: 380px;
    height: 100px;
    border-radius: 15px;
    margin-top: 15px;
    background-color: #f0f4f7;
`
export const Btn = styled.TouchableOpacity`
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
export const Options = styled.View`
    justify-content: space-between;
    flex-direction: row;
`

export const Details = styled.View`
    align-items: flex-start;
    margin-left: 40px;
    margin-top: 40px; 
`

export const DetailsBall = styled.View`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const DetailsTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 40px;
`
export const TasksAmount = styled.Text`
    color: #fff;
    font-size: 20px;
`

export const Note = styled.View`
    height: 100px;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 30px;
`

export const CheckBox = styled.TouchableOpacity`
    justify-content: center;
    align-items: flex-end;
`

export const DeleteButton = styled.TouchableOpacity`
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-top: 17px;
    border-radius: 10px;
    flex: 1;
`