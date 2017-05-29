/**
 * Created by sunli on 17/5/29.
 */
var xmlns = "http://www.w3.org/2000/svg";

function createRecNode(id, x, y, width, height, fill_color, opacity) {
    var node = document.createElementNS(xmlns, "rect");
    node.setAttributeNS(null, "id", id);

    node.setAttributeNS(null, "width", width.toString());
    node.setAttributeNS(null, "height", height.toString());
    node.setAttributeNS(null, "opacity", opacity.toString());
    node.setAttributeNS(null, "x", x.toString());
    node.setAttributeNS(null, "y", y.toString());
    var styleAttr = document.createAttribute("style");
    styleAttr.nodeValue = "fill:" + fill_color;
    node.setAttributeNode(styleAttr);
    return node;
}

function createLatitudeLine(id, x, y, length, thick, color) {

}

function createLongitudeLine(id, x, y, length, thick, color) {

}

function createLine(id, x1, y1, x2, y2, thick, color) {
    var node = document.createElementNS(xmlns, "line");
    node.setAttributeNS(null, "id", id);
    node.setAttributeNS(null, "x1", x1);
    node.setAttributeNS(null, "y1", y1);
    node.setAttributeNS(null, "x2", x2);
    node.setAttributeNS(null, "y2", y2);
    var styleAttr = document.createAttribute("style");
    styleAttr.nodeValue = "stroke:" + color + "; stroke-width:" + thick;
    node.setAttributeNode(styleAttr);
    return node;
}
