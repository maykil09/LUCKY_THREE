import React from "react";
import {ResponsiveLine} from "@nivo/line";
import {useTheme} from "@mui/material";

const data = [
    {
        id: "japan",
        color: "hsl(42, 70%, 50%)",
        data: [
            {
                x: "plane",
                y: 243
            },
            {
                x: "helicopter",
                y: 242
            },
            {
                x: "boat",
                y: 292
            },
            {
                x: "train",
                y: 225
            },
            {
                x: "subway",
                y: 8
            },
            {
                x: "bus",
                y: 209
            },
            {
                x: "car",
                y: 118
            },
            {
                x: "moto",
                y: 0
            },
            {
                x: "bicycle",
                y: 266
            },
            {
                x: "horse",
                y: 98
            },
            {
                x: "skateboard",
                y: 36
            },
            {
                x: "others",
                y: 222
            }
        ]
    }
];

function OverViewChart() {
    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: "point"}}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle"
            }}
            axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle"
            }}
            pointSize={10}
            pointColor={{theme: "background"}}
            pointBorderWidth={2}
            pointBorderColor={{from: "serieColor"}}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default OverViewChart;
