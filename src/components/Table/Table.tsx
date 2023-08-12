import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import Paper from "@mui/material/Paper"
import {makeStyle, rows} from "../../utils/TableService";
import "./Table.css"

const BasicTable: React.FC = () => {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": {border: 0}}}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left"><span className="status" style={makeStyle(row.status)}>{row.status}</span></TableCell>
                                <TableCell align="left" className="Details">Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BasicTable;