import ExamActionsContainer from "@modules/exams/application/exams-actions/container";
import ExamTableTitleCellContainer from "@modules/exams/application/exams-table-title-cell/container";
import { createColumnHelper } from "@tanstack/react-table";
import { AvatarGroupComponent } from "@uptake-ui-avatar-group";
import { CheckboxComponent } from "@uptake-ui-checkbox";
import { ChipComponent } from "@uptake-ui-chip";
import { DateTimeUtils, StringUtils } from "@uptake-ui-utils";
import * as StyledComponents from './exams.styles';

export const generateColums = (
    allChecked: boolean,
    onAllCheckedChange: (v: boolean) => void,
    onEditClick: (v: string) => void,
    onDeleteClick: (v: string) => void,
) => {
    const columnHelper = createColumnHelper<OverviewTableData>();

    return [
        columnHelper.accessor('check', {
            id: 'check',
            size: 20,
            cell: (info) => <CheckboxComponent checked={info.getValue()} id='c2' onChange={(e) => console.log(e)} />,
            header: () => <CheckboxComponent checked={allChecked} id='c2' onChange={(e) => onAllCheckedChange(e)} />
        }),
        columnHelper.accessor('name', {
            id: 'name',
            size: 250,
            cell: (info) => (
                <ExamTableTitleCellContainer title={info.getValue().title} subtitle={info.getValue().subtitle} />
            ),
            header: () => <span>Name</span>
        }),
        columnHelper.accessor('privacy', {
            id: 'privacy',
            size: 80,
            header: () => <span>Privacy</span>,
            cell: (info) =>
                <ChipComponent color={info.getValue() === 'public' ? 'success' : 'primary'} size='sm'>
                    {StringUtils.upperFirst(info.getValue())}
                </ChipComponent>
        }),
        columnHelper.accessor('lastModified', {
            id: 'last modified',
            size: 80,
            header: () => <span>Last Modified</span>,
            cell: (info) =>
                <ExamTableTitleCellContainer title={DateTimeUtils.formatDate(info.getValue())} subtitle={DateTimeUtils.formatTime(info.getValue())} />
        }),
        columnHelper.accessor('questions', {
            id: 'questions',
            size: 80,
            header: () => <span>Questions</span>,
            cell: (info) => <StyledComponents.GrayText>{info.getValue()}</StyledComponents.GrayText>
        }),
        columnHelper.accessor('points', {
            id: 'points',
            size: 80,
            header: () => <span>Points</span>,
            cell: (info) => <StyledComponents.GrayText>{info.getValue()}</StyledComponents.GrayText>
        }),
        columnHelper.accessor('duration', {
            id: 'duration',
            size: 100,
            header: () => <span>Duration</span>,
            cell: (info) => <StyledComponents.GrayText>{info.getValue()}</StyledComponents.GrayText>
        }),
        columnHelper.accessor('editors', {
            id: 'editors',
            size: 120,
            header: () => <span>Editors</span>,
            cell: (info) => <AvatarGroupComponent add avatars={info.getValue()} color='gray' limit={3} size='sm' />
        }),
        columnHelper.accessor('created', {
            id: 'created',
            size: 100,
            header: () => <span>Date created</span>,
            cell: (info) =>
                <ExamTableTitleCellContainer title={DateTimeUtils.formatDate(info.getValue())} subtitle={DateTimeUtils.formatTime(info.getValue())} />
        }),
        columnHelper.accessor('actions', {
            id: 'actions',
            size: 160,
            cell: (info) => <ExamActionsContainer
                link={info.getValue().link}
                id={info.getValue().id}
                enabled={info.getValue().enabled}
                onDeleteClick={(e) => { onDeleteClick(info.getValue().id) }}
                onEditClick={(e) => { onEditClick(info.getValue().id) }}
            />,
            header: () => <span></span>
        })
    ];
}