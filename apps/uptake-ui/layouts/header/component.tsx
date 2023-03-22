import * as Tooltip from '@radix-ui/react-tooltip';

import Icon from '@uptake-ui-icons';
import { IconButtonComponent } from '@uptake-ui-icon-button';

import HeaderMessageTriggerComponent from '@layouts/header/components/message-trigger/component';
import HeaderNotificationTriggerComponent from '@layouts/header/components/notification-trigger/component';
import HeaderProfileTrigger from '@layouts/header/components/profile-trigger/component';
import HeaderSupportComponent from '@layouts/header/components/support/component';
import Logo from '@components/logo/logo.component';
import SearchBar from '@layouts/header/components/search-bar/component';
import TrialsRemainingTrigger from '@layouts/header/components/trials-remaining-trigger/component';

import { hideMenuState } from '@modules/exams/stores/export-hidemenu.store';

import * as StyledComponents from './styles';

export default function HeaderComponent() {
    const toggleHideMenu = hideMenuState(({ toggleHideMenu }) => toggleHideMenu);
    const hideMenu = hideMenuState(({ hideMenu }) => hideMenu);

    return (
        <StyledComponents.Container>
            <StyledComponents.LeftPanel>
                <IconButtonComponent
                    color='gray'
                    icon={<Icon.Menu />}
                    onClick={toggleHideMenu}
                    size='md'
                    soft
                    title={hideMenu ? 'Show main menu' : 'Hide main menu'}
                />
                <Logo />
            </StyledComponents.LeftPanel>

            <StyledComponents.MiddlePanel>
                <SearchBar />
            </StyledComponents.MiddlePanel>

            <Tooltip.Provider>
                <StyledComponents.RightPanel>
                    <TrialsRemainingTrigger day={5} />
                    <HeaderMessageTriggerComponent />
                    <HeaderNotificationTriggerComponent />
                    <HeaderSupportComponent />
                    <HeaderProfileTrigger />
                </StyledComponents.RightPanel>
            </Tooltip.Provider>
        </StyledComponents.Container>
    );
}
