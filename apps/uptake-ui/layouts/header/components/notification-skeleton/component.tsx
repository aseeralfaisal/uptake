import * as StyledComponents from './styles';

export default function HeaderNotificationSkeletonComponent() {
	return (
		<StyledComponents.Skeleton>
			<StyledComponents.SkeletonAvatar></StyledComponents.SkeletonAvatar>
			<StyledComponents.SkeletonContent>
				<StyledComponents.SkeletonTitle></StyledComponents.SkeletonTitle>
				<StyledComponents.SkeletonTime></StyledComponents.SkeletonTime>
			</StyledComponents.SkeletonContent>
		</StyledComponents.Skeleton>
	);
}
