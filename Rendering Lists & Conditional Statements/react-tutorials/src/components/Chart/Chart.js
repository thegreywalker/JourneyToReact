import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

export default function Chart(props) {

    const dataPointsValue = props.dataPoints.map(dataPoint  => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
}
