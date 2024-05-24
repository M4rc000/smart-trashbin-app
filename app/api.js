const ip = '192.168.1.103';

// GET USER
const urlUser = `http://${ip}/smart-trashbin/user/`;

// GET DATA TRASH BIN
const urlData = `http://${ip}/smart-trashbin/data/`;

// GET DATA FULL
const urlDataFull = `http://${ip}/smart-trashbin/data/full/`;

// GET DATA MEDIUM
const urlDataMedium = `http://${ip}/smart-trashbin/data/medium/`;

// GET DATA EMPTY
const urlDataEmpty = `http://${ip}/smart-trashbin/data/empty/`;

// GET DATA NOTIF
const urlDataNotifFull = `http://${ip}/smart-trashbin/data/notif-full/`;

export default apiUrl = {
    urlData, urlUser, urlDataEmpty, urlDataFull, urlDataMedium, urlDataNotifFull
}