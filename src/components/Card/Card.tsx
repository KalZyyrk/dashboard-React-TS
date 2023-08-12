import "./Card.css"
import {ICard} from "../../types/types";
import {useState} from "react";
import Chart from "react-apexcharts"
import {LayoutGroup, motion} from "framer-motion";
import {CircularProgressbar} from "react-circular-progressbar";
// @ts-ignore
import {UilTimes} from "@iconscout/react-unicons"

interface CardProps {
    param: ICard;
    setExpanded: () => void;
}

const Card: React.FC<ICard> = (props) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <LayoutGroup>
            {expanded ? (
                <ExpandedCard param={props} setExpanded={() => setExpanded(false)}/>
            ) : (
                <CompactCard param={props} setExpanded={() => setExpanded(true)}/>
            )}
        </LayoutGroup>
    )
};

const CompactCard: React.FC<CardProps> = ({param, setExpanded}) => {
    const Png = param.png;
    return (
        <motion.div className="CompactCard" style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }} layoutId="expandableCard" onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`}/>
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
};

const ExpandedCard: React.FC<CardProps> = ({param, setExpanded}) => {
    const data = {
        options: {
            chart: {
                height: "auto",
            },
            dropShadow: {
                enable: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                color: ["fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                color: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div className="ExpandedCard" style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
                    layoutId="expandableCard"
        >
            <div style={{alignSelf: "flex-end", cursor: "pointer", color: "white"}}>
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart options={{
                    chart: {
                        type: "area",
                        height: "auto",
                    },
                    fill: {
                        colors: ["fff"],
                        type: "gradient",
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    stroke: {
                        curve: "smooth",
                        colors: ["white"],
                    },
                    tooltip: {
                        x: {
                            format: "dd/MM/yy HH:mm",
                        },
                    },
                    grid: {
                        show: true,
                    },
                    xaxis: {
                        type: "datetime",
                        categories: [
                            "2018-09-19T00:00:00.000Z",
                            "2018-09-19T01:30:00.000Z",
                            "2018-09-19T02:30:00.000Z",
                            "2018-09-19T03:30:00.000Z",
                            "2018-09-19T04:30:00.000Z",
                            "2018-09-19T05:30:00.000Z",
                            "2018-09-19T06:30:00.000Z",
                        ],
                    },
                }} series={param.series} type="area"/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}

export default Card