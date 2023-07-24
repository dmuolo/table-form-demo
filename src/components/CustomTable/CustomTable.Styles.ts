import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 70%;
  height: 80vh;
`;

export const AlignTextCenter = styled.div`
  text-align: center;
`;

interface CustomColorSpanProps {
  color: string;
}

export const ColoredSpan = styled.span<CustomColorSpanProps>`
  color: ${props => props.color};
`;
