import {useState} from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from "@mui/material"
import type {ResponseData} from "../../Dashboard.tsx";

const columns = ["ID", "Name", "Region", "Health"]

type TableData = Omit<ResponseData, 'lastTenVoltgageReadings'>;

type DashboardProps = {
    data: TableData[];
}

export default function DataTable({data}: DashboardProps) {
    const [search, setSearch] = useState("")

    const filteredData = data.filter((asset) =>
        Object.values(asset).some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    )

    return (
        <Paper sx={{padding: 2, margin: 5}}>
            <TextField
                label="Search by name, region or health..."
                variant="outlined"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{marginBottom: 2}}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{backgroundColor: '#f5f5f5'}}>
                        <TableRow>
                            {columns.map((item) => (<TableCell key={item}>{item}</TableCell>))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((asset) => (
                            <TableRow key={asset.assetId}>
                                <TableCell>{asset.assetId}</TableCell>
                                <TableCell>{asset.name}</TableCell>
                                <TableCell>{asset.region}</TableCell>
                                <TableCell
                                    sx={{
                                        color:
                                            asset.health === 'Critical'
                                                ? 'red'
                                                : asset.health === 'Poor'
                                                    ? 'orange'
                                                    : 'green',
                                        fontWeight: 'bold',
                                    }}
                                >{asset.health}</TableCell>
                            </TableRow>
                        ))}
                        {filteredData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    No results found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
