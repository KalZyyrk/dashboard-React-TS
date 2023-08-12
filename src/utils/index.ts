import {enumStatus, ITableRows} from "../types/types";

export function createData(name: string, trackingId: number, date: string, status: enumStatus): ITableRows {
    return { name: name, trackingId: trackingId, date: date, status: status };
}