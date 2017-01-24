//import d3 from './mind-map-editor.d3-layout';

export class MindMapEditorTreeMapLogic {

    constructor(mindMapElement, treeData, settings) {
        console.log(mindMapElement, treeData, settings)
        this.config = {};
        this.mindMapElement = mindMapElement;

        this.width = mindMapElement.clientWidth ;
        this.height = mindMapElement.clientHeight ;


        var zoom = null;

        var x = d3.scale.linear().range([0, this.width]),
            y = d3.scale.linear().range([0, this.height]),
            color = d3.scale.category20c(),
            root,
            node;

        var treemap = d3.layout.treemap()
            .round(false)
            .size([this.width, this.height])
            .sticky(true)
            .value(function(d) {
                return d.value.value || 50; });

        var svg = d3.select(this.mindMapElement).append("div")
            .attr("class", "chart")
            .style("width", this.width + "px")
            .style("height", this.height + "px")
            .append("svg:svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("svg:g")
            .attr("transform", "translate(.5,.5)");

            node = root = treeData;

            var nodes = treemap.nodes(root)
                .filter(function(d) {
                    return !d.children; });

            var cell = svg.selectAll("g")
                .data(nodes)
                .enter().append("svg:g")
                .attr("class", "cell")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")"; })
                .on("click", function(d) {
                    return zoom(node == d.parent ? root : d.parent); });

            cell.append("svg:rect")
                .attr("width", function(d) {
                    return d.dx - 1; })
                .attr("height", function(d) {
                    return d.dy - 1; })
                .style("fill", function(d) {
                    return color(d.parent ? d.parent.name : d.name); });

            cell.append("svg:text")
                .attr("x", function(d) {
                    return d.dx / 2; })
                .attr("y", function(d) {
                    return d.dy / 2; })
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .text(function(d) {
                    return d.name; })
                .style("opacity", function(d) { d.w = this.getComputedTextLength();
                    return d.dx > d.w ? 1 : 0; });

            d3.select(window).on("click", function() { zoom(root); });

            d3.select("select").on("change", function() {
                treemap.value(this.value == "size" ? size : count).nodes(root);
                zoom(node);
            });
            //addTooltip();

        function size(d) {
            return d.size;
        }

        function count(d) {
            return 1;
        }

        zoom = (d) => {
            var kx = this.width / d.dx,
                ky = this.height / d.dy;
            x.domain([d.x, d.x + d.dx]);
            y.domain([d.y, d.y + d.dy]);

            var t = svg.selectAll("g.cell").transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .attr("transform", function(d) {
                    return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

            t.select("rect")
                .attr("width", function(d) {
                    return kx * d.dx - 1; })
                .attr("height", function(d) {
                    return ky * d.dy - 1; })

            t.select("text")
                .attr("x", function(d) {
                    return kx * d.dx / 2; })
                .attr("y", function(d) {
                    return ky * d.dy / 2; })
                .style("opacity", function(d) {
                    return kx * d.dx > d.w ? 1 : 0; });

            node = d;
            d3.event.stopPropagation();
        }

        /*function addTooltip() {
            var tip = d3.tip()
                .attr("class", "d3-tip")
                .html(function(d) { console.log(d) })

            cell = svg.selectAll(".cell")
            cell.call(tip)
            cell.on("mouseover", tip.show)
            cell.on("mouseout", tip.hide)
        }*/



    }


    setConfig(config) {
        this.config = config;
    }

    /*onChange(cb) {
        this.onChangeCallback = cb;
    }

    setDataApi(dataApi) {
        this.dataApi = dataApi;
    }

    setTreeData(treeData) {


        
        return this.treeData;
    }

    getTreeData() {
        return this.treeData;
    }*/
}
