import { API_URL } from '../../appSettings'

export const defaultHeader = {
  'Content-Type': 'application/json',
}

export const isSuccess = status =>
  Number(status) && status >= 200 && status < 300

export const constructQueryParams = params =>
  !params
    ? ''
    : '?' +
      Object.entries(params)
        .map(([p, v]) => `${p}=${v}`)
        .join('&')

export const fetchService = {
  get: async (path, params) => {
    const url = API_URL + path + constructQueryParams(params)
    return fetch(url)
      .then(res => res.json())
      .then(console.log)
      .catch(console.error)
  },

  post: async (path, reqBody) => {
    const url = API_URL + path
    const reqParams = {
      method: 'post',
      headers: defaultHeader,
      body: reqBody,
    }

    fetch(url, reqParams)
      .then(res => res.json())
      .then(console.log)
      .catch(console.error)
  },
}
