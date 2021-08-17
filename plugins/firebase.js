import firebase from 'firebase'

if (!firebase.apps.length) {
	firebase.initializeApp(
		{
			apiKey: "AIzaSyA4OpdafL5Pvmt9Hh16EuyhK1s100iRgFw",
			authDomain: "fir-pj-c486f.firebaseapp.com",
			projectId: "fir-pj-c486f",
			storageBucket: "fir-pj-c486f.appspot.com",
			messagingSenderId: "920843347854",
			appId: "1:920843347854:web:5b0245f70ff9f1e351e6df",
			measurementId: "G-6XZ024SGTS"

		}
	)
}
export default firebase