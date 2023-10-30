import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Title as PageTitle } from 'components/other';

import { additionalBreakpoint, theme, toEnd } from 'styles';

import * as STYLE from '../units';

import { ReactComponent as GithubIconSVG } from './images/github-icon.svg';

export const TitleWrapper = styled.div<{ withMobileWrap?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    margin-bottom: 32px;

    ${({ withMobileWrap }) =>
        withMobileWrap &&
        css`
            ${toEnd('mobile')} {
                flex-wrap: wrap;
            }
        `}
`;

export const TitleStyled = styled(PageTitle)`
    font-size: 40px;
`;

export const SubTitle = styled(PageTitle)`
    color: ${theme.colors.gray};
`;

export const AboutWrapper = styled(STYLE.FlexAlignCenterWrapper)`
    gap: 100px;

    ${additionalBreakpoint(1000)} {
        flex-direction: column;
        gap: 50px;
    }
`;

export const SkillsWrapper = styled(STYLE.FlexAlignCenterWrapper)`
    align-items: flex-start;
    gap: 100px;

    width: 100%;

    ${toEnd('mobile')} {
        flex-direction: column;
        gap: 50px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
    padding-left: 47px;
    padding-bottom: 25px;
    margin-bottom: 25px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.text};

    transition: all 0.2s ease-in-out;

    ${toEnd('mobile')} {
        padding-left: 0;
    }
`;

export const Photo = styled.img`
    width: 300px;
    margin-bottom: 30px;

    border-radius: ${theme.borderRadiusPrimary};
`;

export const GithubIcon = styled(GithubIconSVG)`
    width: 32px;
    height: 32px;

    margin-left: 6px;
`;

export const Title = styled.p<{ marginTop?: number }>`
    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.extraHuge.fontSize};

    color: ${({ theme }) => theme.colors.text};

    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

export const Text = styled(Title)<{ paddingLeft?: number }>`
    font-weight: ${theme.text.small.fontWeight};

    padding-left: ${({ paddingLeft = 0 }) => `${paddingLeft}px`};
`;

export const AboutText = styled(Text)`
    max-width: 500px;
`;

export const ExperienceTitle = styled(Title)`
    font-size: 24px;
`;

export const Link = styled.a`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.extraHuge.fontSize};

    color: ${theme.colors.gray};

    text-decoration: underline;

    cursor: pointer;
`;
