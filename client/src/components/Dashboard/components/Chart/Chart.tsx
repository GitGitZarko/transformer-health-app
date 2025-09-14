import {Paper, TextField} from "@mui/material";
import type {ResponseData} from "../../Dashboard.tsx";

type ChartProps = {
    data: ResponseData[];
}

const Chart = ({data}: ChartProps) => {
    return (
        <Paper sx={{padding: 2, margin: 10}}>
            <TextField
                label="Search by name, region or health..."
                variant="outlined"
                fullWidth
                value={""}
                onChange={() => {
                }}
                sx={{marginBottom: 2}}
            />
        </Paper>
    );
};

export default Chart;