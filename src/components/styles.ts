import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
 align-items: center;
 padding: 10px 30px;
 background-color: ${({ theme }) => theme.colors.primary} ;
`
export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Logo = styled.img`
 width: 50px;
 height: 50px;
`

export const TitleSideLeft = styled(Link)`
 color: ${({ theme }) => theme.colors.white};
 font-size: 17px;
 line-height: 21px;
 font-weight: ${({ theme }) => theme.fonts.Medium};
 text-decoration: none;
 &:hover{
   color: ${({ theme }) => theme.colors.purple};
 }

`

export const RightLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

`

export const QuantityReserve = styled.span`
 color: ${({ theme }) => theme.colors.white};
 font-size: 17px;
 line-height: 21px;
 font-weight: ${({ theme }) => theme.fonts.Bold};

`
