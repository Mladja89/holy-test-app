#!/bin/sh

ENV_CONFIG="${1:-./app}/env-config.js"

# Add assignment
echo "window._env_ = {" >"$ENV_CONFIG"

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [ -n "$line" ]; do

  if printf '%s\n' "$line" | grep -q -e '='; then
    # Split env variables by character `=`
    varKEY=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varVAL=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')

    # Check if an env variable is overrided
    value=
    eval value="\$$varKEY"
    [ -n "$value" ] && varVAL=${value}

    # Append configuration property to JS file
    echo "  $varKEY: \"$varVAL\"," >>"$ENV_CONFIG"
  fi

done <.env

echo "};" >>"$ENV_CONFIG"

# Debugging purposes
#echo "$ENV_CONFIG" && cat "$ENV_CONFIG"