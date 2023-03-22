import { styled } from '@stitches/react';

export const ProgressCircle = styled('div', {
	variants: {
		half: {
			true: {
				transform: 'rotate(270deg)'
			}
		},
		size: {
			xs: {
				'&:before': {
					content: '',
					position: 'absolute',
					height: '58px',
					width: '58px',
					backgroundColor: 'var(--color-white)',
					borderRadius: '50%'
				},

				height: '70px',
				width: '70px'
			},

			sm: {
				'&:before': {
					content: '',
					position: 'absolute',
					height: '104px',
					width: '104px',
					backgroundColor: 'var(--color-white)',
					borderRadius: '50%'
				},

				height: '144px',
				width: '144px'
			},

			md: {
				'&:before': {
					content: '',
					position: 'absolute',
					height: '140px',
					width: '140px',
					backgroundColor: 'var(--color-white)',
					borderRadius: '50%'
				},

				height: '180px',
				width: '180px'
			},
			lg: {
				'&:before': {
					content: '',
					position: 'absolute',
					height: '180px',
					width: '180px',
					backgroundColor: 'var(--color-white)',
					borderRadius: '50%'
				},

				height: '216px',
				width: '216px'
			},
			xl: {
				'&:before': {
					content: '',
					position: 'absolute',
					height: '210px',
					width: '210px',
					backgroundColor: 'var(--color-white)',
					borderRadius: '50%'
				},

				height: '252px',
				width: '252px'
			}
		}
	},

	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: '50%'
});

export const ProgressValue = styled('p', {
	variants: {
		half: {
			true: {
				transform: 'rotate(90deg)',
				marginLeft: '50px'
			}
		},
		size: {
			xs: {
				fontSize: '12px',
				lineHeight: '18px',
				marginLeft: '24px'
			},
			sm: {
				fontSize: '24px',
				lineHeight: '23px'
			},
			md: {
				fontSize: '30px',
				lineHeight: '38px'
			},
			lg: {
				fontSize: '36px',
				lineHeight: '44px'
			},
			xl: {
				fontSize: '48px',
				lineHeight: '60px'
			}
		}
	},
	position: 'relative',

	fontWeight: 500,
	color: 'var(--color-gray-900)'
});

export const ProgressCircleHalf = styled('div', {
	position: 'relative',
	margin: '4px',
	float: 'left',
	textAlign: 'center'
});

export const ProgressOverflowHalf = styled('div', {
	position: 'relative',

	overflow: 'hidden' /* Comment this line to understand the trick */,
	width: '100%',
	height: '50%' /* Half circle (overflow) */,
	marginBottom: '-14px'
});

export const ProgressBarHalf = styled('div', {
	position: 'absolute',
	top: 0,
	left: 0,

	width: '90px',
	height: '90px' /* full circle! */,
	borderRadius: '50%',
	boxSizing: 'border-box',
	border: '16px solid #eee' /* half gray, */,
	borderTopLeftRadius: '50px',
	borderBottomColor: 'var(--color-primary-700)' /* half azure */,
	borderLeftColor: 'var(--color-primary-700)'
});

export const UserTextContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
});

export const UserText = styled('p', {
	color: 'var(--color-gray-500)' /* half azure */,
	position: 'relative',

	variants: {
		half: {
			true: {
				transform: 'rotate(90deg)',
				marginLeft: '50px'
			}
		},
		size: {
			xs: {
				fontSize: '8px',
				lineHeight: '8px'
			},
			sm: {
				fontSize: '12px',
				lineHeight: '18px'
			},
			md: {
				fontSize: '12px',
				lineHeight: '18px'
			},
			lg: {
				fontSize: '14px',
				lineHeight: '20px'
			},
			xl: {
				fontSize: '14px',
				lineHeight: '20px'
			}
		}
	}
});
