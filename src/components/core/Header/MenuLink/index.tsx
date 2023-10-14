import React, { FC } from 'react';
import { observer } from 'mobx-react';

import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const MenuLink: FC<T.IMenuLink> = observer((props) => {
    const { commonStore } = useRootStore();

    return (
        <a href={`#${props.url}`}>
            <S.ChipStyled isLight={commonStore.isLight} isCircle>
                {props.children}
            </S.ChipStyled>
        </a>
    );
});
