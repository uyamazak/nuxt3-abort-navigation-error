
export default defineNuxtRouteMiddleware((to, from) => {
  const { testVal } = to.params
  if (testVal === 'abort' ) {
    return abortNavigation('testVal is abort')
  }
  if (testVal === 'false' ) {
    return abortNavigation('testVal is false')
  }
})
