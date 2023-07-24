import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 60%;
  height: 60vh;
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
