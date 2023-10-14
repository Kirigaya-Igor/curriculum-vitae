import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

export const LinkStyled = styled.a<{ isLight?: boolean }>`
    display: flex;
    align-items: center;

    height: 56px;
    padding: 0 8px;

    color: ${({ theme }) => theme.colors.hintText};

    transition: all 0.2s ease-in-out;

    cursor: pointer;

    ${({ isLight }) =>
        css`
            @media (hover: hover) {
                &:hover {
                    background-color: ${isLight ? theme.colors.primary15 : theme.colors.box10};

                    color: ${isLight && theme.colors.primary};
                }
            }
        `}
`;
