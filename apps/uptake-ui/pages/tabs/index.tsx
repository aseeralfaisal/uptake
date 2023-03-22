import { TabComponent } from '@uptake-ui-tabs';

export default function TabsPage() {
	return (
		<div
			style={{
				display: 'grid',
				gap: '30px',
				gridTemplateColumns: 'repeat(1, 1fr)',
				margin: '50px auto',
				width: '1080px'
			}}
		>
			<TabComponent color='primary' soft size='sm'/>
			<TabComponent color='gray' soft size='sm'/>

            <TabComponent color='primary' bordered size='sm'/>
            <TabComponent color='gray' bordered size='sm'/>

            <TabComponent color='primary' bordered size='sm' soft/>
            <TabComponent color='gray' bordered size='sm' soft/>

            <TabComponent centered color='primary' soft size='sm'/>
            <TabComponent centered color='gray' soft size='sm'/>

            <TabComponent centered color='primary' bordered size='sm'/>
            <TabComponent centered color='gray' bordered size='sm'/>

            <TabComponent centered color='primary' bordered size='sm' soft/>
            <TabComponent centered color='gray' bordered size='sm' soft/>

            <TabComponent color='primary' soft size='md'/>
            <TabComponent color='gray' soft size='md'/>

            <TabComponent color='primary' bordered size='md'/>
            <TabComponent color='gray' bordered size='md'/>

            <TabComponent color='primary' bordered size='md' soft/>
            <TabComponent color='gray' bordered size='md' soft/>

            <TabComponent centered color='primary' soft size='md'/>
            <TabComponent centered color='gray' soft size='md'/>

            <TabComponent centered color='primary' bordered size='md'/>
            <TabComponent centered color='gray' bordered size='md'/>

            <TabComponent centered color='primary' bordered size='md' soft/>
            <TabComponent centered color='gray' bordered size='md' soft/>
		</div>
	);
}
