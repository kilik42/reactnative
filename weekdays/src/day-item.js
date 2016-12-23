//import some code we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;


//create out component
var DayItem = React.createClass({
    render: function(){
        return <Text style={styles.day}>
        {this.props.day}
        </Text>
    }
});

//style our component
var styles = StyleSheet.create({
    day : {
        fontSize: 18,
        color: '#0000FF'
    }
});

//make this code available elsewhere

module.exports = DayItem;

