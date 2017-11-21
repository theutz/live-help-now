import $ from 'jquery'
import forEach from 'lodash.foreach'

export const clickHandler = event => {
  event.preventDefault()
  window.OpenLHNChat()
}

export const attachAccountInfoGlobals = accountInfo => {
  forEach(accountInfo, (value, key) => {
    window[key] = value
  })
}

export const appendScriptTag = (url, id) => {
  $body.append(`<script src=${url} id="${id}"></script>`)
}

export const lhnIsOnline = () => !!window.bLHNOnline

const $body = $('body')

export const defaultScriptURL =
  '//www.livehelpnow.net/lhn/widgets/chatbutton/lhnchatbutton-current.min.js'

export const defaultScriptId = 'lhnscript'

export const defaultAttributeName = 'data-chat'

export const liveHelpNow = (
  accountInfo,
  callback = null,
  scriptURL = defaultScriptURL,
  scriptId = defaultScriptId,
  attributeName = defaultAttributeName
) => {
  if (!accountInfo) {
    throw new Error(
      'You must provide the account information as the first argument.'
    )
  }
  attachAccountInfoGlobals(accountInfo)

  $(document).ready(() => {
    appendScriptTag(scriptURL, scriptId)

    const $targets = $(`[${attributeName}]`)
    $targets.on('click', clickHandler)

    if (typeof callback === 'function') {
      const runCb = () => {
        callback($targets, lhnIsOnline())
      }

      runCb()
      setInterval(runCb, 3000)
    }
  })
}

export default liveHelpNow
