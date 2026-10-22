#!/bin/bash
# Double-click this on a Mac to start the ECHO link relay.
# It needs Node, which most machines already have. If it says
# "node: command not found", install Node from nodejs.org and try again.
cd "$(dirname "$0")" || exit 1
clear
if ! command -v node >/dev/null 2>&1; then
  echo
  echo "  Node isn't installed on this laptop."
  echo
  echo "  The prototype still works without it — two windows on ONE laptop"
  echo "  link to each other with nothing to set up. You only need the relay"
  echo "  to join TWO laptops."
  echo
  echo "  To install Node: https://nodejs.org  (the LTS download)"
  echo
  read -r -p "  Press return to close. "
  exit 1
fi
node relay.js
echo
read -r -p "  The relay has stopped. Press return to close. "
