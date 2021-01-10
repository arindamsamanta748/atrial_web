import HttpClient from '@Utils/HttpClient'
import Storage from '@Utils/Storage'


async function field() {
    let endpoint = 'otp_type.php?id=1';
    return HttpClient.get(endpoint);
}

async function banner() {
    let endpoint = 'banner.php?id=1';
    return HttpClient.get(endpoint);
}

async function login(data) {
    let endpoint = 'login.php';
    return HttpClient.upload(endpoint,data,"POST");
}

async function register(data) {
    let endpoint = 'register.php';
    // console.log(data);
    return HttpClient.upload(endpoint,data,"POST");
}

async function status(uid) {
    let endpoint = 'active_user.php?user_id='+uid;
    return HttpClient.get(endpoint);
}

async function forgetPassword(data) {
    let endpoint = 'forget_password.php';
    // console.log(data);
    return HttpClient.upload(endpoint,data,"POST");
}

async function getCurrentAccount(uid) {
    let endpoint = 'profile-dtls?user_id='+uid;
    return HttpClient.get(endpoint);
}

async function getAccount() {
    return await Storage.get('account');
}

async function setAccount(data) {
    return await Storage.set('account', data);
}

async function setLogin(data) {
    return await Storage.set('login_data', data);
}

async function getLogin() {
    return await Storage.get('login_data');
}


async function logout() {
    
    return await Storage.set('account', null);
    console.log('logout');
}

async function setLatlong(data) {
    return await Storage.set('lat_long_data', data);
}

async function getLatlong() {
    return await Storage.get('lat_long_data');
}


export default {
    login,
    logout,
    getAccount,
    setAccount,
    getCurrentAccount,
    register,
    setLogin,
    getLogin,
    field,
    banner,
    status,
    forgetPassword,
    setLatlong,
    getLatlong
}