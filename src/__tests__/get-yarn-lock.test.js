const getYarnLock = require('../get-yarn-lock');

test('should find a yarn.lock file in redux repository', async () => {
  const yarnLockExists = await getYarnLock('https://raw.githubusercontent.com/facebook/react/master/yarn.lock');
  expect(yarnLockExists).toBe(true);
})

test('should not find a yarn.lock file in meteor repository', async () => {
  const yarnLockExists = await getYarnLock('https://raw.githubusercontent.com/meteor/meteor/devel/yarn.lock');
  expect(yarnLockExists).toBe(false);
})
