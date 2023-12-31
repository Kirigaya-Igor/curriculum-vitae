import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { Language, Nullable } from 'types/common';

import { Expand, PivotArrow } from 'components/other';

import { useBlockBodyScroll, useDeviceType, useMountEffect, useOutsideClick } from 'hooks';
import { useRootStore } from 'stores/initStore';

import { LanguageIconWrapper, LanguageItemWrapper, LanguageText } from '../Header/units';

import { ReactComponent as EnSVG } from '../Header/images/en-icon.svg';
import { ReactComponent as MoonSVG } from '../Header/images/moon-icon.svg';
import { ReactComponent as PlSVG } from '../Header/images/pl-icon.svg';
import { ReactComponent as RuSVG } from '../Header/images/ru-icon.svg';
import { ReactComponent as SunSVG } from '../Header/images/sun-icon.svg';

import { MenuLink } from './MenuLink';
import * as S from './units';

const languagesOptions = [
    { value: Language.EN, title: 'English', icon: <EnSVG /> },
    { value: Language.PL, title: 'Polski', icon: <PlSVG /> },
    { value: Language.RU, title: 'Русский', icon: <RuSVG /> },
];

export const MobileMenu = observer(() => {
    const { commonStore } = useRootStore();

    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const menuRef = useRef(null);
    const burgerRef = useRef<Nullable<HTMLElement>>(null);

    const {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation();

    useOutsideClick(menuRef, commonStore.isMenuOpen, commonStore.setMenuOpen, burgerRef);

    useBlockBodyScroll(commonStore.isMenuOpen);

    const { isMobile } = useDeviceType();

    useMountEffect(() => {
        burgerRef.current = document.getElementById('burgerMenuButton');
    });

    useEffect(() => {
        !isMobile && commonStore.setMenuOpen(false);
    }, [isMobile]);

    const languageHandler = (lang: Language) => {
        changeLanguage(lang);

        setLanguageDropdownOpen(false);

        commonStore.setMenuOpen(false);
    };

    return (
        <S.Wrapper isOpen={commonStore.isMenuOpen}>
            <Expand isOpen={commonStore.isMenuOpen}>
                <S.ExpandContent ref={menuRef}>
                    <S.LinksWrapper isLight={commonStore.isLight}>
                        <MenuLink url="root">{t('header.About')}</MenuLink>

                        <MenuLink url="github">GitHub</MenuLink>

                        <MenuLink url="contacts">{t('header.Contacts')}</MenuLink>

                        <MenuLink url="experience">{t('header.Experience')}</MenuLink>

                        <MenuLink url="education">{t('header.Education')}</MenuLink>

                        <MenuLink url="skills">{t('header.Skills')}</MenuLink>

                        <MenuLink url="languages">{t('header.Languages')}</MenuLink>

                        <MenuLink url="qualities">{t('header.Qualities')}</MenuLink>
                    </S.LinksWrapper>

                    <S.LanguagesWrapper isLight={commonStore.isLight}>
                        <S.SwitchWrapper onClick={commonStore.toggleTheme}>
                            <S.SwitchName>{t('mobileMenu.Switch theme')}</S.SwitchName>

                            <S.SwitchStyled
                                isActive={commonStore.isLight}
                                icon={commonStore.isLight ? <SunSVG /> : <MoonSVG />}
                            />
                        </S.SwitchWrapper>

                        <S.LanguageToggleWrapper
                            onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
                        >
                            <S.SwitchName>{t('mobileMenu.Change language')}</S.SwitchName>

                            <PivotArrow
                                isActive={isLanguageDropdownOpen}
                                isReverse={isLanguageDropdownOpen}
                            />
                        </S.LanguageToggleWrapper>

                        <Expand isOpen={isLanguageDropdownOpen}>
                            <S.LanguagesBlock>
                                {languagesOptions.map((item, index) => (
                                    <LanguageItemWrapper
                                        key={index}
                                        isLight={commonStore.isLight}
                                        isActiveItem={item.value === language}
                                        onClick={() => languageHandler(item.value)}
                                    >
                                        <LanguageIconWrapper>{item.icon}</LanguageIconWrapper>

                                        <LanguageText>{item.title}</LanguageText>
                                    </LanguageItemWrapper>
                                ))}
                            </S.LanguagesBlock>
                        </Expand>
                    </S.LanguagesWrapper>
                </S.ExpandContent>
            </Expand>
        </S.Wrapper>
    );
});
