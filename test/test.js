const JpaisysToken = artifacts.require('JpaisysToken')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('JpaisysToken', ([deployer, uploader]) => {
  let jpaisystoken

  before(async () => {
    jpaisystoken = await JpaisysToken.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await jpaisystoken.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await jpaisystoken.name()
      assert.equal(name, 'JpaisysToken', 'name is correct')
    })

    it('has a symbol', async () => {
      const symbol = await jpaisystoken.symbol()
      assert.equal(symbol, 'JPAISYS', 'symbol is correct')
    })

    it('sets initial supply', async () => {
      const total = await jpaisystoken.totalSupply()
      assert.equal(total, 1000, 'total supply is correct')
    })
  })
})