import React from 'react';

import { Title } from 'components/other';

import * as STYLE from '../units';

import photo from './images/photo.jpg';
import * as S from './units';

export const MainPage = () => {
    return (
        <STYLE.PageWrapper>
            <S.TitleWrapper>
                <S.TitleStyled>Igor Shyian</S.TitleStyled>

                <S.SubTitle>{`(middle frontend developer)`}</S.SubTitle>
            </S.TitleWrapper>

            <S.TitleWrapper>
                <Title scrollMargin={80}>👋🏻 About</Title>
            </S.TitleWrapper>

            <S.Container>
                <STYLE.ColumnWrapper>
                    <S.Photo src={photo} />

                    <STYLE.ColumnWrapper>
                        <STYLE.FlexAlignCenterWrapper>
                            <S.Title>Date of birth:</S.Title>

                            <S.Text>15.03.2000</S.Text>
                        </STYLE.FlexAlignCenterWrapper>

                        <STYLE.FlexAlignCenterWrapper>
                            <S.Title>Address:</S.Title>

                            <S.Text> Warsaw, Poland</S.Text>
                        </STYLE.FlexAlignCenterWrapper>

                        <S.Title>I have a permanent residence card in Poland</S.Title>
                    </STYLE.ColumnWrapper>
                </STYLE.ColumnWrapper>
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
                    IGOR SHYIAN
                </S.Link>
            </S.Container>

            <S.TitleWrapper>
                <Title id="contacts" scrollMargin={80}>
                    ☎️ Contacts
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>Phone number:</S.Title>

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
                        Igor Shyian
                    </S.Link>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>LinkedIn:</S.Title>

                    <S.Link
                        href="https://www.linkedin.com/in/igor-shyian-05097b20a/"
                        target="_blanck"
                        rel="noopener noreferrer"
                    >
                        Igor Shyian
                    </S.Link>
                </STYLE.FlexAlignCenterWrapper>
            </S.Container>

            <S.TitleWrapper>
                <Title id="experience" scrollMargin={80}>
                    {`💼 Experience (3 years)`}
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.ExperienceTitle>{`1) Waves ecosystem (01.03.2022 - 30.09.2023)`}</S.ExperienceTitle>

                <S.ExperienceTitle>{`2) Hivex  (01.03.2022 - 01.03.2023)`}</S.ExperienceTitle>

                <S.ExperienceTitle>{`3) Freelance (01.01.2020 - 31.01.2022)`}</S.ExperienceTitle>
            </S.Container>

            <S.TitleWrapper>
                <Title id="education" scrollMargin={80}>
                    🎓 Education
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.Title>Siedlce University of Natural Sciences and Humanities</S.Title>

                <S.Text>{`October 2017 - February 2021 (Bachelor's Degree)`}</S.Text>

                <S.Text>
                    {`The topic of engineering work: "Model of the intelligent voice assistant and its
                    implementation in python"`}
                </S.Text>
            </S.Container>

            <S.TitleWrapper>
                <Title id="skills" scrollMargin={80}>
                    ✨ Skills
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <STYLE.FlexAlignCenterWrapper gap={100} isCenter={false} fullWidth>
                    <STYLE.ColumnWrapper>
                        <S.Title>🌟 Hard skills</S.Title>

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
                        <S.Title>⭐ Soft skills</S.Title>

                        <S.Text paddingLeft={16}>- Communication skills</S.Text>

                        <S.Text paddingLeft={16}>- Problem-solving skills</S.Text>

                        <S.Text paddingLeft={16}>- Adaptability</S.Text>

                        <S.Text paddingLeft={16}>- Critical thinking</S.Text>

                        <S.Text paddingLeft={16}>- Teamwork</S.Text>

                        <S.Text paddingLeft={16}>- Stress tolerance</S.Text>

                        <S.Text paddingLeft={16}>- Strategic thinking</S.Text>

                        <S.Text paddingLeft={16}>- Learning and self-improvement ability</S.Text>

                        <S.Text paddingLeft={16}>- Attention to details</S.Text>

                        <S.Text paddingLeft={16}>
                            - Ability to explain complex concepts in simple terms
                        </S.Text>

                        <S.Text paddingLeft={16}>- Documentation and reporting skills</S.Text>

                        <S.Text paddingLeft={16}>
                            - Ability to work with various technologies and systems
                        </S.Text>

                        <S.Text paddingLeft={16}>
                            - Listening and understanding user requirements
                        </S.Text>

                        <S.Text paddingLeft={16}>{`- I can google :)`}</S.Text>
                    </STYLE.ColumnWrapper>

                    <STYLE.ColumnWrapper>
                        <S.Title>🛠️ Apps</S.Title>

                        <S.Text paddingLeft={16}>- JIRA</S.Text>

                        <S.Text paddingLeft={16}>- Confluence</S.Text>

                        <S.Text paddingLeft={16}>- Google Workspace</S.Text>

                        <S.Text paddingLeft={16}>- Microsoft Word</S.Text>

                        <S.Text paddingLeft={16}>- Figma</S.Text>

                        <S.Text paddingLeft={16}>- Postman</S.Text>

                        <S.Text paddingLeft={16}>- PyCharm</S.Text>

                        <S.Text paddingLeft={16}>- VSCode</S.Text>
                    </STYLE.ColumnWrapper>
                </STYLE.FlexAlignCenterWrapper>
            </S.Container>

            <S.TitleWrapper>
                <Title id="languages" scrollMargin={80}>
                    🌐 Languages
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>Russian:</S.Title>

                    <S.Text>Native</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>Polish:</S.Title>

                    <S.Text>Advanced</S.Text>
                </STYLE.FlexAlignCenterWrapper>

                <STYLE.FlexAlignCenterWrapper>
                    <S.Title>English:</S.Title>

                    <S.Text>
                        {`Limited working proficiency (free reading of documentation, writing
                        comments, pre-intermediate)`}
                    </S.Text>
                </STYLE.FlexAlignCenterWrapper>
            </S.Container>

            <S.TitleWrapper>
                <Title id="qualities" scrollMargin={80}>
                    🤹‍♂️ Personal qualities
                </Title>
            </S.TitleWrapper>

            <S.Container>
                <S.Text>- Desire for continuous self-improvement</S.Text>

                <S.Text>- Results-oriented</S.Text>

                <S.Text>- Systems thinking</S.Text>

                <S.Text>- Flexibility and adaptability to changes</S.Text>

                <S.Text>- Responsibility and reliability</S.Text>

                <S.Text>- Creativity in finding solutions</S.Text>

                <S.Text>- Attention to details</S.Text>

                <S.Text>- Analytical mindset</S.Text>

                <S.Text>- Ability to understand new technologies and systems</S.Text>
            </S.Container>
        </STYLE.PageWrapper>
    );
};
