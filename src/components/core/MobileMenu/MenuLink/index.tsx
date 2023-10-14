import React, { FC } from 'react';
import { observer } from 'mobx-react';

import { useRootStore } from 'stores/initStore';

import * as T from './types';
import * as S from './units';

export const MenuLink: FC<T.IMenuLink> = observer((props) => {
    const { commonStore } = useRootStore();

    return (
        <S.LinkStyled
            href={`#${props.url}`}
            isLight={commonStore.isLight}
            onClick={() => commonStore.setMenuOpen(false)}
        >
            {props.children}
        </S.LinkStyled>
    );
});
