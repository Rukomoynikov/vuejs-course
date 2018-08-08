const isProduction = process.env.NODE_ENV === 'production'

export default {
  dataUrl: isProduction ? '/' : 'http://localhost:3000/'
}
