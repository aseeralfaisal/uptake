/* eslint-disable */
export default {
	displayName: 'date-range-picker',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/date-range-picker'
};