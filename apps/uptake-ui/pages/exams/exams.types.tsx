type OverviewTableData = {
    check: boolean;
    name: { title: string, subtitle: string };
    privacy: string;
    status: string;
    questions: number;
    points: number;
    duration: string;
    questionsFetched: number;
    editors: string[];
    paymentStatus: string,
    created: Date;
    lastModified: Date;
    actions: { enabled: boolean, link: string, id: string };
};
