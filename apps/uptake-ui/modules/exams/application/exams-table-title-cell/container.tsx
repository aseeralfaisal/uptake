import * as StyledComponents from './styles';

const ExamTableTitleCellContainer = (props) => {
    return (
        <StyledComponents.Wrapper >
            <span>{props.title}</span>
            <StyledComponents.Subtitle >{props.subtitle}</StyledComponents.Subtitle >
        </StyledComponents.Wrapper>
    )
}

export default ExamTableTitleCellContainer;