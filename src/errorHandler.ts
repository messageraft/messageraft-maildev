export function maildevErrorHandler(error: Error) {
  return {
    error: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : 'stack trace available only in development mode'
  }
}
