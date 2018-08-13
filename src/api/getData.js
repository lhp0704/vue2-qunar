import request from '@/utils/request'

export function getData1(city) {
  return request({
    url: '/api/home.json',
    method: 'get',
    params: {
      city
    }
  });
}

export function getData2() {
  return request({
    url: '/api/city.json',
    method: 'get'
  });
}

export function getData3(id) {
  return request({
    url: '/api/detail.json',
    method: 'get',
    params: {
      id
    }
  });
}
