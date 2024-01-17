import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const AreaChartComponent = () => {
    const areaOptions = {
        chart: {
            type: 'areaspline',
            backgroundColor: "rgba(255,255,255,0.9)",
            marginTop: 30,
            // marginLeft: 70,
            // marginRight: 30,
            height: 300,
        },
        title: {
            text: '',
            align: 'left'
        },

        xAxis: {
            plotBands: [{ // Highlight the two last years
                from: 2019,
                to: 2020,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            // title: {
            //   text: 'Quantity'
            // }
        },
        tooltip: {
            shared: true,
            headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointStart: 2000
            },
            areaspline: {
                fillOpacity: 0.5
            }
        },
        colors: ['#8ab9f1', '#74bbfb', '#7cb9e8', '#88ace0', '#70aae0'],
        series: [{
            name: 'Moose',
            data:
                [
                    38000,
                    37300,
                    37892,
                    38564,
                    36770,
                    36026,
                    34978,
                    35657,
                    35620,
                    35971,
                    36409,
                    36435,
                    34643,
                    34956,
                    33199,
                    31136,
                    30835,
                    31611,
                    30666,
                    30319,
                    31766
                ]
        }, {
            name: 'Deer',
            data:
                [
                    22534,
                    23599,
                    24533,
                    25195,
                    25896,
                    27635,
                    29173,
                    32646,
                    35686,
                    37709,
                    39143,
                    36829,
                    35031,
                    36202,
                    35140,
                    33718,
                    37773,
                    42556,
                    43820,
                    46445,
                    50048
                ]
        }]
    };
    return <HighchartsReact highcharts={Highcharts} options={areaOptions} />
}
export const PieChartComponent = () => {
    const pieOptions = {
        chart: {
            type: 'pie',
            height: 300,
        },
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
        title: {
            text: ""
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderRadius: 5,
                dataLabels: [{
                    enabled: true,
                    distance: 15,
                    format: '{point.name}'
                }, {
                    enabled: true,
                    distance: '-30%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 5
                    },
                    format: '{point.y:.1f}%',
                    style: {
                        fontSize: '0.9em',
                        textOutline: 'none'
                    }
                }]
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        colors: ['#8ab9f1', '#74bbfb', '#7cb9e8', '#88ace0', '#70aae0'],
        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: [
                    {
                        name: 'Chrome',
                        y: 61.04,
                        drilldown: 'Chrome'
                    },
                    {
                        name: 'Safari',
                        y: 9.47,
                        drilldown: 'Safari'
                    },
                    {
                        name: 'Edge',
                        y: 9.32,
                        drilldown: 'Edge'
                    },
                    {
                        name: 'Firefox',
                        y: 8.15,
                        drilldown: 'Firefox'
                    },
                    {
                        name: 'Other',
                        y: 11.02,
                        drilldown: null
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: 'Chrome',
                    id: 'Chrome',
                    data: [
                        [
                            'v97.0',
                            36.89
                        ],
                        [
                            'v96.0',
                            18.16
                        ],
                        [
                            'v95.0',
                            0.54
                        ],
                        [
                            'v94.0',
                            0.7
                        ],
                        [
                            'v93.0',
                            0.8
                        ],
                        [
                            'v92.0',
                            0.41
                        ],
                        [
                            'v91.0',
                            0.31
                        ],
                        [
                            'v90.0',
                            0.13
                        ],
                        [
                            'v89.0',
                            0.14
                        ],
                        [
                            'v88.0',
                            0.1
                        ],
                        [
                            'v87.0',
                            0.35
                        ],
                        [
                            'v86.0',
                            0.17
                        ],
                        [
                            'v85.0',
                            0.18
                        ],
                        [
                            'v84.0',
                            0.17
                        ],
                        [
                            'v83.0',
                            0.21
                        ],
                        [
                            'v81.0',
                            0.1
                        ],
                        [
                            'v80.0',
                            0.16
                        ],
                        [
                            'v79.0',
                            0.43
                        ],
                        [
                            'v78.0',
                            0.11
                        ],
                        [
                            'v76.0',
                            0.16
                        ],
                        [
                            'v75.0',
                            0.15
                        ],
                        [
                            'v72.0',
                            0.14
                        ],
                        [
                            'v70.0',
                            0.11
                        ],
                        [
                            'v69.0',
                            0.13
                        ],
                        [
                            'v56.0',
                            0.12
                        ],
                        [
                            'v49.0',
                            0.17
                        ]
                    ]
                },
                {
                    name: 'Safari',
                    id: 'Safari',
                    data: [
                        [
                            'v15.3',
                            0.1
                        ],
                        [
                            'v15.2',
                            2.01
                        ],
                        [
                            'v15.1',
                            2.29
                        ],
                        [
                            'v15.0',
                            0.49
                        ],
                        [
                            'v14.1',
                            2.48
                        ],
                        [
                            'v14.0',
                            0.64
                        ],
                        [
                            'v13.1',
                            1.17
                        ],
                        [
                            'v13.0',
                            0.13
                        ],
                        [
                            'v12.1',
                            0.16
                        ]
                    ]
                },
                {
                    name: 'Edge',
                    id: 'Edge',
                    data: [
                        [
                            'v97',
                            6.62
                        ],
                        [
                            'v96',
                            2.55
                        ],
                        [
                            'v95',
                            0.15
                        ]
                    ]
                },
                {
                    name: 'Firefox',
                    id: 'Firefox',
                    data: [
                        [
                            'v96.0',
                            4.17
                        ],
                        [
                            'v95.0',
                            3.33
                        ],
                        [
                            'v94.0',
                            0.11
                        ],
                        [
                            'v91.0',
                            0.23
                        ],
                        [
                            'v78.0',
                            0.16
                        ],
                        [
                            'v52.0',
                            0.15
                        ]
                    ]
                }
            ]
        }
    }
    return <HighchartsReact highcharts={Highcharts} options={pieOptions} />
}
