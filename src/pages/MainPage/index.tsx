import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from 'components/other';

import * as STYLE from '../units';

import photo from './images/photo.jpg';
import * as S from './units';

export const MainPage = () => {
    const { t } = useTranslation();

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

            <S.Container>
                <S.ExperienceTitle>{`1) Waves ecosystem (01.03.2022 - 30.09.2023)`}</S.ExperienceTitle>

                <S.Text>{t('mainPage.WavesDescription')}</S.Text>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Position')}:</S.Title>

                    <S.Text>Frontend Developer (React, middle+)</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper marginTop={20}>
                    <S.Title>{t('mainPage.Team')}:</S.Title>

                    <S.Text>2BE, 2FE, 2QA, 2PM, 1 devops, 1 disigner</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <S.Title marginTop={20}>{t('mainPage.Responsibilities')}:</S.Title>

                <S.Text paddingLeft={16}>- {t('mainPage.legacy code refactoring')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.conducting a code review')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.creating reusable components')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.creating new projects')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.architecture planning')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.worked with RESTful')}</S.Text>

                <S.Text paddingLeft={16}>
                    - {t('mainPage.adaptive design and cross-browser')}
                </S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.worked closely with designer')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.blockchain connection logic')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.bug fixes')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.writing readable code')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.writing code comments')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.pixel-perfect layouting')}</S.Text>

                <S.Title marginTop={20}>{t('mainPage.Projects')}:</S.Title>

                <S.Link href="https://swop.fi" target="_blanck" rel="noopener noreferrer">
                    SWOP.FI
                </S.Link>

                <S.Text>{t('mainPage.SwopfiDescription')}</S.Text>

                <S.Link href="https://axly.io" target="_blanck" rel="noopener noreferrer">
                    AXLY.IO & APP.AXLY.IO
                </S.Link>

                <S.Text>{t('mainPage.AxlyDescription')}</S.Text>

                <S.ExperienceTitle
                    marginTop={40}
                >{`2) Hivex  (01.02.2021 - 31.01.2022)`}</S.ExperienceTitle>

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

                <S.Text paddingLeft={16}>- {t('mainPage.legacy code refactoring')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.creating reusable components')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.code review of junior')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.bug fixes')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.worked with RESTful')}</S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.worked closely with designer')}</S.Text>

                <S.ExperienceTitle
                    marginTop={40}
                >{`3) Freelance (01.01.2020 - 31.01.2021, 30.09.2023 - now)`}</S.ExperienceTitle>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>{t('mainPage.Position')}:</S.Title>

                    <S.Text>Frontend Developer (React)</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <S.Title marginTop={20}>{t('mainPage.Projects')}:</S.Title>

                <S.Link href="https://0xshadow.com/" target="_blanck" rel="noopener noreferrer">
                    0xshadow.com
                </S.Link>

                <S.Link
                    href="https://merchant.kyt-pay.com/"
                    target="_blanck"
                    rel="noopener noreferrer"
                >
                    merchant.kyt-pay.com
                </S.Link>

                <S.Link href="https://app.rivo.xyz/" target="_blanck" rel="noopener noreferrer">
                    app.rivo.xyz
                </S.Link>

                <S.Title marginTop={20}>{t('mainPage.Responsibilities')}:</S.Title>

                <S.Text paddingLeft={16}>- {t('mainPage.worked as a freelancer')}</S.Text>

                <S.Text paddingLeft={16}>
                    - {t('mainPage.developed user interfaces for online stores')}
                </S.Text>

                <S.Text paddingLeft={16}>
                    - {t('mainPage.conducted analysis and optimization')}
                </S.Text>

                <S.Text paddingLeft={16}>
                    - {t('mainPage.developed user interfaces using React.js')}
                </S.Text>

                <S.Text paddingLeft={16}>
                    - {t('mainPage.integrated third-party APIs and libraries')}
                </S.Text>

                <S.Text paddingLeft={16}>- {t('mainPage.worked with clients')}</S.Text>

                <S.Text paddingLeft={16}>
                    -{' '}
                    {t(
                        'mainPage.solved problems related to adaptive design and cross-browser compatibility',
                    )}
                </S.Text>
            </S.Container>

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

            <S.TitleWrapper>
                <Title id="skills" scrollMargin={80}>
                    ✨ {t('header.Skills')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.SkillsWrapper>
                    <STYLE.ColumnWrapper>
                        <S.Title>🌟 {t('mainPage.Hard skills')}</S.Title>

                        <S.Text paddingLeft={16}>- JavaScript ES6</S.Text>

                        <S.Text paddingLeft={16}>- TypeScript</S.Text>

                        <S.Text paddingLeft={16}>- React.js</S.Text>

                        <S.Text paddingLeft={16}>- Next.js</S.Text>

                        <S.Text paddingLeft={16}>- Redux</S.Text>

                        <S.Text paddingLeft={16}>- MobX</S.Text>

                        <S.Text paddingLeft={16}>- CSS-in-JS</S.Text>

                        <S.Text paddingLeft={16}>- preprocessors</S.Text>

                        <S.Text paddingLeft={16}>- REST API</S.Text>

                        <S.Text paddingLeft={16}>- Bootstrap</S.Text>

                        <S.Text paddingLeft={16}>- MUI</S.Text>

                        <S.Text paddingLeft={16}>- Git</S.Text>

                        <S.Text paddingLeft={16}>- Webpack</S.Text>

                        <S.Text paddingLeft={16}>- PWA</S.Text>

                        <S.Text paddingLeft={16}>- WebSockets</S.Text>

                        <S.Text paddingLeft={16}>- Docker</S.Text>

                        <S.Text paddingLeft={16}>- DRY, KISS</S.Text>

                        <S.Text paddingLeft={16}>- Сharts in React</S.Text>
                    </STYLE.ColumnWrapper>

                    <STYLE.ColumnWrapper>
                        <S.Title>⭐ {t('mainPage.Soft skills')}</S.Title>

                        <S.Text paddingLeft={16}>- {t('mainPage.Communication skills')}</S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Problem-solving skills')}</S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Adaptability')}</S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Critical thinking')}</S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Teamwork')}</S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Stress tolerance')}</S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Strategic thinking')}</S.Text>

                        <S.Text paddingLeft={16}>
                            - {t('mainPage.Learning and self-improvement ability')}
                        </S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.Attention to details')}</S.Text>

                        <S.Text paddingLeft={16}>
                            - {t('mainPage.Ability to explain complex concepts in simple terms')}
                        </S.Text>

                        <S.Text paddingLeft={16}>
                            - {t('mainPage.Documentation and reporting skills')}
                        </S.Text>

                        <S.Text paddingLeft={16}>
                            - {t('mainPage.Ability to work with various technologies and systems')}
                        </S.Text>

                        <S.Text paddingLeft={16}>
                            - {t('mainPage.Listening and understanding user requirements')}
                        </S.Text>

                        <S.Text paddingLeft={16}>- {t('mainPage.I can google')}</S.Text>
                    </STYLE.ColumnWrapper>

                    <STYLE.ColumnWrapper>
                        <S.Title>🛠️ {t('mainPage.Apps')}</S.Title>

                        <S.Text paddingLeft={16}>- JIRA</S.Text>

                        <S.Text paddingLeft={16}>- Confluence</S.Text>

                        <S.Text paddingLeft={16}>- Google Workspace</S.Text>

                        <S.Text paddingLeft={16}>- Microsoft Word</S.Text>

                        <S.Text paddingLeft={16}>- Figma</S.Text>

                        <S.Text paddingLeft={16}>- Postman</S.Text>

                        <S.Text paddingLeft={16}>- PyCharm</S.Text>

                        <S.Text paddingLeft={16}>- VSCode</S.Text>
                    </STYLE.ColumnWrapper>
                </S.SkillsWrapper>
            </S.Container>

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

            <S.TitleWrapper>
                <Title id="qualities" scrollMargin={80}>
                    🤹‍♂️ {t('mainPage.Qualities')}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.Text>- {t('mainPage.Desire for continuous self-improvement')}</S.Text>

                <S.Text>- {t('mainPage.Results-oriented')}</S.Text>

                <S.Text>- {t('mainPage.Flexibility and adaptability to changes')}</S.Text>

                <S.Text>- {t('mainPage.Responsibility and reliability')}</S.Text>

                <S.Text>- {t('mainPage.Creativity in finding solutions')}</S.Text>

                <S.Text>- {t('mainPage.Analytical mindset')}</S.Text>

                <S.Text>
                    - {t('mainPage.Ability to understand new technologies and systems')}
                </S.Text>
            </S.Container>
        </STYLE.PageWrapper>
    );
};
