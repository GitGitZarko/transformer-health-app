import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import DataTable from "./components/DataTable/DataTable.tsx";
import Chart from "./components/Chart/Chart.tsx";

export type VoltageReading = {
    timestamp: string;
    voltage: string;
};

export type ResponseData = {
    assetId: number;
    name: string;
    region: string;
    health: "Critical" | "Poor" | "Fair" | "Good" | "Excellent"
    lastTenVoltgageReadings: VoltageReading[];
};

type DashboardProps = {
    data: ResponseData[];
}
export const Dashboard = ({data}: DashboardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    console.log({data})
    return (
        <Grid container spacing={2} columns={16}>
            <Grid size={isMobile ? 16 : 8}>
                <Box><DataTable data={data}/></Box>
            </Grid>
            <Grid size={isMobile ? 16 : 8}>
                <Box><Chart data={data}/></Box>
            </Grid>
        </Grid>
    );
};