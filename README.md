# @focus/umi-plugin-dofin

A umi plugin

## Install

```bash
pnpm i umi-plugin-dofin
```

## Usage

Configure in `.umirc.ts`,

```js
export default {
  plugins: [["umi-plugin-dofin"]],
  dofin: {
    key: "smartXXX",
    src: "",
    dsn: "",
  },
};
```

## Options

dofin

| params | default | required | type   |
| :----- | :------ | :------- | :----- |
| key    | -       | true     | string |
| src    | -       | false    | string |
| dsn    | -       | false    | string |

## Examples

```shell
yarn dev

cd example
yarn
yarn start
```

## LICENSE

MIT
