export interface ISidebarItem {
    icon: any;
    heading: string;
}

export interface ICard {
    title: string;
    color: {
        backGround: string;
        boxShadow: string;
    };
    barValue: number;
    value: string;
    png: any;
    series: ISeries[];
}

export interface ISeries {
    name: string;
    data: number[];
}

export interface ITableRows {
    name: string;
    trackingId: number;
    date: string;
    status: enumStatus
}

export enum enumStatus {
    APPROVED = "Approved",
    PENDING = "Pending",
    DELIVERED = "Delivered",
}

export interface IUpdate {
    img: any;
    name: string;
    noti: string;
    time: string;
}