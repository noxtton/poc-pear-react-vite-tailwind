import RPC from 'bare-rpc'
import Autopass from 'autopass'
import Corestore from 'corestore'

const pass = new Autopass(new Corestore(Pear.config.storage + '/pass'))

export const handleRpcCommand = async (req) => {
  console.log(`Received command: ${req.command}`, req.data)

  switch (req.command) {
    case 0:
      try {
        await pass.add('a-note', 'hello this is a note')

        req.reply(JSON.stringify({ success: 'Created successfully' }))
      } catch (error) {
        req.reply(
          JSON.stringify({
            error: `Error setting storage path: ${error}`
          })
        )
      }

      break

    case 1:
      try {
        const note = await pass.get('a-note')

        req.reply(JSON.stringify({ success: true, res: note }))
      } catch (error) {
        req.reply(
          JSON.stringify({
            error: `Error initializing vaults: ${error}`
          })
        )
      }

      break

    default:
      req.reply(
        JSON.stringify({
          error: `Unknown command: ${req.command}`
        })
      )
      return
  }
}

const ipc = Pear.worker.pipe()

ipc.on('close', () => Bare.exit(0))

ipc.on('end', () => Bare.exit(0))

export const rpc = new RPC(ipc, handleRpcCommand)
