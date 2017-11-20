# Live Help Now

This is a simple, little library that allows you to add `data-chat` to any HTML 
tag, and have it open a [LiveHelpNow](http://livehelpnow.net) chat window.

## Installation

    npm install live-help-now

## Configuration and Usage

The module exports a function which expects only one argument: an object
with your LiveHelpNow account details.

Most of these details can be found by creating a chat button in LHN and reading
the information in the `<script></script>` tag that it gives you.

```js
const accountInfo = {
  // Your account number as a string
  lhnAccountN: '...',
  // The button design number (not really relevant for the library,
  // but still required by LHN)
  lhnButtonN: 0,
  // The position for the chat window
  lhnChatPosition: 'default',
  // Whether or not to auto-invite for chat
  lhnInviteEnabled: 1,
  // The Chat Window number
  lhnWindowN: 39980,
  // The Invite Number
  lhnInviteN: 32167,
  // The Department Number
  lhnDepartmentN: 17982,
}

$(document).ready(() => {
  liveHelpNow(accountInfo)
})
```
