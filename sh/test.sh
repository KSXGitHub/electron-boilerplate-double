[[ -z $ALTER_NPM ]] || {
  npm=$ALTER_NPM
  export ALTER_NPM=''
  exec $npm test
}

(
  printf "Checking Code Style... "
  standard > stdout.tmp 2> stderr.tmp && (
    echo "passed"
  ) || (
    echo "failed" >&2
    cat stderr.tmp >&2
    cat stdout.tmp
    exit 2
  )
)
