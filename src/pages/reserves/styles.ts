import styled from 'styled-components'
import { MdDelete } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  min-height:100%;
  padding: 50px;
  gap: 20px;

`

export const Header = styled.div`
  display:flex;
  flex-direction:row;
  gap: 25px;
  align-items: center;
`

export const TitleHeader = styled.h1`
  font-size: 20px;
  line-height: 25px;
  font-weight: ${({ theme }) => theme.fonts.Regular};
  color: ${({ theme }) => theme.colors.purple};

`

export const TitleHeaderBold = styled(TitleHeader)`
  font-weight: ${({ theme }) => theme.fonts.Bold};
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
`

export const Img = styled.img`
 width: 150px;
 height: 150px;
 border-radius: 5px;
`

export const Title = styled.h3`

`

export const Quantity = styled.span``

export const Delete = styled(MdDelete)`
  width: 25px;
  height: 25px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  &:hover{
    opacity: 0.3;
  }
`

export const Reserve = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 150px;
  justify-content: center;
  align-items: center;
  padding: 10px 3px;
  &:hover{
    background: ${({ theme }) => theme.colors.purple};
  }

`

export const TitleReserve = styled.strong`
  font-size: 17px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fonts.Regular};
  color: ${({ theme }) => theme.colors.white};

`
