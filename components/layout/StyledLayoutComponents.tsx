import styled from '@emotion/styled';

export const FullWidthBackground = styled.div`
  width: 100vw;
  background: #f6f3f0;
  z-index: -2;
  position: absolute;
  margin-left: -50vw;
  height: 100%;
  left: 50%;
`;

export const H1 = styled.h1`
  position: relative;
  color: black;
  font-family: 'Josefin Sans', serif;
  font-size: 3em;
`;

export const H2 = styled.h2`
  margin: 1em 0 0;
  position: relative;
  padding: 1em 0.5em 0.5em;
  color: black;
  font-family: 'Josefin Sans', serif;
  font-size: 2em;
`;

export const H3 = styled.h2`
  margin-top: 2em;
  position: relative;
  text-align: center;
  color: black;
  font-family: 'Josefin Sans', serif;
  font-size: 1.5em;
`;

export const CardTitle = styled.h2`
  margin: 0;
  color: black;
  font-family: 'Josefin Sans', serif;
  font-size: 1.5em;
  i {
    font-size: 0.7em;
  }
`;
export const Description = styled.p`
  position: relative;
  text-align: center;
  color: black;
  font-family: 'Maven Pro', sans-serif;
  font-size: 1em;
`;

export const Intro = styled.p`
  font-family: 'Maven Pro', sans-serif;
  font-size: 1em;
`;

export const Content = styled.p`
  font-family: 'Maven Pro', sans-serif;
  font-size: 1em;
  padding: 0 3em;
`;

export const ContentList = styled.ul`
  font-family: 'Maven Pro', sans-serif;
  font-size: 1em;
  padding: 0 5em;
  li {
    list-style-type: circle;
  }
`;
