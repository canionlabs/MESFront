import axios from 'axios'
import router from '../router/index.js'


const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'api/auth/token/'
const REFRESH_URL = API_URL + 'api/auth/token-refresh/'
// const CHECK_URL = API_URL + 'api/auth/token/'


export async function tryLogin (username, password) {
  const resp = await axios
    .post(LOGIN_URL, {
      username: username, password: password})
  localStorage.setItem('id_token', resp.data.token)
  return true
}

export function getToken () {
  return localStorage.getItem('id_token')
}

export async function refreshToken () {
  const resp = await axios
    .post(REFRESH_URL, {token: getToken()})
  localStorage.setItem('id_token', resp.data.token)
}

export function getAuthHeader () {
  return {
    'Authorization': 'JWT ' + localStorage.getItem('id_token')
  }
}

export function logout () {
  localStorage.removeItem('id_token')
  router.push('login')
}

// export function isLoggedIn () {
//   try {
//     const resp = axios
//         .post('http://localhost:8000/api/auth/token/', {
//           token: getToken(),
//         })
//     return true
//   } catch (err) {
//     console.log(err)
//     return false
//   }
// }
