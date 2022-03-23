import emailIcon from '../svg/email.svg'
import linkIcon from '../svg/link.svg'
import githubIcon from '../svg/github.svg'
import runningIcon from '../svg/running.svg'
import rssIcon from '../svg/rss.svg'
import twitterIcon from '../svg/twitter.svg'
import telegramIcon from "../svg/telegram.svg"
import $ from '../helper/query'

class User {
  constructor(selector) {
    this.container = $(selector)
    this.user = null
  }

  get email() {
    const email = this.user.email || this.user.organizationBillingEmail
    return email ? `<a target="_blank" href="mailto:${email}">${emailIcon}</a>` : ''
  }

  get running() {
    return `<a target="_blank" href="https://running.leeyom.top">${runningIcon}</a>`
  }

  get rss() {
    return `<a target="_blank" href="https://raw.githubusercontent.com/superleeyom/blog/master/feed.xml">${rssIcon}</a>`
  }

  get twitter() {
    return `<a target="_blank" href="https://twitter.com/super_leeyom">${twitterIcon}</a>`
  }

  get telegram() {
    return `<a target="_blank" href="https://t.me/super_leeyom">${telegramIcon}</a>`
  }

  get website() {
    const { websiteUrl } = this.user

    if (!websiteUrl) {
      return ''
    }
    if (/^(http:|https:)/.test(websiteUrl)) {
      return `<a target="_blank" href="${websiteUrl}">${linkIcon}</a>`
    }

    return `<a target="_blank" href="//${websiteUrl}">${linkIcon}</a>`
  }

  get bio() {
    return this.user.bio ? `<p>${this.user.bio}</p>` : ''
  }

  render(userData) {
    this.user = userData

    const {
      user,
      email,
      website,
      bio,
      container,
      running,
      twitter,
      telegram,
      rss,
    } = this

    container.html(`
      <a href="#/">
        <img src="${user.avatarUrl}" />
      </a>
      <h1>${user.name || user.login}</h1>
      ${bio}
      <div class="social">
        ${running}
        <a target="_blank" href="${user.url}">${githubIcon}</a>
        ${website}
        ${email}
        ${twitter}
        ${telegram}
        ${rss}
      </div>
    `)
  }
}

export default User
