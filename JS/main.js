var Counter = React.createClass({
  render: function () {
    var time_Passed = Math.round(this.props.time_Passed / 100);
    var second_Passed = time_Passed / 10 + (time_Passed % 10 ? "" : ".0");
    var text = `My React code started running ${second_Passed} seconds ago!`;
    return React.Dom.p(null, text);
  },
});
var counter_Factory = React.createFactory(Counter);

var start_Counting = new Date().getTime();
setInterval(function () {
  ReactDOM.render(
    counter_Factory({ time_Passed: new Date().getDate() - start_Counting }),
    document.getElementById(`My_React_Code`)
  );
}, 50);
