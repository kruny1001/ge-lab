var firebase =require('firebase');

var config = {
	apiKey: "AIzaSyBO4CCJzL7U9pFSEv-9ETqVt5dzMNKiwk4",
	authDomain: "bcloud.firebaseapp.com",
	databaseURL: "https://bcloud.firebaseio.com",
	storageBucket: "firebase-bcloud.appspot.com",
	messagingSenderId: "172712893865"
};
firebase.initializeApp(config);

var timelines = [
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis u libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto. Invitamus me testatur sed quod non dum animae tuae lacrimis u libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto. Invitamus me testatur sed quod non dum animae tuae lacrimis u libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto. Invitamus me testatur sed quod non dum animae tuae lacrimis u libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-19-2016'},
{title:'HW1',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-20-2016'},
{title:'HW2',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-21-2016'},
{title:'Exam 1',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-19-2016'},
{title:'Project',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-20-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-21-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-19-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-20-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-21-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-19-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-20-2016'},
{title:'Timeline Event',
	desc:'Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.',
	date:'Sep-21-2016'}
]

var timeLinesRef = firebase.database().ref('timelines');

timelines.forEach(function(val){
	var newPubRef = timeLinesRef.push();
	newPubRef.set(val)
})

firebase.database().ref('/timelines').once('value', function(snap){
	snap.forEach(function(pub){
		console.log(pub.val().title)
	})
})

