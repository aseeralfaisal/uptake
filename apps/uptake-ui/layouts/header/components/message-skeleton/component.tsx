import * as StyledComponents from './styles';

export default function HeaderMessageSkeletonComponent() {
	return (
		<StyledComponents.Skeleton>
			<StyledComponents.SkeletonAvatar></StyledComponents.SkeletonAvatar>
			<StyledComponents.SkeletonContent>
				<StyledComponents.SkeletonTitle></StyledComponents.SkeletonTitle>
				<StyledComponents.SkeletonMessage></StyledComponents.SkeletonMessage>
				<StyledComponents.SkeletonTime></StyledComponents.SkeletonTime>
			</StyledComponents.SkeletonContent>
		</StyledComponents.Skeleton>
	);
}
