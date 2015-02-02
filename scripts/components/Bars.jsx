var React = require('react');

var Bars = React.createClass({
    render: function () {
        var bars = [
        (<div className="hoverable"><div className="bar-name-col"><span> BAR 1</span></div></div>),
        (<div className="hoverable"><div className="bar-name-col"><span> BAR 2</span></div></div>),
        (<div className="hoverable"><div className="bar-name-col"><span> BAR 3</span></div></div>)
        ]
        return (
            <div className="left-part">
                <div>{bars}</div>
            </div>
        )
    }
})

module.exports = Bars;
