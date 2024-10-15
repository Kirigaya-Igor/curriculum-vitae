import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from 'components/other';

import * as STYLE from '../units';

import photo from './images/photo.jpg';
import * as S from './units';

export const MainPage = () => {
    const { t } = useTranslation();

    const ammerResponsibilities = [
        t('mainPage.legacy code refactoring'),
        t('mainPage.conducting a code review'),
        t('mainPage.creating reusable components'),
        t('mainPage.creating new projects'),
        t('mainPage.architecture planning'),
        t('mainPage.worked with RESTful'),
        t('mainPage.adaptive design and cross-browser'),
        t('mainPage.worked closely with designer'),
        t('mainPage.blockchain connection logic'),
        t('mainPage.bug fixes'),
        t('mainPage.writing readable code'),
        t('mainPage.writing code comments'),
        t('mainPage.pixel-perfect layouting'),
    ];

    const hivexResponsibilities = [
        t('mainPage.legacy code refactoring'),
        t('mainPage.creating reusable components'),
        t('mainPage.code review of junior'),
        t('mainPage.bug fixes'),
        t('mainPage.worked with RESTful'),
        t('mainPage.worked closely with designer'),
    ];

    const freelanceResponsibilities = [
        t('mainPage.worked as a freelancer'),
        t('mainPage.developed user interfaces for online stores'),
        t('mainPage.conducted analysis and optimization'),
        t('mainPage.developed user interfaces using React.js'),
        t('mainPage.integrated third-party APIs and libraries'),
        t('mainPage.worked with clients'),
        t('mainPage.solved problems related to adaptive design and cross-browser compatibility'),
    ];

    const hardSkills = [
        'JavaScript ES6',
        'TypeScript',
        'React.js',
        'Next.js',
        'MobX',
        'Redux',
        'CSS-in-JS',
        'preprocessors',
        'REST API',
        'Bootstrap',
        'MUI',
        'Git',
        'Webpack',
        'PWA',
        'WebSockets',
        'Docker',
        'Charts in React',
        'Keycloak (custom pages)',
        'DRY, KISS',
    ];

    const softSkills = [
        t('mainPage.Communication skills'),
        t('mainPage.Problem-solving skills'),
        t('mainPage.Adaptability'),
        t('mainPage.Critical thinking'),
        t('mainPage.Teamwork'),
        t('mainPage.Stress tolerance'),
        t('mainPage.Strategic thinking'),
        t('mainPage.Learning and self-improvement ability'),
        t('mainPage.Attention to details'),
        t('mainPage.Ability to explain complex concepts in simple terms'),
        t('mainPage.Documentation and reporting skills'),
        t('mainPage.Ability to work with various technologies and systems'),
        t('mainPage.Listening and understanding user requirements'),
        t('mainPage.I can google'),
    ];

    const apps = [
        'JIRA',
        'Confluence',
        'Google Workspace',
        'Microsoft Word',
        'Figma',
        'Postman',
        'PyCharm',
        'VSCode',
    ];

    const qualities = [
        t('mainPage.Desire for continuous self-improvement'),
        t('mainPage.Results-oriented'),
        t('mainPage.Flexibility and adaptability to changes'),
        t('mainPage.Responsibility and reliability'),
        t('mainPage.Creativity in finding solutions'),
        t('mainPage.Analytical mindset'),
        t('mainPage.Ability to understand new technologies and systems'),
    ];

    return (
        <STYLE.PageWrapper>
            <S.TitleWrapper withMobileWrap>
                <S.TitleStyled>{t('mainPage.name')}</S.TitleStyled>

                <S.SubTitle>{`(middle frontend developer)`}</S.SubTitle>
            </S.TitleWrapper>

            <S.TitleWrapper>
                <Title scrollMargin={80}>👋🏻 {t('header.About')}</Title>
            </S.TitleWrapper>

            <S.Container>
                <S.AboutWrapper isCenter={false}>
                    <STYLE.ColumnWrapper>
                        <S.Photo src={photo} />

                        <STYLE.ColumnWrapper>
                            <STYLE.FlexAlignCenterWrapper>
                                <S.Title>{t('mainPage.Date of birth')}:</S.Title>

                                <S.Text>15.03.2000</S.Text>
                            </STYLE.FlexAlignCenterWrapper>

                            <STYLE.FlexAlignCenterWrapper>
                                <S.Title>{t('mainPage.Address')}:</S.Title>

                                <S.Text>Warsaw, Poland</S.Text>
                            </STYLE.FlexAlignCenterWrapper>

                            <S.Title>{t('mainPage.residence card')}</S.Title>
                        </STYLE.ColumnWrapper>
                    </STYLE.ColumnWrapper>

                    <S.AboutText>{t('mainPage.AboutText')}</S.AboutText>
                </S.AboutWrapper>
            </S.Container>

            {/* ------------------------------------------------------------- */}

            <S.TitleWrapper>
                <STYLE.FlexAlignCenterWrapper gap={10}>
                    <S.GithubIcon />

                    <Title id="github" scrollMargin={80}>
                        GitHub
                    </Title>
                </STYLE.FlexAlignCenterWrapper>
            </S.TitleWrapper>

            <S.Container>
                <S.Link
                    href="https://github.com/Kirigaya-Igor?tab=repositories"
                    target="_blanck"
                    rel="noopener noreferrer"
                >
                    {t('mainPage.GitHubLink')}
                </S.Link>
            </S.Container>

            {/* ------------------------------------------------------------- */}

            <S.TitleWrapper>
                <Title id="contacts" scrollMargin={80}>
                    ☎️ {t('header.Contacts')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>{t('mainPage.Phone number')}:</S.Title>

                    <S.Text>{`+48 661 702 699 (whatsapp, viber)`}</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>E-mail:</S.Title>

                    <S.Text>igor.szyjan.work@gmail.com</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>Telegram:</S.Title>

                    <S.Link
                        href="https://t.me/kirigaya_igor"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        {t('mainPage.name')}
                    </S.Link>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>LinkedIn:</S.Title>

                    <S.Link
                        href="https://www.linkedin.com/in/igor-shyian-05097b20a/"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        {t('mainPage.name')}
                    </S.Link>
                </STYLE.FlexAlignCenterWrapper>
            </S.Container>

            <S.TitleWrapper>
                <Title id="experience" scrollMargin={80}>
                    💼 {t('mainPage.Experience')}
                </Title>
            </S.TitleWrapper>

            {/* ------------------------------------------------------------- */}

            <S.Container>
                <S.ExperienceTitle>{`1) Ammer Technologies AG (01.02.2024 - present)`}</S.ExperienceTitle>

                <S.Text>{t('mainPage.AmmerDescription')}</S.Text>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Position')}:</S.Title>

                    <S.Text>Frontend Developer (React, middle+)</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Team')}:</S.Title>

                    <S.Text>2BE, 2FE, 2QA, 2PM, 1 devops, 2 disigner</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <S.Title marginTop={20}>{t('mainPage.Responsibilities')}:</S.Title>

                {ammerResponsibilities.map((item, i) => (
                    <S.Text key={i} paddingLeft={16}>
                        - {item}
                    </S.Text>
                ))}

                <S.Title marginTop={20}>{t('mainPage.Projects')}:</S.Title>

                <S.Link
                    href="https://landing-ammer-pay.ammer.io/"
                    target="_blanck"
                    rel="noopener noreferrer"
                >
                    landing-ammer-pay.ammer.io
                </S.Link>

                <S.Link
                    href="https://merchants.ammer.io/"
                    target="_blanck"
                    rel="noopener noreferrer"
                >
                    merchants.ammer.io
                </S.Link>

                <S.Text>{t('mainPage.AmmerPayDescription')}</S.Text>

                {/* ------------------------------------------------------------- */}

                <S.ExperienceTitle
                    marginTop={40}
                >{`2) Waves ecosystem (01.03.2022 - 30.09.2023)`}</S.ExperienceTitle>

                <S.Text>{t('mainPage.WavesDescription')}</S.Text>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Position')}:</S.Title>

                    <S.Text>Frontend Developer (React, middle+)</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Team')}:</S.Title>

                    <S.Text>2BE, 2FE, 2QA, 2PM, 1 devops, 1 disigner</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <S.Title marginTop={20}>{t('mainPage.similarResponsibilities')}</S.Title>

                <S.Title marginTop={20}>{t('mainPage.Projects')}:</S.Title>

                <S.Link href="https://swop.fi" target="_blanck" rel="noopener noreferrer">
                    SWOP.FI
                </S.Link>

                <S.Text>{t('mainPage.SwopfiDescription')}</S.Text>

                <S.Link href="https://axly.io" target="_blanck" rel="noopener noreferrer">
                    AXLY.IO & APP.AXLY.IO
                </S.Link>

                <S.Text>{t('mainPage.AxlyDescription')}</S.Text>

                {/* ------------------------------------------------------------- */}

                <S.ExperienceTitle
                    marginTop={40}
                >{`3) Hivex  (01.02.2021 - 31.01.2022)`}</S.ExperienceTitle>

                <S.Text>{t('mainPage.HivexDescription')}</S.Text>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Position')}:</S.Title>

                    <S.Text>Frontend Developer (React, middle)</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Team')}:</S.Title>

                    <S.Text>1BE, 2FE, 1QA, 1PM, 1 disigner</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <S.Title marginTop={20}>{t('mainPage.Responsibilities')}:</S.Title>

                {hivexResponsibilities.map((item, i) => (
                    <S.Text key={i} paddingLeft={16}>
                        - {item}
                    </S.Text>
                ))}

                {/* ------------------------------------------------------------- */}

                <S.ExperienceTitle
                    marginTop={40}
                >{`4) Freelance (01.01.2020 - 31.01.2021, 30.09.2023 - now)`}</S.ExperienceTitle>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>{t('mainPage.Position')}:</S.Title>

                    <S.Text>Frontend Developer (React)</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <S.Title marginTop={20}>{t('mainPage.Projects')}:</S.Title>

                <S.Link href="https://0xshadow.com/" target="_blanck" rel="noopener noreferrer">
                    0xshadow.com
                </S.Link>

                <S.Link href="https://app.rivo.xyz/" target="_blanck" rel="noopener noreferrer">
                    app.rivo.xyz
                </S.Link>

                <S.Title marginTop={20}>{t('mainPage.Responsibilities')}:</S.Title>

                {freelanceResponsibilities.map((item, i) => (
                    <S.Text key={i} paddingLeft={16}>
                        - {item}
                    </S.Text>
                ))}
            </S.Container>

            {/* ------------------------------------------------------------- */}

            <S.TitleWrapper>
                <Title id="education" scrollMargin={80}>
                    🎓 {t('header.Education')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.Title>{t('mainPage.University')}</S.Title>

                <S.Text>{t('mainPage.UniversityDate')}</S.Text>

                <S.Text>{t('mainPage.topic of engineering work')}</S.Text>
            </S.Container>

            {/* ------------------------------------------------------------- */}

            <S.TitleWrapper>
                <Title id="skills" scrollMargin={80}>
                    ✨ {t('header.Skills')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.SkillsWrapper>
                    <STYLE.ColumnWrapper>
                        <S.Title>🌟 {t('mainPage.Hard skills')}</S.Title>

                        {hardSkills.map((item, i) => (
                            <S.Text key={i} paddingLeft={16}>
                                - {item}
                            </S.Text>
                        ))}
                    </STYLE.ColumnWrapper>

                    <STYLE.ColumnWrapper>
                        <S.Title>⭐ {t('mainPage.Soft skills')}</S.Title>

                        {softSkills.map((item, i) => (
                            <S.Text key={i} paddingLeft={16}>
                                - {item}
                            </S.Text>
                        ))}
                    </STYLE.ColumnWrapper>

                    <STYLE.ColumnWrapper>
                        <S.Title>🛠️ {t('mainPage.Apps')}</S.Title>

                        {apps.map((item, i) => (
                            <S.Text key={i} paddingLeft={16}>
                                - {item}
                            </S.Text>
                        ))}
                    </STYLE.ColumnWrapper>
                </S.SkillsWrapper>
            </S.Container>

            {/* ------------------------------------------------------------- */}

            <S.TitleWrapper>
                <Title id="languages" scrollMargin={80}>
                    🌐 {t('header.Languages')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>{t('mainPage.Russian')}:</S.Title>

                    <S.Text>{t('mainPage.Native')}</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>{t('mainPage.Polish')}:</S.Title>

                    <S.Text>{t('mainPage.Advanced')}</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>{t('mainPage.English')}:</S.Title>

                    <S.Text>{t('mainPage.Limited working proficiency')}</S.Text>
                </STYLE.FlexAlignCenterWrapper>
            </S.Container>

            {/* ------------------------------------------------------------- */}

            <S.TitleWrapper>
                <Title id="qualities" scrollMargin={80}>
                    🤹‍♂️ {t('mainPage.Qualities')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                {qualities.map((item, i) => (
                    <S.Text key={i}>- {item}</S.Text>
                ))}
            </S.Container>
        </STYLE.PageWrapper>
    );
};
