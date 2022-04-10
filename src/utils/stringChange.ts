export function toHumpName(str: string) {
  const re = /-(\w)/g // \w匹配所有的字母和数字字符以及下划线_
  return str
    .replace(re, function ($0, $1) {
      // 第一个参数re表示正则,第二个回调函数,对该字符串处理方式,圆括号内的形参数表示正则表达式的子选项
      return $1.toUpperCase() // 转大写
    })
    .slice(6)
}

export function firstCapitaltoUpper(str: string) {
  const res = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
  return res
}
