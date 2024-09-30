import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  margin-top: 30px;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  background-color: #FECE00;
  overflow-x: hidden;
`

export const SectionLogo = styled.section`
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  width: 450px;
  max-width: 90%;
`

export const SectionDays = styled.div`
  width: 450px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Day = styled.button`
  width: 100%;
  height: 60px;
  font-size: 36px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.3);
  background-color: #0c0c0c;
  color: #fff;
  font-weight: bold;

  a {
    color: #fff;
  }
`