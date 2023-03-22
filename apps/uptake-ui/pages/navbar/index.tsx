import Logo from '@components/logo/logo.component';
import { NavbarComponent } from '@uptake-ui-navbar';
import { HeaderComponent } from '@layouts/header';

export function NavbarPage() {
	return (
		<div
			style={{
				backgroundColor: 'var(--color-gray-50)',
				display: 'grid',
				gridTemplateColumns: '280px calc(100% - 280px)',
				width: '100%'
			}}
		>
			<NavbarComponent logo={<Logo />} />

			<div
                style={{
                    alignItems: 'flex-start',
                    backgroundColor: 'var(--color-gray-50)',
                    display: 'flex',
                    justifyContent: 'stretch',
                    width: '100%'
                }}
            >
				<HeaderComponent />
			</div>
		</div>
	);
}

export default NavbarPage;
