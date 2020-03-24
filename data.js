const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const moment = require('moment');

const app = express();

const SELECT_ALL_EVENTS = 'SELECT * FROM event_table';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'event',
	timezone: 'Z'
});

connection.connect(err => {
	if(err) {
		return err;
	}
});

console.log(connection);

app.use(cors());

app.get('/', (req,res) => {
	res.write('1.go to /events to see events') 
	res.write('\n2.go to /events/add to add events') 
	res.write('\n3.go to /events/rgs to register events')
	res.write('\n4.go to /events/event-rgs to watch names of students register for events by event_id')
	res.end()
});

/*

var toLocalTime = function(time) {
  var d = new Date(time);
  var offset = (new Date().getTimezoneOffset() / 60) * -1;
  var n = new Date(d.getTime() + offset);
  return n;
};

*/


app.get('/events', (req,res) => {
	connection.query(SELECT_ALL_EVENTS , (err,results) => {
		if(err){
			return res.send(err)
		}
		else{
			const time = new Date(results[3].event_date);
            
			//console.log(time.setHours(time.getHours() + 13));
            let act_date = moment(time).format("DD-MM-YYYY");
			console.log(act_date);

			//console.log(toLocalTime(time));

			return res.json({
				data : results
			})
		}
	});
});

app.get('/events/add', (req,res) => {
	const { id , name , date , detail } = req.query;
	
	//console.log(new Date(date).now());

	//let utcdate = new Date(Date.UTC(date));
	
	//console.log(utcdate);

	const INSERT_EVENT = `INSERT INTO event_table VALUES (${id}, '${name}' , '${moment(date).format("YYYY-MM-DD")}' , '${detail}')` ;
    connection.query(INSERT_EVENT, (err, results) => {
    	if(err) {
    		return res.send(err)
    	}
    	else {
    		return res.send('succssfully added event')
    	}
    });
});

app.get('/events/rgs', (req,res) => {
	const { id , event_id, name } = req.query;
	

	const INSERT_RGS = `INSERT INTO rgs_table VALUES (${id}, ${event_id}, '${name}')`;
    connection.query(INSERT_RGS, (err, results) => {
    	if(err) {
    		return res.send(err)
    	}
    	else {
    		return res.send('succssfully registered for event')
    	}
    });
});


app.get('/events/event-rgs', (req,res) => {
	const {event_id} = req.query;

	const FETCH_EVENT_RGS = `SELECT rgs_name FROM rgs_table where event_id = ${event_id}`;
	connection.query(FETCH_EVENT_RGS , (err,results) => {
		if(err){
			return res.send(err)
		}
		else{

			return res.json({
				data : results
			})
		}
	});
});


app.listen(4000, () => {
	console.log(`event server listening on port 4000`)
});