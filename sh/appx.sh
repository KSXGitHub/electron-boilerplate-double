export OPTIONS="windows $OPTIONS"
npm run pack && (
  node sh/lib/appx.js
)
