import Link from 'next/link';
import { createElement } from 'react';

import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';

import {
	AnalyticsIcon,
	DepartmentIcon,
	ExamIcon,
	MeetingIcon,
	OverviewIcon,
	PlusIcon,
	ProctorIcon,
	QuestionIcon,
	ReviewerIcon,
	SessionIcon,
	SurveyIcon,
	TeamIcon
} from '@uptake-ui-icons';

import * as Styled from './styles';

import Icon from '@uptake-ui-icons';

const menus = [
	{
		icon: Icon.Home,
		title: 'Home',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			}
		]
	},
	{
		icon: Icon.Dashboard,
		title: 'Dashboard',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			}
		]
	},
	{
		icon: Icon.Exam,
		title: 'Exams',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			},
			{
				icon: Icon.Analytics,
				path: 'https://google.com',
				title: 'Analytics'
			},
			{
				icon: Icon.Question,
				path: 'https://google.com',
				title: 'Questions'
			},
			{
				icon: Icon.Department,
				path: 'https://google.com',
				title: 'Departments'
			},
			{
				icon: Icon.Proctor,
				path: 'https://google.com',
				title: 'Proctors'
			},
			{
				icon: Icon.Reviewer,
				path: 'https://google.com',
				title: 'Reviews'
			}
		]
	},
	{
		icon: Icon.Session,
		title: 'Sessions',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			},
			{
				icon: Icon.Analytics,
				path: 'https://google.com',
				title: 'Analytics'
			},
			{
				icon: Icon.Question,
				path: 'https://google.com',
				title: 'Subjects'
			}
		]
	},
	{
		icon: Icon.Survey,
		title: 'Surveys',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			},
			{
				icon: Icon.Analytics,
				path: 'https://google.com',
				title: 'Analytics'
			}
		]
	},
	{
		icon: Icon.Meeting,
		title: 'Meetings',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			},
			{
				icon: Icon.Availability,
				path: 'https://google.com',
				title: 'Availability'
			},
			{
				icon: Icon.Booking,
				path: 'https://google.com',
				title: 'Bookings'
			},
			{
				icon: Icon.Flow,
				path: 'https://google.com',
				title: 'Workflows'
			}
		]
	},
	{
		icon: Icon.Builder,
		title: 'Builders',
		path: '',
		children: [
			{
				icon: Icon.Page,
				path: 'https://google.com',
				title: 'Start page'
			},
			{
				icon: Icon.Template,
				path: 'https://google.com',
				title: 'Templates'
			}
		]
	},
	{
		icon: Icon.Student,
		title: 'Students',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			}
		]
	},
	{
		icon: Icon.Payment,
		title: 'Payments',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			},
			{
				icon: Icon.Analytics,
				path: 'https://google.com',
				title: 'Analytics'
			}
		]
	},
	{
		icon: Icon.Team,
		title: 'Team',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			},
			{
				icon: Icon.Role,
				path: 'https://google.com',
				title: 'Roles'
			}
		]
	},
	{
		icon: Icon.Calendar,
		title: 'Calendar',
		path: '',
		children: [
			{
				icon: Icon.Overview,
				path: 'https://google.com',
				title: 'Overview'
			}
		]
	},
	{
		icon: Icon.More,
		title: 'More',
		path: '',
		children: [
			{
				icon: Icon.Asset,
				path: 'https://google.com',
				title: 'Assets'
			},
			{
				icon: Icon.Import,
				path: 'https://google.com',
				title: 'Import data'
			},
			{
				icon: Icon.Export,
				path: 'https://google.com',
				title: 'Export data'
			}
		]
	}
];

export default function NavbarContainerComponent() {
	return (
		<Tooltip.Provider delayDuration={0}>
			<Styled.LeftContainer>
				<Tooltip.Provider>
					<Tooltip.Root delayDuration={0}>
						<Popover.Root>
							<Tooltip.Trigger asChild>
								<Styled.CreateBtnContainer>
									<Styled.PopoverTrigger plus>{createElement(PlusIcon)}</Styled.PopoverTrigger>
									<Styled.NavItemTitle>Create</Styled.NavItemTitle>
								</Styled.CreateBtnContainer>
							</Tooltip.Trigger>

							<Styled.TooltipContent side='right' sideOffset={24}>
								<span>Quick add</span>
							</Styled.TooltipContent>

							<Styled.PopoverContent align='start' avoidCollisions side='right' sideOffset={24}>
								<Styled.QuickAddItem>
									<ExamIcon />
									<span>Exam</span>
								</Styled.QuickAddItem>

								<Styled.QuickAddItem>
									<SessionIcon />
									<span>Session</span>
								</Styled.QuickAddItem>

								<Styled.QuickAddItem>
									<SurveyIcon />
									<span>Survey</span>
								</Styled.QuickAddItem>

								<Styled.QuickAddItem>
									<MeetingIcon />
									<span>Meeting</span>
								</Styled.QuickAddItem>

								<Styled.QuickAddItem>
									<TeamIcon />
									<span>Team</span>
								</Styled.QuickAddItem>

								<Styled.Arrow />
							</Styled.PopoverContent>
						</Popover.Root>
					</Tooltip.Root>
				</Tooltip.Provider>

				{menus.map((menu, index) => {
					return (
						<Tooltip.Root key={index}>
							<Popover.Root key={index}>
								<Tooltip.Trigger asChild>
									<Styled.PopoverTrigger>
										<Styled.NavItem>
											{createElement(menu.icon)}
											<Styled.NavItemTitle>{menu.title}</Styled.NavItemTitle>
										</Styled.NavItem>
									</Styled.PopoverTrigger>
								</Tooltip.Trigger>

								<Styled.TooltipContent side='right' sideOffset={24}>
									<span>{menu.title}</span>
								</Styled.TooltipContent>

								<Styled.PopoverContent
									align={index === menus.length - 1 ? 'end' : 'start'}
									avoidCollisions
									side='right'
									sideOffset={15}
								>
									<Styled.MenuContainer>
										<Styled.MenuTitle>{menu.title}</Styled.MenuTitle>

										<Styled.ChildMenu>
											{menu.children.map((child, index) => {
												return (
													<Link href={child.path} key={index} passHref>
														<Styled.ChildMenuItem>
															{createElement(child.icon)}
															<span>{child.title}</span>
														</Styled.ChildMenuItem>
													</Link>
												);
											})}
										</Styled.ChildMenu>
									</Styled.MenuContainer>
									<Styled.Arrow />
								</Styled.PopoverContent>
							</Popover.Root>
						</Tooltip.Root>
					);
				})}
			</Styled.LeftContainer>

			<Styled.RightContainer>
				<Styled.MenuContainer>
					<Styled.MenuTitle>Exams</Styled.MenuTitle>

					<Styled.ChildMenu>
						<Link href='https://google.com' passHref>
							<Styled.ChildMenuItem active>
								<OverviewIcon />
								<span>Overview</span>
							</Styled.ChildMenuItem>
						</Link>

						<Link href='https://google.com' passHref>
							<Styled.ChildMenuItem>
								<AnalyticsIcon />
								<span>Analytics</span>
							</Styled.ChildMenuItem>
						</Link>

						<Link href='https://google.com' passHref>
							<Styled.ChildMenuItem>
								<QuestionIcon />
								<span>Questions</span>
							</Styled.ChildMenuItem>
						</Link>

						<Link href='https://google.com' passHref>
							<Styled.ChildMenuItem>
								<DepartmentIcon />
								<span>Departments</span>
							</Styled.ChildMenuItem>
						</Link>

						<Link href='https://google.com' passHref>
							<Styled.ChildMenuItem>
								<ProctorIcon />
								<span>Proctors</span>
							</Styled.ChildMenuItem>
						</Link>

						<Link href='https://google.com' passHref>
							<Styled.ChildMenuItem>
								<ReviewerIcon />
								<span>Reviews</span>
							</Styled.ChildMenuItem>
						</Link>
					</Styled.ChildMenu>
				</Styled.MenuContainer>
			</Styled.RightContainer>
		</Tooltip.Provider>
	);
}
