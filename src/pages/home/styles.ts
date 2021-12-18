import styled from 'styled-components'
import { IoAirplaneSharp } from 'react-icons/io5'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const List = styled.li`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin-top: 20px;
   padding: 20px;
   gap: 20px;
`

export const WrapList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  justify-content: center;
   padding: 15px;
  align-items: flex-start;
                       /* blur */
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
`

export const Image = styled.img`
  width: 100%;
  height: 150px;
`

export const Title = styled.h3`
  font-size: 17px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.black};
`

export const Span = styled.span`
 font-weight: ${({ theme }) => theme.fonts.Regular};
 font-size: 17px;
 line-height: 20px;
 color: ${({ theme }) => theme.colors.black};
`

export const Button = styled.button`
  width:100%;
  padding: 9px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  &:hover{
    background-color: ${({ theme }) => theme.colors.purple};
  }
`

export const Airplane = styled(IoAirplaneSharp)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`

export const TextButton = styled(Span)`
 color: ${({ theme }) => theme.colors.white};
`
