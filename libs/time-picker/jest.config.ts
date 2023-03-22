/* eslint-disable */
export default {
	displayName: 'time-picker',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/time-picker'
};
