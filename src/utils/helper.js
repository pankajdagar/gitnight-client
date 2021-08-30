export const queryString = (params) =>
  Object.keys(params)
    .map((key) => {
      const value = Array.isArray(params[key]) ? params[key].join(',') : params[key]
      return key + '=' + value
    })
    .join('&')

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
