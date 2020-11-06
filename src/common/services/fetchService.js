import { API_URL } from '../../appSettings'

export const defaultHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const isSuccess = res => res && res.status !== 'error'

export const constructQueryParams = params =>
  !params
    ? ''
    : '?' +
      Object.entries(params)
        .map(([p, v]) => `${p}=${v}`)
        .join('&')

export const get = async (path, params) => {
  const url = API_URL + path + constructQueryParams(params)
  return fetch(url)
    .then(res => res.json())
    .catch(console.error)
}

export const post = async (path, reqBody) => {
  const url = API_URL + path
  const reqParams = {
    method: 'post',
    headers: defaultHeader,
    body: JSON.stringify(reqBody),
  }

  return fetch(url, reqParams)
    .then(res => res.json())
    .catch(console.error)
}
