import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  height: 500px;
  width: 1000px;
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
