import * as Tabs from '@radix-ui/react-tabs';

import * as StyledComponents from './styles';

import type { TabsProps } from './types';

export function TabComponent(props: TabsProps) {
	const { bordered = false, centered = false, contents = [], color = 'primary', size = 'sm', soft = false, titles } = props;

	return (
		<Tabs.Root defaultValue={titles[0]} orientation='vertical' activationMode='manual'>
			<StyledComponents.TabsList aria-label='tabs' bordered={bordered} centered={centered}>
				{titles.map((title: string, index: number) => {
					return (
						<StyledComponents.TabTrigger
							key={index}
							value={title}
							color={color}
							centered={centered}
							bordered={bordered}
							size={size}
							soft={soft}
						>
							{title}
						</StyledComponents.TabTrigger>
					);
				})}
			</StyledComponents.TabsList>

			{contents.map((content: JSX.Element, index: number) => {
				return (
					<StyledComponents.TabContent key={index} value={titles[index]}>
						{content}
					</StyledComponents.TabContent>
				);
			})}
		</Tabs.Root>
	);
}

export default TabComponent;
