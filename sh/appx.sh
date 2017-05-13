export OPTIONS="windows $OPTIONS"
npm run pack && (
  node sh/cmd/appx.js
)
