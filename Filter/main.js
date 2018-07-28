// We want to use the channels example,
// but this time we have a user object, with some setting.
// So we need to get the NOT premium channels and
// the PREMIUM CHANNELS whenever we call the methods.

const channels = [{
    name: 'HBO',
    premium: true
  },
  {
    name: 'LIFE',
    premium: false
  },
  {
    name: 'Max',
    premium: true
  },
  {
    name: 'Cooking channel',
    premium: false
  },
  {
    name: 'WOBI',
    premium: false
  }
];
const user = {
  name: 'Francis',
  premium: true,
  premiumChannels: function () {
    const $this = this;
    // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
    return channels.filter(function(channel){
      return channel.premium && $this.premium;
    }).map(function(channel){
      return channel.name;
    })
  },
  channels: function () {
    // GET THE NON-PREMIUM CHANNELS
    return channels.filter(function(channel){
      return !channel.premium;
    }).map(function(channel){
      return channel.name
    })
  }
}
console.log(user.premiumChannels())
// brings HBO and MAX
console.log(user.channels())
// brings LIFE, COOCKING CHANNEL AND WOBI