export const size = 3;

export function pager(a, p) {
  return p > Math.ceil(a.length / size) ? [] : a.slice((p - 1) * size, p * size)
}

export function filter(a, o) {
  let result = [];
  a.map((v) => {
    let check = true;
    for(let i in o) {
      if(v[i]) {
        if(typeof v[i] == 'string' && v[i].indexOf(o[i]) == -1) {
          return false;
        }
      }
      else {
        if(o[i]) {
          return false;
        }
      }
    }
    if(check) {
      result.push(v)
    }
  })
  return result;
}

export function exist(a, k, v) {
  for(let i = 0; i < a.length; i++) {
    if(a[i][k] == v) {
      return true;
    }
  }
  return false;
}