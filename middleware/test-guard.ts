const isNumberParam = (param: string) => {
  return !isNaN(Number(param)) && Number(param) > 0
}
export default defineNuxtRouteMiddleware((to, from) => {
  const { testVal } = to.params
  if (testVal === 'test' ) {
    return abortNavigation('testVal is test')
  }
})
