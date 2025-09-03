import { useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    const rpc = window.rpc

    console.log('RPC initialized:', rpc)

    void (async () => {
      const req = rpc.request(0)

      req.send()

      const res = await req.reply('utf8')

      console.log('REQ 0', res)

      const req1 = rpc.request(1)

      req1.send()

      const res1 = await req1.reply('utf8')

      console.log('REQ 1', res1)
    })()
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-center text-[2rem] font-bold text-white">
        Hello World! 🍐
      </h1>
    </div>
  )
}
