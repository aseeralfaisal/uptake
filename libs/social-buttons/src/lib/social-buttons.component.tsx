import Link from 'next/link';
import React, { Fragment, Ref, forwardRef } from 'react';

import type { SocialButtonProps } from './social-buttons.types';
import {
	StyledIconButton,
	StyledIconButtonText,
	StyledIconButtonContainer,
	StyledIconContainer
} from './social-buttons.styles';

import FacebookIcon from './facebook-Icon';
import GoogleIcon from './google-Icon';
import FigmaIcon from './figma-Icon';
import TwitterIcon from './twitter-Icon';
import DribbleIcon from './dribble-Icon';
import AppleIcon from './apple-Icon';

export const SocialButtonComponent = forwardRef<HTMLAnchorElement | HTMLButtonElement, SocialButtonProps>(
	(props: SocialButtonProps, forwardedRef: Ref<HTMLAnchorElement | HTMLButtonElement>) => {
		const {
			color = 'google',

			outlined = false,
			plain = false,
			shallow,
			buttonText,
			soft = false,
			StartIcon,
			startIconClass,
			socialIcon
		} = props;

		const disabled = props.disabled;

		return props.href ? (
			<Link passHref href={props.href} shallow={shallow}>
				<StyledIconButton
					as='a'
					color={color}
					css={{ pointerEvents: disabled ? 'none' : 'all' }}
					outlined={outlined}
					plain={plain}
					ref={forwardedRef as Ref<HTMLAnchorElement>}
					soft={soft}
					onClick={
						disabled
							? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
									e.preventDefault();
							  }
							: props.onClick
					}
				>
					<StyledIconButtonText>
						<StyledIconButtonContainer>
							{socialIcon == 'facebook' && (
								<StyledIconContainer>
									{' '}
									<FacebookIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'apple' && (
								<StyledIconContainer>
									{' '}
									<AppleIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'figma' && (
								<StyledIconContainer>
									{' '}
									<FigmaIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'twitter' && (
								<StyledIconContainer>
									{' '}
									<TwitterIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'dribble' && (
								<StyledIconContainer>
									{' '}
									<DribbleIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'google' && (
								<StyledIconContainer>
									{' '}
									<GoogleIcon />
								</StyledIconContainer>
							)}

							{!startIconClass && <StyledIconButtonText>{buttonText}</StyledIconButtonText>}
						</StyledIconButtonContainer>
					</StyledIconButtonText>
				</StyledIconButton>
			</Link>
		) : (
			<StyledIconButton
				as='button'
				color={color}
				disabled={disabled}
				outlined={outlined}
				plain={plain}
				ref={forwardedRef as Ref<HTMLButtonElement>}
				soft={soft}
				onClick={
					disabled
						? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
								e.preventDefault();
						  }
						: props.onClick
				}
			>
				<StyledIconButtonText>
					{buttonText && (
						<StyledIconButtonContainer>
							{socialIcon == 'facebook' && (
								<StyledIconContainer>
									{' '}
									<FacebookIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'apple' && (
								<StyledIconContainer>
									{' '}
									<AppleIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'figma' && (
								<StyledIconContainer>
									{' '}
									<FigmaIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'twitter' && (
								<StyledIconContainer>
									{' '}
									<TwitterIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'dribble' && (
								<StyledIconContainer>
									{' '}
									<DribbleIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'google' && (
								<StyledIconContainer>
									{' '}
									<GoogleIcon />
								</StyledIconContainer>
							)}

							{buttonText && <StyledIconButtonText>{buttonText}</StyledIconButtonText>}
						</StyledIconButtonContainer>
					)}
					{!buttonText && (
						<StyledIconButtonContainer>
							{socialIcon == 'facebook' && (
								<StyledIconContainer>
									{' '}
									<FacebookIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'apple' && (
								<StyledIconContainer>
									{' '}
									<AppleIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'figma' && (
								<StyledIconContainer>
									{' '}
									<FigmaIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'twitter' && (
								<StyledIconContainer>
									{' '}
									<TwitterIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'dribble' && (
								<StyledIconContainer>
									{' '}
									<DribbleIcon />
								</StyledIconContainer>
							)}
							{socialIcon == 'google' && (
								<StyledIconContainer>
									{' '}
									<GoogleIcon />
								</StyledIconContainer>
							)}
						</StyledIconButtonContainer>
					)}
				</StyledIconButtonText>
			</StyledIconButton>
		);
	}
);

export default SocialButtonComponent;
