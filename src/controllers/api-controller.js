import packageJson from '../../package.json';

const getIndex = ctx => {
  ctx.body = {
    success: true,
    data: {
      name: packageJson.name,
      version: packageJson.version,
    },
  };
};

const getFooList = ctx => {
  ctx.body = {
    success: true,
    data: ['foo1', 'foo2', 'foo3', 'foo4'],
  };
};

export default {
  getIndex,
  getFooList,
};
