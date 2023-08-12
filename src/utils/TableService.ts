import {createData} from "./index";
import {enumStatus} from "../types/types";
import {Simulate} from "react-dom/test-utils";

export const rows = [
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", enumStatus.APPROVED),
    createData("Big Baza Bang ", 18908424, "2 March 2022", enumStatus.PENDING),
    createData("Mouth Freshner", 18908424, "2 March 2022", enumStatus.APPROVED),
    createData("Cupcake", 18908421, "2 March 2022", enumStatus.DELIVERED),
];

export const makeStyle = (status: enumStatus): {background: string, color: string} => {
    if ( status === enumStatus.APPROVED) {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    } else if (status === enumStatus.PENDING) {
        return {
            background: '#ffadad8f',
            color: 'red'
        }
    } else {
        return {
            background: '#59bfff',
            color: 'white'
        }
    }
}