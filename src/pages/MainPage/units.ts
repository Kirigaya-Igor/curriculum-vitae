import styled from '@emotion/styled';

import { Title as PageTitle } from 'components/other';

import { theme } from 'styles';

import { ReactComponent as GithubIconSVG } from './images/github-icon.svg';

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    margin-bottom: 32px;
`;

export const TitleStyled = styled(PageTitle)`
    font-size: 40px;
`;

export const SubTitle = styled(PageTitle)`
    color: ${theme.colors.gray};
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
`;

export const Photo = styled.img`
    width: 300px;

    border-radius: ${theme.borderRadiusPrimary};
`;

export const GithubIcon = styled(GithubIconSVG)`
    width: 32px;
    height: 32px;

    margin-left: 6px;
`;

export const Title = styled.p`
    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.extraHuge.fontSize};

    color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled(Title)<{ paddingLeft?: number }>`
    font-weight: ${theme.text.small.fontWeight};

    padding-left: ${({ paddingLeft = 0 }) => `${paddingLeft}px`};
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
