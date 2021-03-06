import styled from 'styled-components/native'

export const Header = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
    max-height: 90px;
`
export const Footer = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`
export const Body = styled.View`
    flex: 1;
    align-items: flex-start;
    margin-left: 30px;
    margin-right: 30px;
`
export const Separe = styled.View`
    height: 1px;
    width: 100%;
    background-color: #9a9a9a;
    margin-top: 140px;
`
export const Title = styled.Text`
    color: #454545;
    font-size: 20px;
    margin-left: 160px;
`
export const Ask = styled.Text`
    color: #9a9a9a;
    font-size: 15px;
`
export const OptionsInput = styled.TextInput`
    color: #9a9a9a;
    font-size: 18px;
    width: 100%;
    height: 28px;
    margin-left: 20px;
`
export const CreateText = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-bottom: 15px;
`

export const Create = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
`

export const Input = styled.TextInput`
    background-color: #fafafa;
    width: 100%;
    height: 50px;
    font-size: 25px;
`

export const Options = styled.TouchableOpacity`
    margin-top: 20px;
    margin-left: 3px;
    height: 35px;
    width: 100%;
    flex-direction: row;
`
