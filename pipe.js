import RPC from 'bare-rpc'

Pear.updates(() => Pear.reload())

const pipe = Pear.worker.run('./worker.js')

Pear.teardown(() => {
  if (pipe) {
    pipe.end()
  }
})

const rpc = new RPC(pipe)

window.rpc = rpc
