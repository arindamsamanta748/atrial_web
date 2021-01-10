import HttpClient from '@Utils/HttpClient';

async function latlong(data) {
  let endpoint = 'lat_long.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function getProduct(id,lat,lng) {
  let endpoint = 'get_prod.php?user_id=' + id+'&lat='+lat+'&lng='+lng;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function wishlist(data) {
  let endpoint = 'add_wishlist.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function delwishlist(data) {
  let endpoint = 'delete_wishlist.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}
async function getShopdetails(id) {
  let endpoint = 'get_shop.php?shop_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}
async function getWishlist(id) {
  let endpoint = 'get_wishlist.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getWishnoti(id) {
  let endpoint = 'get_wish_noti.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function wishWishnoti(id) {
  let endpoint = 'show_wish_noti.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function removeNew(data) {
  let endpoint = 'remove_new.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function getSeracCat(id) {
  let endpoint = 'get_usercat.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getCatProduct(id, cat_id, type) {
  let endpoint =
    'get_prodbycat.php?user_id=' + id + '&cat_id=' + cat_id + '&type=' + type;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getNotificationCount(id) {
  let endpoint = 'unread_notify.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getNotification(id) {
  let endpoint = 'send_notify.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getNotificationSeen(id) {
  let endpoint = 'check_notify.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getTerms(id) {
  let endpoint = 'get_terms.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getFaq(id) {
  let endpoint = 'get_faq.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getAbout(id) {
  let endpoint = 'get_about.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getHelp(id) {
  let endpoint = 'get_help.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getLocation(id) {
  let endpoint = 'get_location.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getCareer(id) {
  let endpoint = 'get_career.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getProfile(id) {
  let endpoint = 'fetch_profile.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function picUpload(data, id) {
  let endpoint = 'edit_image.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function picUploadMar(data, id) {
  let endpoint = 'edit_shop_img.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function profileUpdate(
  user_id,
  name,
  email,
  password,
  address,
  phone,
  gender,
  city,
  dob,
) {
  let endpoint =
    'edit_profile.php?user_id=' +
    user_id +
    '&name=' +
    name +
    '&email=' +
    email +
    '&password=' +
    password +
    '&address=' +
    address +
    '&phone=' +
    phone +
    '&gender=' +
    gender +
    '&city=' +
    city +
    '&dob=' +
    dob;
  // console.log(data);
  return HttpClient.get(endpoint);
}

async function getSubscriptions(id) {
  let endpoint = 'subscription.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getShop(id) {
  let endpoint = 'fetch_shop.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function getCategory(id) {
  let endpoint = 'fetch_normal_cat.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function updateShop(data, id) {
  let endpoint = 'edit_shop.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function buySubscription(data) {
  let endpoint = 'buy_subscription.php';
  console.log('buy_subscription',data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function chkSubscription(id) {
  let endpoint = 'check_subscription.php?user_id=' + id;
  console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function chkSubscriptionNew(id) {
  let endpoint = 'check_subscription2.php?user_id=' + id;
  console.log(endpoint);
  return HttpClient.get(endpoint);
}


async function SubscriptionHistory(id) {
  let endpoint = 'fetch_buyhistory.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function ProductShop(id) {
  let endpoint = 'get_product_user.php?user_id=' + id;
  // console.log(endpoint);
  return HttpClient.get(endpoint);
}

async function AddProductShop(data, id) {
  let endpoint = 'upload_prod_user.php';
  console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}


async function UpdateProductShop(data, id) {
  let endpoint = 'edit_prod_user.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function checksum(data) {
  let endpoint = 'Paytm/generateChecksum.php';
  // console.log(data);
  return HttpClient.upload(endpoint, data, 'POST');
}

async function paytmStatus(data) {
  let endpoint = 'status?JsonData='.data;
  console.log(data);
  return HttpClient.upload2(endpoint, data, 'POST');
}



export default {
  paytmStatus,
  latlong,
  getProduct,
  wishlist,
  getShopdetails,
  delwishlist,
  getWishlist,
  getWishnoti,
  wishWishnoti,
  removeNew,
  getSeracCat,
  getCatProduct,
  getNotificationCount,
  getNotification,
  getNotificationSeen,
  getTerms,
  getFaq,
  getAbout,
  getHelp,
  getLocation,
  getCareer,
  getProfile,
  picUpload,
  profileUpdate,
  getSubscriptions,
  getShop,
  updateShop,
  buySubscription,
  getCategory,
  chkSubscription,
  SubscriptionHistory,
  ProductShop,
  AddProductShop,
  checksum,
  UpdateProductShop,
  picUploadMar,
  chkSubscriptionNew
};
