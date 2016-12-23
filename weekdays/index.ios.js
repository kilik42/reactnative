//import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// create a react component

var Weekdays = React.createClass({
  render: function() {

    return  
    
    <View style={styles.container}>
      <Text>
          Days of the week:
      </Text>

      <Text>
      {Moment().format('ddd')}

      </Text>
      
      {this.days()}


    </View>
  }, 
  days: function(){
     return  DAYS.map(function(day){
        //called 7 times, one for each day of the week
          return <DayItem day = {day} />
    });

    
    
  }
});


// style the react component
var styles = StyleSheet.create({

    container: {
      flex: 1,
      // flexDirection: 'row',
      justifyContent: 'center',//move stuff height wise
      alignItems: 'center' // move stuff width wise
    }
    
});

//show the react component on the screen

AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
