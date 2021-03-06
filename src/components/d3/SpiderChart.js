import * as d3 from "d3";

let spiderChart;
let radialScale = d3.scaleLinear()
        .domain([0,5]),
    ticks = [1,2,3,4,5],
    line = d3.line()
        .x(d=> d.x)
        .y(d=> d.y)



function chart(config){
    let margin = (config.margin ? 
        config.margin : 
        {top: 0, bottom: 0, left: 0, right: 0}
    )

    var width = config.width - margin.left - margin.right,
        height = config.height - margin.top - margin.bottom,
        id = config.id,
        svg,
        data = config.data,
        radarChart,
        color = config.color,
        fontSize = config.size.width < 500 ? "0.7em" : "1em"
    // console.log(config.size)
    
    function spider(){
        initialize();
        drawChart();
    }

    const initialize = () => {
        svg = d3.select('#' + id)
            .append('svg')
            .attr('height', height + margin.top + margin.bottom)
            .attr('width', width + margin.left + margin.right)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        radarChart = svg.append('g')
            .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')

        radialScale.range([20, Math.min(width, height) * 0.4])

    }
    
    const drawChart = () =>{
        data.forEach(function(d, i){
            d.radius = radialScale(d.value)
            d.angle = (Math.PI / 2) + ( 2 * Math.PI * i / data.length)
            let coords = angleToCoordinate(d.angle, d.value)
            d.x = coords.x
            d.y = coords.y
        })
        var lines = radarChart.selectAll('.spider-lines')
            .data(data, d=> d.label)

        lines.enter()
            .append('line')
            .attr('class', 'spider-lines')
            .attr('x1', d=> angleToCoordinate(d.angle, 5.2).x)
            .attr('y1', d=> angleToCoordinate(d.angle, 5.2).y)
            .attr('x2', 0)
            .attr('y2', 0)


        var circles = radarChart.selectAll('.circles')
            .data(ticks)

        circles.enter()
            .append('circle')
            .attr('class', 'spider-circles')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', d=> radialScale(d))

        var paths = radarChart.selectAll('.skill-path')
            .data([data], d=> d.label)

        paths.enter()
            .append('path')
            .attr('d', line)
            .attr('class', 'spider-path')

        radarChart.append('line')
            .attr('x1', data[0].x)
            .attr('x2', data[data.length -1].x)
            .attr('y1', data[0].y)
            .attr('y2', data[data.length -1].y)
            .attr('class', 'spider-path')

        var dots = radarChart.selectAll('.dots')
            .data(data, d=> d.label)

        dots.enter()
            .append('circle')
            .attr('class', 'spider-dots')
            .attr('cx', d=> d.x)
            .attr('cy', d=> d.y)
            .attr('r', config.size.width <= 500 ? 5: 7)

        var texts = radarChart.selectAll('text')
            .data(data, d=> d.label)

        texts.enter()
            .append('text')
            .attr('x', d=> angleToCoordinate(d.angle, 5.8).x)
            .attr('y', d=> angleToCoordinate(d.angle, 5.8).y)
            .attr('text-anchor', d=> d.anchor)
            .attr('font-size', fontSize)
            .text(d=> d.label)

        radarChart.append('circle')
            .attr('r', config.size.width <= 500 ? 28: 40)
            .attr('class', 'spider-middle')
        
        radarChart.append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', fontSize)
            .text('My Skills')
    }


    const angleToCoordinate = (angle, value) => {
        let x = Math.cos(angle) * radialScale(value);
        let y = Math.sin(angle) * radialScale(value);
        return {"x": x, "y": - y}
    }
    
    const getPathCoordinates = (data_point) => {
        let coordinates = [];
        for (var i =0; i < data.length; i++){
            let ft_name = data[i];
            let angle = (Math.PI /2) + (2 * Math.PI * i / this.features.length);
            coordinates.push(this.angleToCoordinate(angle, data_point[ft_name]))
        }
        return coordinates;
    }

    return spider;
}

export const GenerateChart = (config) => {
    spiderChart = chart(config)
    spiderChart();
}

