const { Etcd3 } = require('etcd3')
const client = new Etcd3()

const test = async () => {
  const telegram_key = await client.get('telegram').string()
  console.log('La API key de Telegram es:', telegram_key)

  await client.delete().all()
}

test()
