import $ from 'jquery'
import _ from 'lodash'

const clickHandler = event => {
  event.preventDefault()
  window.OpenLHNChat()
}

export const liveHelpNow = (
  accountInfo,
  scriptURL = '//www.livehelpnow.net/lhn/widgets/chatbutton/lhnchatbutton-current.min.js',
  scriptId = 'lhnscript',
  attributeName = 'data-chat'
) => {
  if (!accountInfo) {
    throw new Error(
      'You must provide a the account information as the first argument.'
    )
  }

  _.forEach(accountInfo, (value, key) => {
    window[key] = value
  })

  $('body').append(`<script src=${scriptURL} id="${scriptId}"></script>`)

  $(`[${attributeName}]`).on('click', clickHandler)
}

export default liveHelpNow
