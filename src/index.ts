import type { IApi } from 'umi';

const DEFAULT_SRC = 'xxx'
const DEFAULT_DSN = 'xxx'

export default (api: IApi) => {
  // See https://umijs.org/docs/guides/plugins
  api.describe({
    key: 'dofin',
    config: {
      schema(joi) {
        return joi.object({
          key: joi.string().required().label('dofin primary key'),
          src: joi.string().label('dofin server src'),
          dsn: joi.string().label('dofin server dsn'),
        });
      },
    },
  });
  const dofin = api.userConfig.dofin
  api.logger.info(dofin)
  api.addHTMLHeadScripts(() => [{
    src: `${dofin?.src || DEFAULT_SRC}`
  }])
  api.addHTMLHeadScripts(() => {
    return [{
      content: `
        DOFIN.init({
          dsn: '${dofin?.dsn || DEFAULT_DSN}',
          projectType: '${dofin?.key}',
        });    
      `
    }]
  })
};
