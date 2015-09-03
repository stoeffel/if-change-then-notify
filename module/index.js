import notify from 'display-notification';
import chokidar from 'chokidar';
import { info } from 'log-symbols';
import { cyan, grey } from 'chalk';

export default function (glob) {
  let watcher = chokidar.watch(glob, { ignored: /node_modules/ });

  console.log(cyan(`Start watching ${glob}...`));
  watcher.on('change', (filepath) => {
    console.log(grey(` ${info}\t${filepath}`))
    notify({
      title: `File changed ${glob}`,
      text: filepath
    });
  })
}
