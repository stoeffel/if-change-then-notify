#!/usr/bin/env node

import meow from 'meow';

import ifChangeThenNotify from './';

const cli = meow({
	help: [
		'Usage',
		'  $ ifctn glob',
		'',
		'Examples',
		'  $ ifctn "**/package.json"'
	]
});

ifChangeThenNotify(cli.input[0]);
