import firebase from '../controllers/FirebaseController'

var winnersList = [];


function getUserCollectionName() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "TEST_USERS";
    } else {
        return "REAL_USERS";
    }
}

async function saveDummyUserData() {
    for (var i = 0; i < 10; i++) {
        saveUserData('Name ' + i, 'email ' + i, 'phone ' + i, i * 8);
    }
}

async function saveUserData(name, email, phoneNumber, score) {
    try {
        let db = firebase.firestore();
        const user = await db.collection(getUserCollectionName()).doc(email).get();
        if (user.exists) {
            return { 'success': false, 'data': 'You already played this game before' };
        }
        db.collection(getUserCollectionName()).doc(email).set(
            {
                'name': name,
                'email': email,
                'phone': '+966-' + phoneNumber,
                'score': score,
                'time': new Date().toLocaleString(),
            }
        );
        return { 'success': true, 'data': 'Details saved' };
    } catch (e) {
        console.log(e);
        return { 'success': false, 'data': 'Unable to save details right now' };
    }
}

async function getWinnersList() {
    try {
        let db = firebase.firestore();
        let result = await db.collection(getUserCollectionName()).orderBy('score', 'desc').limit(10).get();
        winnersList.length = 0;
        result.docs.forEach((element) => {
            winnersList.push({ 'name': element.data()['name'], 'score': element.data()['score'] });
            //  Sample  winnersList = [{ 'name' : 'Jithin' , 'score' : 100 }, {...},{...}]
        });
        return { 'success': true, 'data': 'Got winners list', 'list': winnersList };
    } catch (e) {
        console.log(e);
        return { 'success': false, 'data': 'Unable to get winners list', 'list': [] };
    }
}

export { saveUserData, getWinnersList, saveDummyUserData }