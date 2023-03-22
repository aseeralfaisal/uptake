import React from 'react';

import { RadioGroup } from '@headlessui/react';

import Icon from '@uptake-ui-icons';

import { useExportExamsStore } from '@modules/exams/stores/export-exams.store';

const extensions = [
	{
		icon: Icon.CSV,
		name: 'CSV'
	},
	{
		icon: Icon.Excel,
		name: 'Excel'
	}
];

const ExportExamsExtensionContainer: React.FC = () => {
	const { extension, updateExtension } = useExportExamsStore((state) => state);

	return (
		<div style={{ width: '100%' }}>
			<div
				style={{
					display: 'inline-block',
					width: '100%'
				}}
			>
				<RadioGroup
					value={extension}
					onChange={(extension) => updateExtension(extension)}
					style={{
						width: '100%',
						display: 'grid',
						gridTemplateColumns: 'repeat(1, 1fr)',
						gap: 16
					}}
				>
					<RadioGroup.Label
						style={{
							color: 'var(--color-gray-800)',
							fontSize: 16,
							fontWeight: 500,
							lineHeight: '24px'
						}}
					>
						Select file type
					</RadioGroup.Label>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
						{extensions.map((extension) => (
							<RadioGroup.Option key={extension.name} value={extension.name}>
								{({ active, checked }) => (
									<>
										<div
											style={{
												border: '1px solid var(--color-gray-200)',
												borderRadius: 8,
												padding: '0 16px',
												display: 'grid',
												gridTemplateColumns: 'repeat(1, 1fr)',
												position: 'relative',
												height: 130,
												cursor: 'pointer',
												boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
												borderColor: checked
													? 'var(--color-primary-500)'
													: 'var(--color-gray-200)',
												transition: 'all .2s ease-in-out'
											}}
										>
											{checked && (
												<div
													style={{
														backgroundColor: 'var(--color-primary-600)',
														border: '1px solid var(--color-primary-700)',
														color: 'var(--color-white)',
														width: 20,
														height: 20,
														borderRadius: 10,
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														padding: 2,
														position: 'absolute',
														right: 16,
														top: 16
													}}
												>
													<Icon.Check />
												</div>
											)}
											{!checked && (
												<div
													style={{
														backgroundColor: 'var(--color-white)',
														border: '1px solid var(--color-gray-200)',
														color: 'var(--color-gray-500)',
														width: 20,
														height: 20,
														borderRadius: 10,
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														padding: 2,
														position: 'absolute',
														right: 16,
														top: 16
													}}
												></div>
											)}
											<div
												style={{
													width: '100%',
													marginTop: 20,
													textAlign: 'center',
													alignItems: 'center',
													display: 'flex',
													justifyContent: 'center'
												}}
											>
												<div
													style={{
														display: 'flex',
														flexDirection: 'column',
														gap: 12,
														alignItems: 'center'
													}}
												>
													<div
														style={{
															alignItems: 'center',
															backgroundColor: 'var(--color-primary-100)',
															borderRadius: '100%',
															boxShadow:
																'0 0 0 rgba(16, 24, 40, 0.05), 0 0 0 8px var(--color-primary-50)',
															color: 'var(--color-primary-600)',
															display: 'flex',
															height: 48,
															justifyContent: 'center',
															width: 48
														}}
													>
														{React.createElement(extension.icon)}
													</div>
													<div>
														<RadioGroup.Label
															as='p'
															style={{
																color: 'var(--color-gray-700)',
																fontSize: 14,
																fontWeight: 500,
																lineHeight: '20px'
															}}
														>
															{extension.name}
														</RadioGroup.Label>
													</div>
												</div>
											</div>
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
		</div>
	);
};

export default ExportExamsExtensionContainer;
