import {Paper} from "@mui/material";
import type {ResponseData} from "../../Dashboard.tsx";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import {useState} from "react";

type ChartProps = {
    data: ResponseData[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088FE"];

type CombinedDataEntry = {
    time: string;
    [transformerName: string]: number | string | null;
};

const Chart = ({data}: ChartProps) => {

    const [selected, setSelected] = useState<number[]>(data.map(d => d.assetId));
    console.log(data);
    // Unique timestamps
    const allTimestamps = Array.from(
        new Set(data.flatMap(d => d.lastTenVoltgageReadings.map(r => r.timestamp)))
    ).sort();

    // Voltage per transformer
    const combinedData: CombinedDataEntry[] = allTimestamps.map(timestamp => {
        const entry: CombinedDataEntry = {
            time: new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        };
        data.forEach(transformer => {
            const reading = transformer.lastTenVoltgageReadings.find(r => r.timestamp === timestamp);
            entry[transformer.name] = reading ? reading.voltage : null;
        });
        return entry;
    });

    // Toggle selected transformers
    const toggleTransformer = (id: number) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    return (
        <Paper sx={{padding: 2, margin: 5, height: 400}}>
            <div style={{marginBottom: 20}}>
                {data.map((transformer, i) => {
                    const cleanName = transformer.name.replace(/Transformer/gi, '').trim();
                    return (<label key={transformer.assetId} style={{marginRight: 15}}>
                        <input
                            type="checkbox"
                            checked={selected.includes(transformer.assetId)}
                            onChange={() => toggleTransformer(transformer.assetId)}
                        />
                        <span style={{marginLeft: 5, color: COLORS[i % COLORS.length]}}>
              {cleanName}
            </span>
                    </label>)
                })}
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={combinedData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis label={{value: "Voltage", angle: -90, position: "insideLeft"}}/>
                    <Tooltip/>
                    {data.map((transformer, i) =>
                        selected.includes(transformer.assetId) ? (
                            <Line
                                key={transformer.assetId}
                                type="monotone"
                                dataKey={transformer.name}
                                stroke={COLORS[i % COLORS.length]}
                                dot={false}
                                strokeWidth={2}
                            />
                        ) : null
                    )}
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default Chart;