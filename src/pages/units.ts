import styled from '@emotion/styled';

import { theme, toEnd } from 'styles';

export const PageWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: ${theme.maxContentWidth};
    margin-top: 50px;

    overflow: hidden;
`;

export const ColumnWrapper = styled.div<{ gap?: number; fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const FlexAlignCenterWrapper = styled.div<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
    marginTop?: number;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};

    ${toEnd('mobile')} {
        align-items: flex-start;
    }
`;

export const FlexBetweenWrapper = styled.div<{ gap?: number; fullWidth?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;
